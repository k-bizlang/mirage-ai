import { PricingPlan, CaseStudy, IndustryScenario } from "../types";

export const COMPANY_INFO = {
  name: "MIRAGE AI",
  brandSubtitle: "에이아이파트너스 × 지속가능경영연구원",
  fullName: "MIRAGE AI (글로벌 비즈니스 통합 AI 세일즈 자동화 엔진)",
  representative: "최호열, 신기욱",
  authorRepresentative: "지속가능경영연구원 대표 신기욱",
  copyrightHolder: "지속가능경영연구원 (Ulsan Office)",
  copyrightRegistrationNo: "C-2026-017543",
  copyrightRegistrationDate: "2026.04.07",
  copyrightCreationDate: "2026.02.05",
  copyrightWorkType: "컴퓨터프로그램저작물(응용프로그램 > 사무관리)",
  copyrightOfficialInstitution: "한국저작권위원회 (Korea Copyright Commission)",
  logoUrl: "/mirage-ai-logo.png",
  logoFallbackUrl: "/mirage ai 로그.png",
  phone: "010-8267-3733",
  telLink: "tel:01082673733",
  email: "mymirage1@naver.com",
  mailLink: "mailto:mymirage1@naver.com",
  // 공식 링크 모음
  blogUrl: "https://blog.naver.com/mymirage1",
  demoVideoUrl: "https://youtu.be/pI4yGvPkHns",
  officialWebsiteUrl: "https://mirage-ai-phi.vercel.app/",
  scenarioSiteUrl: "https://sites.google.com/view/ai-smart-agent/home",
  driveFolderUrl: "https://drive.google.com/drive/folders/1CKY8sFN6pC5P0w0vBsE_Kfycmy8G2m2C?usp=drive_link",
  // 미가입자 구글계정 가입/로그인 링크
  googleSignUpUrl: "https://accounts.google.com/AccountChooser?continue=https://gemini.google.com/",
  // 24시간 AI 상담 실시간 대화 링크 (통일)
  aiChat24hUrl: "https://gemini.google.com/gem/1Z7FOmWQLR_iMcF2XkgkTUZMO5YeovToZ?usp=sharing",
  externalAgentUrl: "https://gemini.google.com/gem/1Z7FOmWQLR_iMcF2XkgkTUZMO5YeovToZ?usp=sharing",
  operatingHours: "평일 09:00 - 18:00 (AI 고객응대: 24시간 365일 무휴)",
  footerCopyrightNotice: "MIRAGE AI | 지속가능경영연구원 (Ulsan Office) | C-2026-017543 호",
};

// 공식 저작권 등록 상세 정보
export const COPYRIGHT_DETAILS = {
  registrationNumber: "C-2026-017543 호",
  titleKo: "글로벌 비즈니스 통합 AI 세일즈 자동화 엔진",
  titleEn: "Global Business Integrated AI Sales Automation Engine",
  author: "지속가능경영연구원 대표 신기욱",
  authorOffice: "지속가능경영연구원 (Ulsan Office)",
  authorAddress: "울산광역시 남구 중앙로",
  createdDate: "2026년 02월 05일",
  registeredDate: "2026년 04월 07일",
  workCategory: "컴퓨터프로그램저작물 > 응용프로그램 > 사무관리",
  institution: "한국저작권위원회",
  statement: "지속가능경영연구원에서 독자 개발하고 정부 기관을 통해 기술 독점 권리를 공식 인증받은 고성능 상담 및 세일즈 자동화 AI 엔진입니다.",
  mission: "Global Business Integrated AI Sales Automation",
  legalBadge: "한국저작권위원회 정식 등록 완료 (C-2026-017543)",
};

