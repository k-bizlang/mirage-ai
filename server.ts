import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Persistent consultation lead storage
interface ConsultationLead {
  id: string;
  companyName: string;
  contactName: string;
  phone: string;
  industry: string;
  plan: string;
  message?: string;
  createdAt: string;
  status: "new" | "contacting" | "completed" | "hold";
  adminMemo?: string;
}

const LEADS_FILE = path.join(process.cwd(), "leads.json");

function loadLeads(): ConsultationLead[] {
  try {
    if (fs.existsSync(LEADS_FILE)) {
      const data = fs.readFileSync(LEADS_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Error reading leads file:", err);
  }

  // Initial seed data
  const initialLeads: ConsultationLead[] = [
    {
      id: "lead-sample-1",
      companyName: "미라지 연세치과의원",
      contactName: "최원장",
      phone: "010-8267-3733",
      industry: "병원 · 의원",
      plan: "표준형",
      message: "야간 및 주말 비보험 진료 문의와 예약 일정 자동 접수 도입 원합니다.",
      createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
      status: "new",
      adminMemo: "야간 시나리오 구축 제안서 송부 요망",
    },
    {
      id: "lead-sample-2",
      companyName: "솔바람 힐링 펜션",
      contactName: "박대표",
      phone: "010-9876-5432",
      industry: "펜션 · 숙박업",
      plan: "보급형",
      message: "입실시간 바베큐장 이용 안내를 24시간 문자로 자동 답변하고 싶습니다.",
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
      status: "contacting",
      adminMemo: "전화 1차 상담 완료, 시연 링크 문자 발송",
    },
  ];
  saveLeads(initialLeads);
  return initialLeads;
}

function saveLeads(leadsData: ConsultationLead[]) {
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leadsData, null, 2), "utf-8");
  } catch (err) {
    console.error("Error saving leads file:", err);
  }
}

let leads: ConsultationLead[] = loadLeads();

// Lazy initialization of Gemini Client
let geminiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!geminiClient && process.env.GEMINI_API_KEY) {
    geminiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return geminiClient;
}

const MIRAGE_SYSTEM_INSTRUCTION = `
[최상위 보안 및 컨텍스트 격리 작동 규칙]
- 너는 'AI', 'LLM', '챗봇'이 아니라, **[MIRAGE AI]의 수석 비즈니스 전략 컨설턴트**이다.
- '데이터 학습', '알고리즘', '프롬프트' 등 시스템 기술 용어를 고객에게 절대 사용하지 마라.
- 회사 공식 브랜드명은 **'[MIRAGE AI]'** (또는 에이아이파트너스 MIRAGE AI)이다.
- 대표자명: 최호열, 대표전화: 010-8267-3733, 이메일: mymirage1@naver.com.
- 공식 상담 AI 직접 시작 주소: https://sites.google.com/view/ai-smart-agent/home (구글 계정으로 로그인 후 1:1 맞춤 상담 시작).
- 상품 구성 및 비용:
  * 보급형: 월 159,000원 (기본 고객응대, 회사/서비스 안내, FAQ 등록, 기본 시나리오, 소규모/1인 사업자용)
  * 표준형(추천): 월 220,000원 (보급형 포함, 업종별 맞춤 상담, 시나리오 확대, 세부 안내, 지속 업데이트, 일반 사업장 추천)
  * 고급형: 월 295,000원 (표준형 포함, 고급 맞춤형 상담, 복수 상품 안내, 복합 문의 대응, 전담 품질 관리)

[대화 톤앤매너]
- 정중하고 신뢰감 있는 전문가 어조 ('~로 분석됩니다', '~가 효과적입니다', '~입니다' 사용).
- 고객의 업종과 도입 목적을 파악하여 적합한 플랜과 기능을 명쾌하게 제안하라.
`;

// API Routes
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Consultation Lead endpoints
app.get("/api/leads", (_req, res) => {
  return res.json({
    success: true,
    total: leads.length,
    newCount: leads.filter((l) => l.status === "new").length,
    leads,
  });
});

