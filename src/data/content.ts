import { PricingPlan, CaseStudy, IndustryScenario } from "../types";

export const COMPANY_INFO = {
  name: "MIRAGE AI",
  brandSubtitle: "에이아이파트너스",
  representative: "최호열",
  phone: "010-8267-3733",
  telLink: "tel:01082673733",
  email: "mymirage1@naver.com",
  mailLink: "mailto:mymirage1@naver.com",
  externalAgentUrl: "https://sites.google.com/view/ai-smart-agent/home",
  operatingHours: "평일 09:00 - 18:00 (AI 고객응대: 24시간 365일 무휴)",
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
  "상담 및 예약 문의 응대",
  "고객 문의 분류 및 통계",
  "사업장 맞춤형 답변 설정",
  "다양한 업종 즉시 적용 가능",
];

export const TARGET_INDUSTRIES = [
  { name: "병원 · 의원", icon: "Stethoscope", tag: "진료시간·예약" },
  { name: "펜션 · 숙박업", icon: "Home", tag: "입퇴실·반려견" },
  { name: "음식점 · 카페", icon: "Utensils", tag: "단체예약·주차" },
  { name: "학원 · 교육기관", icon: "GraduationCap", tag: "수강료·커리큘럼" },
  { name: "부동산", icon: "Building2", tag: "매물정보·방문" },
  { name: "자동차 관련 업체", icon: "Car", tag: "정비·시승상담" },
  { name: "법무 · 세무 · 컨설팅", icon: "Scale", tag: "상담수임·절세" },
  { name: "온라인 쇼핑몰", icon: "ShoppingBag", tag: "배송·교환반품" },
  { name: "중소기업", icon: "Briefcase", tag: "제품스펙·B2B" },
  { name: "1인 사업장 및 자영업자", icon: "UserCheck", tag: "통화대체·업무집중" },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "basic",
    name: "보급형",
    price: "월 159,000원",
    monthlyPrice: 159000,
    description: "AI 고객응대를 처음 도입하는 소규모 사업장과 1인 사업자에게 적합합니다.",
    features: [
      "기본 AI 고객응대",
      "회사 및 서비스 안내",
      "자주 묻는 질문(FAQ) 등록",
      "기본 상담 시나리오 구성",
      "기본 유지관리 지원",
    ],
    buttonText: "보급형 상담 신청",
  },
  {
    id: "standard",
    name: "표준형",
    price: "월 220,000원",
    monthlyPrice: 220000,
    badge: "추천 상품",
    isPopular: true,
    description: "다양한 고객 문의가 발생하는 일반 사업장에 추천하는 베스트 상품입니다.",
    features: [
      "보급형 기능 전체 포함",
      "업종별 맞춤 상담 시나리오 구성",
      "상담 시나리오 대폭 확대",
      "서비스 및 상품별 세부 안내",
      "지속적인 상담내용 정기 업데이트",
      "전담 운영 기술 지원",
    ],
    buttonText: "표준형 상담 신청",
  },
  {
    id: "premium",
    name: "고급형",
    price: "월 295,000원",
    monthlyPrice: 295000,
    description: "상담량이 많거나 보다 세밀한 AI 고객응대가 필요한 사업장에 적합합니다.",
    features: [
      "표준형 기능 전체 포함",
      "고급 맞춤형 심층 상담 구성",
      "복수 서비스 및 세부 상품 안내",
      "복잡한 고객문의 대응 아키텍처 설계",
      "상담 데이터 지속 분석 및 업데이트",
      "운영 품질 집중 모니터링",
    ],
    buttonText: "고급형 상담 신청",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-1",
    category: "병원 · 의원",
    title: "야간 및 주말 진료 문의 자동화",
    userQuestion: "“토요일에도 진료하나요?”",
    aiAnswer: "“토요일 진료시간은 오전 9시부터 오후 1시까지입니다. 예약방법도 안내해드릴까요?”",
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
    tag: "예약상담",
    iconName: "Home",
    imageBg: "from-emerald-600/10 to-teal-600/10",
  },
  {
    id: "case-3",
    category: "음식점 · 카페",
    title: "피크 타임 전화 응대 부담 해소",
    userQuestion: "“단체 예약 가능한가요?”",
    aiAnswer: "“네, 단체 예약이 가능합니다. 방문 예정일과 인원을 알려주시면 예약 안내를 도와드리겠습니다.”",
    tag: "단체예약",
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
    ruleSummary: "의학적 책임 사전 고지 + 시술별 표준 케어 매뉴얼 안내 + 신속 병원 예약/다이렉트 연결",
  },
  {
    id: "legal",
    title: "법률 / 세무 전문직 수임 비서",
    persona: "MIRAGE 법률/세무 합동 사무소의 전문 수임 필터링 및 사건 사실관계 요약 비서",
    keywords: ["법률 데모", "변호사 상담", "세무 데모", "세법 절세", "소송 안내"],
    sampleQ: "상가 임대차 보증금을 돌려받지 못하고 있는데 어떤 절차를 밟아야 하나요?",
    sampleA: "상가임대차보호법 및 유사 반환청구 소송 사례를 기준으로 분석할 때, 내용증명 발송 후 임차권등기명령 신청 및 지급명령이 가장 효과적인 초기 조치로 분석됩니다. 사건 발생 시기와 미지급 보증금 규모를 알려주시면 1:1 전담 변호사 대면 상담 예약을 신속히 도와드리겠습니다.",
    ruleSummary: "중립적·신뢰감 있는 법률 팩트 안내 + 사실관계 세부 요약 추출 + 1:1 대면 수임 예약 연계",
  },
  {
    id: "academy",
    title: "입시 학원 및 교육 스마트 진로 플래너",
    persona: "미라지 에듀의 1:1 학생 성적 케어 및 진로 컨설팅 전담 수석 입시 매니저",
    keywords: ["학원 데모", "입시 상담", "교육 데모", "성적 분석", "레벨 테스트"],
    sampleQ: "고2 수학 내신이 3등급인데 수능 1등급 목표로 하는 반이 있나요?",
    sampleA: "현재 취약 단원(미적분/수2)과 모의고사 성향을 분석하여 최상위 도약 심화 커리큘럼을 배정하는 것이 가장 효과적입니다. 학생의 지난 학기 성적표를 바탕으로 원장님 1:1 심층 진단 및 레벨 테스트 일정을 먼저 조율해 드릴까요?",
    ruleSummary: "학생 학년/취약과목 상호 질의 + 학원 정밀 로드맵 제시 + 레벨 테스트 방문 예약 연결",
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
    title: "MIRAGE AI 챗봇 및 블로그 안내 센터",
    url: "https://docs.google.com/document/d/1r1NHH_HzGD9J3kLdAUmYLFi_E8c8TPCYln8l-t3k20o/edit",
    type: "안내센터",
  },
  {
    title: "AI 자동화 엔진 시연 영상 (YouTube)",
    url: "https://www.youtube.com/watch?v=vp6ogRVMyo8",
    type: "시연영상",
  },
  {
    title: "MIRAGE AI 공식 홈페이지 안내 센터",
    url: "https://docs.google.com/document/d/1ylzER-O7itprpQtrMn1zlsRH6RgBsXq2YgKyl-lQIG4/edit",
    type: "공식문서",
  },
  {
    title: "산업군별 세부 데모 시나리오 구성",
    url: "https://docs.google.com/document/d/14d9Tx30szUcMHzbSB124MA6679XoEAxcgBhMuQQNzJ8/edit?usp=sharing",
    type: "데모자료",
  },
  {
    title: "MIRAGE AI 공식 자료실 & 다운로드",
    url: "https://docs.google.com/document/d/1aPPDFYSuyKBNEOeG83TZBaRy7xmkwFhp9HUL29GhZeo/edit?usp=sharing",
    type: "자료실",
  },
  {
    title: "24시간 자동 요약 제안서 메일 발송 신청",
    url: "https://docs.google.com/document/d/1Kj2D6UVTzeGRqrrnwB_YbFZCxGgnoqs-J_ypc0XZ1Sw/edit?usp=sharing",
    type: "제안서신청",
  },
  {
    title: "맞춤형 비즈니스 무료 진단 및 방문 예약 신청",
    url: "https://docs.google.com/document/d/1Zy8ankm4OBbPB01JLy0HVgnnLIsnjv-oAPtHe4Fcf0c/edit?usp=sharing",
    type: "방문예약",
  },
];