// 메인 이미지 대시보드 통계 지표
export const DASHBOARD_METRICS = {
  title: "GLOBAL SALES AUTOMATION & CS BUSINESS INSIGHT",
  subtitle: "(Global Business Integrated AI Engine)",
  cards: [
    {
      id: "consultation",
      label: "총체 상담",
      value: "1,200건",
      subtext: "Total 상담: 1,200건 | AI 처리율: 85%",
      badge: "AI 처리율 85%",
      chartType: "monthly-bars",
      color: "blue",
    },
    {
      id: "summary",
      label: "AI 상담 요약",
      value: "323.0%",
      subtext: "최다 문의 유형: 배송 문의(30%)",
      badge: "실시간 요약",
      chartType: "type-bars",
      color: "indigo",
    },
    {
      id: "customers",
      label: "고객 CS 고객",
      value: "4,895명",
      subtext: "고객 만족도: 4.8 / 5.0",
      badge: "만족도 4.8",
      chartType: "donut",
      color: "emerald",
    },
  ],
  monthlyStats: [
    { month: "1월", count: 350 },
    { month: "2월", count: 580 },
    { month: "3월", count: 860 },
    { month: "4월", count: 1200 },
  ],
  inquiryTypes: [
    { label: "배송 문의", percentage: 30, color: "bg-sky-400" },
    { label: "주문·접수", percentage: 25, color: "bg-blue-500" },
    { label: "상품·스펙", percentage: 22, color: "bg-indigo-500" },
    { label: "견적·비용", percentage: 15, color: "bg-teal-400" },
    { label: "기타 CS", percentage: 8, color: "bg-slate-400" },
  ],
  recentLogs: [
    { id: "LOG-1029", time: "방금 전", type: "다국어 수출 스펙 견적", status: "자동응답 완료 (100%)" },
    { id: "LOG-1028", time: "2분 전", type: "심야 야간 진료/내원 안내", status: "즉각 답변 완료 (100%)" },
    { id: "LOG-1027", time: "5분 전", type: "수강료 및 레벨테스트 신청", status: "자동 접수 완료 (100%)" },
    { id: "LOG-1026", time: "11분 전", type: "법률 기초 지식 및 판례", status: "상담 요약 완료 (100%)" },
  ],
};

// 제2장: 상담 AI 핵심 기능 및 산업별 효율성
export const CHAPTER_2_FEATURES = {
  chapter: "제2장: 상담 AI 핵심 기능 및 산업별 효율성",
  headline: "검증된 지능형 상담 엔진: 전 산업의 효율성을 극대화",
  subtext: "자연어 이해(NLU)와 RAG 지식 데이터를 결합하여 어떤 업종이든 0.8초 만에 고신뢰도 전문 상담을 제공합니다.",
  industries: [
    {
      id: "trade",
      title: "다국어 세일즈 지원 (제조·무역)",
      icon: "Globe2",
      languages: ["Hallo!", "Hello!", "你好!", "Hola!"],
      description: "글로벌 바이어 24시간 실시간 영문/다국어 응대, 제품 기술 스펙 및 카탈로그 자동 전송, 수출 수주율 극대화",
      tag: "글로벌 B2B 세일즈",
    },
    {
      id: "medical",
      title: "스마트 문진·안내 (의료·병원)",
      icon: "Stethoscope",
      languages: ["진료과목 안내", "스마트 문진 접수"],
      description: "야간 및 주말 진료 시간 자동 안내, 내원 전 스마트 사전 문진 접수, 대기 시간 최소화 및 전문 안내",
      tag: "의료·병원 안심케어",
    },
    {
      id: "education",
      title: "맞춤형 학습 컨설팅 (교육·학원)",
      icon: "GraduationCap",
      languages: ["수강료 안내", "레벨테스트 접수"],
      description: "학년별 맞춤 커리큘럼 및 수강료 1초 안내, 무료 레벨테스트 신청 접수, 학부모 상담 피로도 80% 절감",
      tag: "교육·학원 컨설팅",
    },
    {
      id: "legal",
      title: "기초 지식 및 판례 안내 (법률·회계)",
      icon: "Scale",
      languages: ["기초 지식 안내", "판례 사실관계 요약"],
      description: "유사 판례 및 기초 절차 정보 신속 안내, 사건 개요 및 사실관계 자동 요약, 전담 전문가 대면 수임 상담 연결",
      tag: "전문직 수임 비서",
    },
  ],
  pillars: [
    {
      title: "지능형 상담 및 자동화",
      subtitle: "자연어 이해(NLU) 기반 실시간 고객 대응",
      description: "자연어 이해(NLU) 기반 24시간 실시간 고객 대응, 맞춤 상담 가이드라인 제시, 고객 이탈 방지 및 수주율 대폭 향상",
      badge: "NLU 기반",
      icon: "MessageSquareText",
    },
    {
      title: "지식 데이터 기반 정확도",
      subtitle: "Hallucination 방지 & 프롬프트 최적화",
      description: "Hallucination(환각) 방지 검증 로직 적용, 오답을 원천 차단하는 프롬프트 튜닝, 신뢰도 99% 이상의 고품질 전문 상담",
      badge: "RAG & 오답 최소화",
      icon: "BrainCircuit",
    },
    {
      title: "비용 절감 및 효율화",
      subtitle: "실시간 상담 요약 & CS 운영 고도화",
      description: "모든 상담 건 실시간 요약 리포트, 일/월별 비용 절감 지표 시각화, 단순 반복 문의를 80% 이상 자동화하여 본업 집중",
      badge: "비용 80% 절감",
      icon: "BarChart3",
    },
  ],
};