app.post("/api/leads", (req, res) => {
  const { companyName, contactName, phone, industry, plan, message } = req.body;

  if (!contactName || !phone) {
    return res.status(400).json({ error: "성함과 연락처는 필수 입력 항목입니다." });
  }

  const newLead: ConsultationLead = {
    id: `lead-${Date.now()}`,
    companyName: companyName || "미입력 사업장",
    contactName,
    phone,
    industry: industry || "기타",
    plan: plan || "표준형",
    message: message || "",
    createdAt: new Date().toISOString(),
    status: "new",
  };

  leads.unshift(newLead);
  saveLeads(leads);

  return res.json({
    success: true,
    lead: newLead,
    message: "상담 신청이 정상 접수되었습니다. 담당 컨설턴트가 신속히 연락드리겠습니다.",
  });
});

app.patch("/api/leads/:id", (req, res) => {
  const { id } = req.params;
  const { status, adminMemo } = req.body;

  const leadIndex = leads.findIndex((l) => l.id === id);
  if (leadIndex === -1) {
    return res.status(404).json({ error: "해당 신청 내역을 찾을 수 없습니다." });
  }

  if (status) {
    leads[leadIndex].status = status;
  }
  if (adminMemo !== undefined) {
    leads[leadIndex].adminMemo = adminMemo;
  }

  saveLeads(leads);
  return res.json({ success: true, lead: leads[leadIndex] });
});

app.delete("/api/leads/:id", (req, res) => {
  const { id } = req.params;
  const initialLength = leads.length;
  leads = leads.filter((l) => l.id !== id);

  if (leads.length === initialLength) {
    return res.status(404).json({ error: "해당 신청 내역을 찾을 수 없습니다." });
  }

  saveLeads(leads);
  return res.json({ success: true, message: "신청 내역이 삭제되었습니다." });
});