// 제3장: 서비스 제공 절차 및 연동 채널 (아웃트로)
export const CHAPTER_3_PROCEDURE = {
  chapter: "제3장: 서비스 제공 절차 및 연동 채널 (아웃트로)",
  headline: "다양한 채널 연동 및 검증된 기술 스택",
  subtext: "이미 사용 중이신 모든 소통 채널에 코딩 없이 부드럽게 임베딩되며, 글로벌 최신 AI 기술 스택으로 안전하게 구동됩니다.",
  channels: [
    { name: "KakaoTalk Channel", label: "카카오톡 채널", icon: "MessageCircle", badge: "국내 1위 메신저", bg: "bg-amber-50 border-amber-300 text-amber-900" },
    { name: "Website Widget", label: "웹사이트 위젯", icon: "Globe", badge: "자사몰/랜딩페이지", bg: "bg-blue-50 border-blue-300 text-blue-900" },
    { name: "LINE Messenger", label: "라인 메신저", icon: "Send", badge: "글로벌/일본·동남아", bg: "bg-emerald-50 border-emerald-300 text-emerald-900" },
    { name: "Slack Integration", label: "슬랙(Slack)", icon: "Workflow", badge: "사내 협업/알림", bg: "bg-purple-50 border-purple-300 text-purple-900" },
  ],
  techStack: [
    { name: "OpenAI", role: "첨단 초거대 언어 모델(LLM) 엔진", icon: "Bot", color: "text-emerald-500" },
    { name: "Python", role: "고성능 데이터 처리 & 백엔드 파이프라인", icon: "Code2", color: "text-amber-500" },
    { name: "TensorFlow", role: "정밀 머신러닝 패턴 학습 및 분류", icon: "Cpu", color: "text-orange-500" },
    { name: "RAG Technology", role: "사내 지식 기반 검색 증강 생성(Retrieval-Augmented)", icon: "ShieldCheck", color: "text-sky-500" },
  ],
  steps: [
    {
      step: "Step 1",
      title: "1:1 맞춤형 심층 상담",
      desc: "사업장 업종, 주요 고객 문의 유형, 세일즈 타깃 및 운영 방침에 대한 1:1 심층 진단",
      icon: "Handshake",
    },
    {
      step: "Step 2",
      title: "비즈니스 가이드라인 및 데이터 학습",
      desc: "기존 사내 FAQ, 상품 설명서, 가격표 및 전문 매뉴얼을 AI 지식 베이스로 완벽 변환",
      icon: "BookOpenCheck",
    },
    {
      step: "Step 3",
      title: "AI 맞춤 엔진 빌드",
      desc: "Hallucination 방지 로직과 기업 전용 RAG 기술이 탑재된 독립 AI 세일즈 엔진 커스텀 제작",
      icon: "Cpu",
    },
    {
      step: "Step 4",
      title: "테스트 및 채널 임베딩",
      desc: "카카오톡, 자사 웹사이트, 라인 등 희망 채널 연동 및 가상 고객 질의를 통한 완벽 검증",
      icon: "FlaskConical",
    },
    {
      step: "Step 5",
      title: "안정화 및 유지보수",
      desc: "실시간 CS 통계 대시보드 오픈, 24/7 모니터링 및 주기적 시나리오 고도화 무상 지원",
      icon: "Wrench",
    },
  ],
};

// 제4장: 합리적인 도입 플랜 (36개월 약정)
export const CHAPTER_4_PRICING = {
  chapter: "제4장: 합리적인 도입 플랜 (36개월 약정)",
  headline: "초기 부담을 최소화한 기업 맞춤형 초저비용 대안",
  valueHighlight: "연간 1.5억 원 인건비 대비 월 수만 원대 비용으로 고성능 AI 팀장 고용 효과!",
  structures: [
    {
      id: "setup",
      category: "초기 세팅비 (최초 1회)",
      tag: "최초 1회 맞춤 구축",
      highlight: "기업 전용 RAG 엔진 커스텀 빌드",
      features: [
        "기업 맞춤 지식(RAG) 엔진 커스텀 빌드",
        "카카오톡/웹 채널 임베딩 테스트 및 안정화",
        "Hallucination 최소화 로직 적용",
        "고신뢰도 전문 상담 프롬프트 최적화",
        "사내 매뉴얼 및 FAQ 정밀 데이터 임베딩",
      ],
      icon: "Cpu",
    },
    {
      id: "rental",
      category: "월간 렌탈료 (36개월 약정)",
      tag: "36개월 안심 약정 플랜",
      highlight: "월 15.9만원부터 합리적 운영",
      features: [
        "24/7 무중단 AI 클라우드 호스팅 운영",
        "실시간 CS 통계 대시보드 및 AI 로그 제공",
        "무상 기술 지원 및 모니터링 통합 패키지",
        "상담 시나리오 주기적 무상 업데이트",
        "트래픽 급증 시에도 0.8초 초고속 응답 보장",
      ],
      icon: "CloudCog",
    },
  ],
};

export const VALUE_PILLARS = [
  {
    icon: "Clock",
    title: "24시간 고객응대",
    desc: "영업시간 이후에도 AI가 고객 문의에 대응합니다.",
  },
  {
    icon: "Zap",
    title: "빠른 상담",
    desc: "고객이 기다리지 않고 필요한 정보를 바로 확인할 수 있습니다.",
  },
  {
    icon: "TrendingUp",
    title: "업무 효율 향상",
    desc: "반복적인 질문과 기본 안내를 AI가 대신합니다.",
  },
  {
    icon: "Sliders",
    title: "사업 맞춤형 구성",
    desc: "업종과 사업장 특성에 맞춰 상담 내용을 구성할 수 있습니다.",
  },
];

export const MAIN_FEATURES = [
  "24시간 자동 고객응대",
  "회사 및 상품 안내",
  "자주 묻는 질문 자동 답변",
  "서비스 이용방법 안내",
  "상담 및 문의 접수 응대",
  "고객 문의 분류 및 통계",
  "사업장 맞춤형 답변 설정",
  "다양한 업종 즉시 적용 가능",
];

export const TARGET_INDUSTRIES = [
  { name: "병원 · 의원", icon: "Stethoscope", tag: "진료시간·내원안내" },
  { name: "펜션 · 숙박업", icon: "Home", tag: "입퇴실·반려견" },
  { name: "음식점 · 카페", icon: "Utensils", tag: "메뉴·주차안내" },
  { name: "학원 · 교육기관", icon: "GraduationCap", tag: "수강료·커리큘럼" },
  { name: "부동산", icon: "Building2", tag: "매물정보·방문" },
  { name: "자동차 관련 업체", icon: "Car", tag: "정비·시승상담" },
  { name: "법무 · 세무 · 컨설팅", icon: "Scale", tag: "상담수임·절세" },
  { name: "온라인 쇼핑몰", icon: "ShoppingBag", tag: "배송·교환반품" },
  { name: "중소기업", icon: "Briefcase", tag: "제품스펙·B2B" },
  { name: "1인 사업장 및 자영업자", icon: "UserCheck", tag: "통화대체·업무집중" },
];