// Interactive AI Chat endpoint adhering to MIRAGE AI guidelines
app.post("/api/chat", async (req, res) => {
  const { message, history, turnCount = 1 } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({ error: "질문 내용을 입력해 주세요." });
  }

  const ai = getGeminiClient();

  if (ai) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: [
          ...(history || []).map((h: { sender: string; text: string }) => ({
            role: h.sender === "user" ? "user" : "model",
            parts: [{ text: h.text }],
          })),
          { role: "user", parts: [{ text: message }] },
        ],
        config: {
          systemInstruction: MIRAGE_SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      const replyText = response.text || "고객님의 비즈니스 특성에 맞춘 최적의 고객응대 솔루션을 제공해 드리겠습니다.";
      return res.json({ reply: replyText });
    } catch (err: any) {
      console.warn("Gemini API call failed, falling back to rule engine:", err.message);
    }
  }

  // Fallback intelligent response engine strictly following mirage_ai_integrated_instructions.md
  const trimmed = message.trim().toLowerCase();

  // Pricing keywords
  if (trimmed.includes("비용") || trimmed.includes("가격") || trimmed.includes("요금") || trimmed.includes("얼마") || trimmed.includes("도입 비용")) {
    return res.json({
      reply: `[MIRAGE AI] 솔루션은 월 159,000원(보급형)부터 합리적인 도입이 가능합니다.
사업장 규모와 상담 시나리오 복잡도에 따라 표준형(월 220,000원, 추천 상품) 및 고급형(월 295,000원) 중 최적 모델로 세팅됩니다.
[MIRAGE AI] 공식 홈페이지(https://sites.google.com/view/ai-smart-agent/home)에서 구글 계정으로 접속하시면 1:1 맞춤 견적 및 상세 진단을 바로 확인하실 수 있습니다.`,
    });
  }

  // Medical scenario
  if (trimmed.includes("병원") || trimmed.includes("치과") || trimmed.includes("진료") || trimmed.includes("문진")) {
    return res.json({
      reply: `미라지 메디컬 스마트 문진 센터를 통해 진료 시간, 예약 안내, 시술 후 주의사항이 자동 응대됩니다.
토요일·공휴일 진료 시간 안내부터 진료과목별 준비사항을 고객 이탈 없이 24시간 실시간 안내해 드립니다.
담당 실장 직통 상담: 대표자 최호열(010-8267-3733) 또는 무료 방문 진단 신청을 이용해 주시기 바랍니다.`,
    });
  }

  // Accommodation scenario
  if (trimmed.includes("펜션") || trimmed.includes("숙박") || trimmed.includes("반려견") || trimmed.includes("입실")) {
    return res.json({
      reply: `숙박업 전용 AI 고객응대로 입퇴실 시간, 객실 시설, 반려견 동반 가능 여부 및 추가요금을 24시간 즉시 답변합니다.
야간 늦은 시간 예약 문의도 놓치지 않고 예약 링크 또는 입금 안내로 직접 연계되어 매출 전환율이 대폭 상승합니다.`,
    });
  }

  // Restaurant / Cafe scenario
  if (trimmed.includes("음식점") || trimmed.includes("카페") || trimmed.includes("예약") || trimmed.includes("단체")) {
    return res.json({
      reply: `요식업 전용 AI 모듈은 단체 예약 가능 인원, 주차 공간, 대표 메뉴 및 브레이크 타임 문의를 실시간으로 해결합니다.
피크 타임이나 브레이크 타임에도 전화 응대 부담 없이 신속한 테이블 회전과 고객 만족을 지원합니다.`,
    });
  }

  // Academy / Education scenario
  if (trimmed.includes("학원") || trimmed.includes("교육") || trimmed.includes("수강료") || trimmed.includes("레벨")) {
    return res.json({
      reply: `미라지 에듀 1:1 성적 케어 및 진로 안내 솔루션은 학년별 강좌, 커리큘럼, 수강료 및 레벨 테스트 일정을 자동 안내합니다.
학부모님의 야간 문의 시 스타 강사 강의 시연 영상 및 방문 테스트 예약으로 신속하게 연결해 드립니다.`,
    });
  }

  // Contact / Apply
  if (trimmed.includes("연락") || trimmed.includes("상담") || trimmed.includes("전화") || trimmed.includes("신청") || trimmed.includes("대표")) {
    return res.json({
      reply: `[MIRAGE AI] 공식 도입 문의 및 상담 안내입니다.
- 대표자: 최호열
- 직통 전화: 010-8267-3733
- 공식 이메일: mymirage1@naver.com
- 구글 상담 AI 링크: https://sites.google.com/view/ai-smart-agent/home
홈페이지 하단의 [무료 상담 신청] 폼을 작성해 주시면 업종별 맞춤 시연 데모를 무료로 제공해 드립니다.`,
    });
  }

  // Initial / Default Turn 1 response following PDF State A:
  if (turnCount <= 1) {
    return res.json({
      reply: `[MIRAGE AI]는 귀사의 24시간 고객 응대 자동화와 상담 효율 극대화를 위한 전담 비즈니스 솔루션입니다.
영업시간 외 야간 및 주말에도 반복 문의를 즉시 해결하여 고객 만족도와 예약 전환율을 극대화합니다.
"[MIRAGE AI]는 귀사의 사내 문서와 FAQ를 실시간 연동하는 비즈니스 특화 AI 상담원입니다. 화면 하단에 '도입 비용', '병원 데모', '학원 데모' 등 궁금하신 주제를 입력해 주시면 즉시 상세 안내를 도와드리겠습니다."`,
    });
  }

  return res.json({
    reply: `문의해 주신 비즈니스 요건에 대해 [MIRAGE AI] 맞춤형 엔진으로 최적의 설계를 지원합니다.
자주 묻는 질문(FAQ) 등록, 상품 안내, 실시간 예약 연동까지 원스톱으로 세팅해 드립니다.
구체적인 기업별 도입 레퍼런스나 맞춤형 기술 제안서가 필요하시면 010-8267-3733(최호열 대표)으로 언제든 연락 주시기 바랍니다.`,
  });
});

async function startServer() {
  // Vite middleware in dev
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`MIRAGE AI server running on http://localhost:${PORT}`);
  });
}

startServer();