// 상세 요금표 (단위: 원, 부가세 포함) - 이미지-6 정확히 반영
export const PRICING_TABLE_CONFIG = {
  title: "MIRAGE 상담 마케팅 AI 서비스 이용 요금",
  unit: "* 단위: 원 (부가세 포함)",
  exactPriceNotice: "정확한 금액은 상담을 통하여 최종 금액이 결정됩니다.",
  summaryHeaders: ["구분", "서비스 항목", "Entry level (보급형)", "STANDARD (기본형)", "DELUXE (고급형)", "PREMIUM (최상품)", "비고"],
  summaryRows: [
    {
      category: "초기 세팅비",
      item: "상담 AI 설치비",
      entry: "220,000",
      standard: "550,000",
      deluxe: "770,000",
      premium: "990,000",
      note: "흐름도, 시트 연동",
    },
    {
      category: "월 사용료",
      item: "상담 AI 월 이용료",
      entry: "69,000",
      standard: "99,000",
      deluxe: "169,000",
      premium: "250,000",
      note: "무중단 호스팅, 유지보수",
    },
  ],
  detailHeaders: ["항목", "Entry", "Standard", "Deluxe", "Premium"],
  detailRows: [
    { item: "의무계약기간", entry: "블로그 장착 전용_12개월", standard: "기초 상담 엔진 세팅_36개월", deluxe: "상담 엔진 + 기능 확장_36개월", premium: "맞춤형 엔터프라이즈_36개월" },
    { item: "메인창", entry: "1P", standard: "1P", deluxe: "1P", premium: "1P" },
    { item: "이미지포함(이미지제공)", entry: "-", standard: "3P", deluxe: "5P", premium: "7P" },
    { item: "상담창", entry: "1P", standard: "1P", deluxe: "1P", premium: "1P" },
    { item: "유튜브", entry: "-", standard: "1건", deluxe: "5건", premium: "7건" },
    { item: "자료다운", entry: "-", standard: "-", deluxe: "5건", premium: "10건" },
    { item: "학습(30P/A4기준)", entry: "2건", standard: "5건", deluxe: "15건", premium: "30건" },
    { item: "요약 메일 발송", entry: "-", standard: "-", deluxe: "1건", premium: "1건" },
    { item: "실시간 연동(A4기준/1건)", entry: "-", standard: "-", deluxe: "-", premium: "1건" },
    { item: "질문/응답수", entry: "3개", standard: "10개", deluxe: "30개", premium: "50개" },
  ],
  notes: [
    "정확한 금액은 상담을 통하여 최종 금액이 결정됩니다.",
    "기능 추가시 건당 발생 됨.",
    "기타 추가 기능을 협의 후 결정 함.",
  ],
  importantNotice: "본 상품은 온라인 구축형 서비스로, 실물 배송이 없는 디지털 상품입니다. 정확한 금액은 상담을 통하여 최종 금액이 결정되며, 협의 후 확정된 구축 프로세스에 따라 단계별 진행됩니다.",
};

// 도입을 위한 안내 - 구축 준비 체크리스트 (이미지-8 정확히 반영)
export const ADOPTION_GUIDE_DATA = {
  title: "MIRAGE AI 도입을 위한 안내",
  subtitle: "MIRAGE AI 서비스는 고객사의 비즈니스 환경에 최적화된 맞춤형 솔루션입니다.",
  checklistTitle: "구축 준비 체크리스트",
  checklistDescription: "본 서비스 도입 전, 아래 자료를 준비하시면 더욱 빠르고 정확한 세팅이 가능합니다.",
  checklistItems: [
    {
      category: "계정",
      requiredItem: "전용 구글 계정",
      description: "구축 전용 신규 구글 계정(ID/PW)",
      iconName: "KeyRound",
      badgeColor: "bg-blue-500/10 text-sky-400 border-blue-400/30",
    },
    {
      category: "지식 베이스",
      requiredItem: "상세 소개 자료",
      description: "카탈로그, 매뉴얼, 가격표 (DOC/PPT/PDF 등)",
      iconName: "FileSpreadsheet",
      badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-400/30",
    },
    {
      category: "상담 로직",
      requiredItem: "FAQ 및 시나리오",
      description: "고객 자주 묻는 질문(FAQ) 및 답변 리스트",
      iconName: "MessagesSquare",
      badgeColor: "bg-sky-500/10 text-sky-400 border-sky-400/30",
    },
    {
      category: "정책/인증",
      requiredItem: "상담 기조 및 인증",
      description: "학습 기조, 전문 자격증 등 전문성 근거 자료",
      iconName: "ShieldCheck",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-400/30",
    },
    {
      category: "운영 설정",
      requiredItem: "답변 스타일 지정",
      description: "톤앤매너, 상담 유형(단순/전문) 선택",
      iconName: "SlidersHorizontal",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-400/30",
    },
    {
      category: "홍보 자료",
      requiredItem: "영상 및 참고 링크",
      description: "서비스 소개 영상(유튜브 링크), 로고, 공식 채널",
      iconName: "Video",
      badgeColor: "bg-rose-500/10 text-rose-400 border-rose-400/30",
    },
  ],
  notice: "자료 준비가 완료되시면 MIRAGE AI 전담 엔지니어가 1:1로 맞춤 RAG 엔진 빌드 및 임베딩을 즉시 개시합니다.",
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "entry",
    name: "Entry level (보급형)",
    price: "월 69,000원",
    monthlyPrice: 69000,
    setupFee: "220,000원",
    contractPeriod: "블로그 장착 전용_12개월",
    badge: "블로그 장착 전용",
    description: "블로그에 장착하여 24시간 상담 자동화를 시작하는 소상공인 최적 플랜",
    features: [
      "초기 설치비 220,000원 (흐름도, 시트 연동)",
      "의무계약: 블로그 장착 전용 12개월",
      "메인창 1P + 상담창 1P",
      "지식 학습 2건 (30P/A4 기준)",
      "질문/응답수 3개 세팅",
      "무중단 호스팅 및 유지보수 포함",
    ],
    buttonText: "Entry (보급형) 신청",
  },
  {
    id: "standard",
    name: "STANDARD (기본형)",
    price: "월 99,000원",
    monthlyPrice: 99000,
    setupFee: "550,000원",
    contractPeriod: "기초 상담 엔진 세팅_36개월",
    badge: "추천 상품 · BEST",
    isPopular: true,
    description: "다양한 고객 문의가 발생하는 일반 사업장에 추천하는 기초 상담 베스트 플랜",
    features: [
      "초기 설치비 550,000원 (흐름도, 시트 연동)",
      "의무계약: 기초 상담 엔진 세팅 36개월",
      "메인창 1P + 상담창 1P + 이미지 3P",
      "유튜브 1건 연동",
      "지식 학습 5건 (30P/A4 기준)",
      "질문/응답수 10개 세팅",
      "무중단 호스팅 및 유지보수 포함",
    ],
    buttonText: "Standard (기본형) 신청",
  },
  {
    id: "deluxe",
    name: "DELUXE (고급형)",
    price: "월 169,000원",
    monthlyPrice: 169000,
    setupFee: "770,000원",
    contractPeriod: "상담 엔진 + 기능 확장_36개월",
    badge: "기능 확장형",
    description: "자료 다운로드 5건, 유튜브 5건, 요약 메일까지 지원하는 기능 확장형 플랜",
    features: [
      "초기 설치비 770,000원 (흐름도, 시트 연동)",
      "의무계약: 상담 엔진 + 기능 확장 36개월",
      "메인창 1P + 상담창 1P + 이미지 5P",
      "유튜브 5건 + 자료다운 5건 연동",
      "지식 학습 15건 (30P/A4 기준)",
      "요약 메일 발송 1건 탑재",
      "질문/응답수 30개 세팅",
    ],
    buttonText: "Deluxe (고급형) 신청",
  },
  {
    id: "premium",
    name: "PREMIUM (최상품)",
    price: "월 250,000원",
    monthlyPrice: 250000,
    setupFee: "990,000원",
    contractPeriod: "맞춤형 엔터프라이즈_36개월",
    badge: "엔터프라이즈",
    description: "실시간 연동과 50개 Q&A, 방대한 지식 30건을 완벽 대응하는 최상위 솔루션",
    features: [
      "초기 설치비 990,000원 (흐름도, 시트 연동)",
      "의무계약: 맞춤형 엔터프라이즈 36개월",
      "메인창 1P + 상담창 1P + 이미지 7P",
      "유튜브 7건 + 자료다운 10건 연동",
      "지식 학습 30건 (30P/A4 기준)",
      "요약 메일 발송 1건 + 실시간 연동 1건",
      "질문/응답수 50개 풀스펙",
    ],
    buttonText: "Premium (최상품) 신청",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    category: "병원 · 의원",
    title: "야간 및 주말 진료 문의 자동화",
    userQuestion: "“토요일에도 진료하나요?”",
    aiAnswer: "“토요일 진료시간은 오전 9시부터 오후 1시까지입니다. 내원 및 진료 접수 방법도 안내해드릴까요?”",
    tag: "진료안내",
    iconName: "Stethoscope",
    imageBg: "from-blue-600/10 to-indigo-600/10",
  },
  {
    id: "case-2",
    category: "펜션 · 숙박업",
    title: "심야 입실 및 시설 이용 문의",
    userQuestion: "“반려견 동반 가능한가요?”",
    aiAnswer: "“네, 반려견 동반이 가능합니다. 객실별 이용조건과 추가요금을 안내해드릴까요?”",
    tag: "이용상담",
    iconName: "Home",
    imageBg: "from-emerald-600/10 to-teal-600/10",
  },
  {
    id: "case-3",
    category: "음식점 · 카페",
    title: "피크 타임 전화 응대 부담 해소",
    userQuestion: "“단체 이용 및 모임 가능한가요?”",
    aiAnswer: "“네, 단체 이용 및 룸 배정이 가능합니다. 방문 예정일과 인원을 알려주시면 상세 이용 안내를 도와드리겠습니다.”",
    tag: "단체이용",
    iconName: "Utensils",
    imageBg: "from-amber-600/10 to-orange-600/10",
  },
  {
    id: "case-4",
    category: "학원 · 교육기관",
    title: "수강료 및 레벨 테스트 상담",
    userQuestion: "“수강료가 얼마인가요?”",
    aiAnswer: "“과정에 따라 수강료가 다릅니다. 원하시는 과정과 학년을 알려주시면 해당 내용을 안내해드리겠습니다.”",
    tag: "학습상담",
    iconName: "GraduationCap",
    imageBg: "from-purple-600/10 to-pink-600/10",
  },
  {
    id: "case-5",
    category: "부동산",
    title: "매물 추천 및 임장 일정 안내",
    userQuestion: "“원하는 평수 매물 정보가 있나요?”",
    aiAnswer: "“원하시는 평수와 지역 조건에 맞는 최신 매물 정보를 정리해 드립니다. 방문 일정도 조율해 드릴까요?”",
    tag: "매물조회",
    iconName: "Building2",
    imageBg: "from-cyan-600/10 to-blue-600/10",
  },
  {
    id: "case-6",
    category: "기업 · 상담서비스",
    title: "B2B 서비스 요금 및 제안 안내",
    userQuestion: "“서비스 비용과 이용방법이 궁금합니다.”",
    aiAnswer: "“서비스 유형에 따라 이용료가 달라집니다. 사업장 업종을 알려주시면 적합한 상품을 안내해드리겠습니다.”",
    tag: "B2B상담",
    iconName: "Briefcase",
    imageBg: "from-slate-600/10 to-zinc-600/10",
  },
];

export const DEEP_SCENARIOS: IndustryScenario[] = [
  {
    id: "medical",
    title: "스마트 메디컬 문진 센터",
    persona: "미라지 메디컬 클리닉의 수석 스마트 안심 간호사 및 환자 가이드라인 담당 실장",
    keywords: ["병원 데모", "치과 데모", "스마트 문진", "임플란트 사후케어", "레이저 시술"],
    sampleQ: "임플란트 시술 후 피가 조금 나는데 거즈를 언제까지 물고 있어야 하나요?",
    sampleA: "개인별 상태에 따른 정밀 소견을 위해 대면 진료가 필요하지만, 표준 매뉴얼에 따른 우선 대처 요령은 다음과 같습니다. 거즈는 최소 2시간 동안 침과 피를 삼키며 단단히 압박해 주셔야 지혈에 효과적입니다. 출혈이 지속되면 즉시 담당 간호사 직통 번호로 연결해 드리겠습니다.",
    ruleSummary: "의학적 책임 사전 고지 + 시술별 표준 케어 매뉴얼 안내 + 신속 내원 안내/다이렉트 연결",
  },
  {
    id: "legal",
    title: "법률 / 세무 전문직 수임 비서",
    persona: "MIRAGE 법률/세무 합동 사무소의 전문 수임 필터링 및 사건 사실관계 요약 비서",
    keywords: ["법률 데모", "변호사 상담", "세무 데모", "세법 절세", "소송 안내"],
    sampleQ: "상가 임대차 보증금을 돌려받지 못하고 있는데 어떤 절차를 밟아야 하나요?",
    sampleA: "상가임대차보호법 및 유사 반환청구 소송 사례를 기준으로 분석할 때, 내용증명 발송 후 임차권등기명령 신청 및 지급명령이 가장 효과적인 초기 조치로 분석됩니다. 사건 발생 시기와 미지급 보증금 규모를 알려주시면 1:1 전담 변호사 대면 상담 접수를 신속히 도와드리겠습니다.",
    ruleSummary: "중립적·신뢰감 있는 법률 팩트 안내 + 사실관계 세부 요약 추출 + 1:1 대면 수임 상담 연계",
  },
  {
    id: "academy",
    title: "입시 학원 및 교육 스마트 진로 플래너",
    persona: "미라지 에듀의 1:1 학생 성적 케어 및 진로 컨설팅 전담 수석 입시 매니저",
    keywords: ["학원 데모", "입시 상담", "교육 데모", "성적 분석", "레벨 테스트"],
    sampleQ: "고2 수학 내신이 3등급인데 수능 1등급 목표로 하는 반이 있나요?",
    sampleA: "현재 취약 단원(미적분/수2)과 모의고사 성향을 분석하여 최상위 도약 심화 커리큘럼을 배정하는 것이 가장 효과적입니다. 학생의 지난 학기 성적표를 바탕으로 원장님 1:1 심층 진단 및 레벨 테스트 일정을 먼저 안내해 드릴까요?",
    ruleSummary: "학생 학년/취약과목 상호 질의 + 학원 정밀 로드맵 제시 + 레벨 테스트 방문 안내 연결",
  },
  {
    id: "trade",
    title: "제조 / 글로벌 B2B 수출 대리인",
    persona: "MIRAGE Tech 글로벌 마케팅 본부장 AI 대리인",
    keywords: ["무역 데모", "바이어 데모", "수출 데모", "HJDI-001", "발포코팅액"],
    sampleQ: "HJDI-001 발포코팅액 제품의 내열성 테스트 데이터 및 영문 브로셔가 있습니까?",
    sampleA: "HJDI-001 규격은 350°C 연속 내열성 및 난연 1등급 인증 규격을 만족하며, 최근 유럽 수출 인증(CE)을 완료하였습니다. 상세 성적서와 영문 테크니컬 데이터시트(TDS)를 발송해 드릴 수 있도록 귀사의 이메일 주소를 남겨주시겠습니까?",
    ruleSummary: "다국어 실시간 대응 + 정확한 기술 성적/특허 데이터 제공 + 바이어 정보 획득 및 제안서 메일 발송",
  },
];

export const ONBOARDING_STEPS = [
  {
    step: "01",
    title: "상담신청",
    desc: "사업장에 필요한 요건과 주 고객 문의 패턴 확인",
    icon: "FileText",
  },
  {
    step: "02",
    title: "사업장 분석",
    desc: "기존 상담 내역, 자주 묻는 질문 및 서비스 범위 분석",
    icon: "Search",
  },
  {
    step: "03",
    title: "AI 상담내용 구축",
    desc: "업종별 특성에 최적화된 맞춤형 시나리오 및 DB 설계",
    icon: "Cpu",
  },
  {
    step: "04",
    title: "실전 테스트",
    desc: "실제 고객 문의 기반 정밀 시뮬레이션 및 응대율 보완",
    icon: "CalendarCheck",
  },
  {
    step: "05",
    title: "서비스 시작",
    desc: "홈페이지/카카오톡 연동 및 24시간 자동 응대 가동",
    icon: "Users",
  },
];

export const OFFICIAL_RESOURCES = [
  {
    title: "블로그 안내",
    url: "https://blog.naver.com/mymirage1",
    type: "블로그",
  },
  {
    title: "AI 자동화 엔진 시연 영상",
    url: "https://youtu.be/pI4yGvPkHns",
    type: "시연영상",
  },
  {
    title: "공식 홈페이지",
    url: "https://mirage-ai-phi.vercel.app/",
    type: "공식홈페이지",
  },
  {
    title: "산업군별 세부 데모 시나리오 구성",
    url: "https://sites.google.com/view/ai-smart-agent/home",
    type: "시나리오",
  },
  {
    title: "MIRAGE AI 공식 자료실 & 다운로드",
    url: "https://drive.google.com/drive/folders/1CKY8sFN6pC5P0w0vBsE_Kfycmy8G2m2C?usp=drive_link",
    type: "자료실",
  },
];
