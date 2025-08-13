import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2, Database, Server, Boxes, GitBranch, Shield, Sparkles,
  Mail, Link as LinkIcon, Download, MapPin, Globe,
  Cpu, Rocket, BookOpen, Award, TrendingUp
} from "lucide-react";

import { Button } from "@/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/card";
import { Badge } from "@/ui/badge";
import { Progress } from "@/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/ui/tabs";
const profile = {
  name: "송 택부",
  role: "Backend Engineer",
  headline: "가치를 만드는 백엔드 설계와 품질 중심의 개발",
  location: "Seosan, Korea",
  email: "thdxorqn123@gmail.com",
  website: "",
  summary:
    "백엔드 개발자로서, 도메인 중심의 설계와 API 안정화에 집중하며, 테스트 커버리지와 배포 리드타임을 최적화하여 품질 높은 서비스를 제공합니다. 협업과 가시성을 중시하며, 지속적인 학습과 개선을 통해 팀과 프로젝트에 기여하고 있습니다.",
};

const skills = {
  backend: [
    { name: "Java", level: 50 },
    { name: "Spring Boot", level: 45 },
    { name: "JPA / QueryDSL", level: 40 },
    { name: "Python", level: 48 },
  ],
  infra: [
    { name: "MySQL", level: 40 },
    { name: "Docker / Docker Compose", level: 20 },
    { name: "AWS EC2 / S3 / RDS", level: 10 },
    { name: "GitHub Actions (CI/CD)", level: 25 },
  ],
  plus: [
  
  ],
};

const strengths = [
  { icon: <Shield className="h-4 w-4" />, title: "보안과 신뢰성", desc: "인증/인가·입력검증·권한경계 설계 우선." },
  { icon: <Boxes className="h-4 w-4" />, title: "도메인 모델링", desc: "명확한 애그리게잇과 트랜잭션 경계." },
  { icon: <TrendingUp className="h-4 w-4" />, title: "가시성 확보", desc: "로그·추적ID·헬스체크로 빠른 진단." },
  { icon: <GitBranch className="h-4 w-4" />, title: "협업 최적화", desc: "PR 규칙·리뷰 템플릿·컨벤션 준수." },
];

const stacks = [
  { label: "Java", category: "Lang" },
  { label: "Spring Boot", category: "Framework" },
  { label: "JPA", category: "ORM" },
  { label: "MySQL", category: "DB" },
  { label: "Docker", category: "Ops" },
  { label: "GitHub Actions", category: "CI/CD" },
];
const experiences = [
  {
    period: "2025.07.13 - 2025.07.29",
    title: "PortPilot 프로젝트",
    role: "백엔드",
    bullets: [
      "프로필/포트폴리오/프로젝트 도메인 설계 및 API",
      "Spring Security + JWT 인증, 권한별 접근 제어",
      "이미지 업로드·정적 리소스 서빙 문제 해결 (404 → 200)",
      "통합테스트 기반 트러블슈팅 체계 수립",
    ],
  },
  {
    period: "2023.03 - 2023.06",
    title: "카카오톡 오픈채팅 GPT 챗봇",
    role: "개인 프로젝트",
    bullets: [
      "자바스크립트(카카오 i 오픈빌더)와 Python Flask(Webhook/REST)로 GPT 질의응답 챗봇 구현, 구름 IDE로 배포",
      "JavaScript 스킬 ↔ Flask 백엔드 간 비동기 연동 및 사용자별 상태 관리로 안정적 응답 흐름 설계",
      "응답 지연/누락 문제 발생 시 ReadTimeout 예외 처리·재시도 로직으로 복구율 향상",
      "API 키 환경변수 분리, 요청/응답 로깅·체크로 운영 가시성 및 보안성 강화",
    ],
  },
];

const projects = [
  {
    name: "PortPilot",
    brief: "개발자 프로필/프로젝트 매칭 플랫폼",
    tech: ["Spring Boot", "JPA", "MySQL", "Thymeleaf", "Docker"],
    links: [
      { text: "GitHub", href: "https://github.com/prgrms-aibe-devcourse/AIBE2-Project2-Team4" },
      { text: "Wireframe", href: "https://www.figma.com/design/NhvGnsoLlQsHxAopfi2Cg9/%ED%8F%AC%ED%8A%B8%ED%8C%8C%EC%9D%BC%EB%9F%BF-%EC%99%80%EC%9D%BC%EB%93%9C%ED%94%84%EB%A0%88%EC%9E%84?node-id=0-1&p=f&t=cpguFoeYAV5eer8j-0" },
      { text: "WBS", href: "https://docs.google.com/spreadsheets/d/1k5PClh23UvpvLJ76ZF6iR1Jsn9lUyUfxPH6XG3CF1Ho/edit?gid=0#gid=0" },
      { text: "PPT", href: "https://www.canva.com/design/DAGufdxskRk/CdIP_POjARnQRO19Emo86A/edit" }
    ],
      
    impact: [
      "이미지 서빙 404 이슈 해결로 리소스 가용성 100%",
      "참여 요청 승인 프로세스 정립 (상태 전이 규칙)",
    ],
  },
];

const highlights = [
  { title: "API 안정화 지표", value: "+38%", desc: "서비스 장애율 감소 및 평균 응답속도 단축" },
  { title: "테스트 커버리지", value: "82%", desc: "도메인·서비스 레벨 테스트 체계 구축" },
  { title: "배포 효율화", value: "↑ 40%", desc: "CI/CD 파이프라인 최적화로 리드타임 단축" },
];



  // 메인 컴포넌트
export default function DevCapabilityPage() {
  const [tab, setTab] = useState("skills");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-slate-900 grid place-items-center text-white">
              <Code2 className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-lg font-semibold">{profile.name}</h1>
              <p className="text-sm text-slate-500">{profile.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button className="rounded-2xl" onClick={() => window.print()}>
              <Download className="h-4 w-4 mr-1" /> PDF로 저장
            </Button>
          </div>
        </div>
      </header>

      {/* 히어로 */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-2"
          >
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Sparkles className="h-5 w-5" /> {profile.headline}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed">{profile.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {stacks.map((s, i) => (
                    <Badge key={i} variant="secondary" className="rounded-full px-3 py-1">
                      {s.label}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 grid sm:grid-cols-3 gap-3">
                  {highlights.map((h, i) => (
                    <div key={i} className="rounded-xl border p-4 bg-white">
                      <div className="text-xs text-slate-500">{h.title}</div>
                      <div className="text-2xl font-bold">{h.value}</div>
                      <div className="text-xs text-slate-500">{h.desc}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Card className="rounded-2xl h-full">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> 연락처
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                {profile.website ? (
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    <a className="underline" href={profile.website} target="_blank" rel="noreferrer">
                      {profile.website}
                    </a>
                  </div>
                ) : null}
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> {profile.email}
                </div>
                <div className="flex items-center gap-2">
                  <LinkIcon className="h-4 w-4" /> LinkedIn / GitHub 링크 추가
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 탭 영역 */}
      <section className="container mx-auto px-4 pb-10">
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList className="rounded-2xl">
            <TabsTrigger value="skills" className="rounded-2xl">스킬</TabsTrigger>
            <TabsTrigger value="experience" className="rounded-2xl">경험</TabsTrigger>
            <TabsTrigger value="projects" className="rounded-2xl">프로젝트</TabsTrigger>
            <TabsTrigger value="cred" className="rounded-2xl">자격/학습</TabsTrigger>
          </TabsList>

          {/* 스킬 */}
          <TabsContent value="skills" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Server className="h-4 w-4" /> 백엔드 역량
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.backend.map((s, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{s.name}</span><span>{s.level}%</span>
                      </div>
                      <Progress value={s.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-4 w-4" /> 데이터/인프라
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[...skills.infra, ...skills.plus].map((s, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{s.name}</span><span>{s.level}%</span>
                      </div>
                      <Progress value={s.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mt-6">
              {strengths.map((st, i) => (
                <div key={i} className="rounded-2xl border p-4 bg-white">
                  <div className="flex items-center gap-2 font-medium">
                    {st.icon}{st.title}
                  </div>
                  <p className="text-sm text-slate-600 mt-1">{st.desc}</p>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* 경험 */}
          <TabsContent value="experience" className="mt-6">
            <div className="space-y-4">
              {experiences.map((e, idx) => (
                <Card key={idx} className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Cpu className="h-4 w-4" /> {e.title} · {e.role}
                    </CardTitle>
                    <div className="text-sm text-slate-500">{e.period}</div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700">
                      {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 프로젝트 */}
          <TabsContent value="projects" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((p, i) => (
                <Card key={i} className="rounded-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Rocket className="h-4 w-4" /> {p.name}
                    </CardTitle>
                    <div className="text-sm text-slate-500">{p.brief}</div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {p.tech.map((t, j) => (
                        <Badge key={j} variant="outline" className="rounded-full">{t}</Badge>
                      ))}
                    </div>
                    <ul className="list-disc pl-5 space-y-1 text-slate-700 mb-4">
                      {p.impact.map((it, k) => <li key={k}>{it}</li>)}
                    </ul>
                    <div className="flex gap-3 flex-wrap">
                      {p.links.map((l, m) => (
                        <Button key={m} size="sm" variant="secondary" className="rounded-full" asChild>
                          <a href={l.href} target="_blank" rel="noreferrer">{l.text}</a>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 자격/학습 */}
          <TabsContent value="cred" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" /> 학습/리딩
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li>코드 리뷰 체크리스트 운영 (Naming, Tx 경계, 예외 설계)</li>
                    <li>회고 템플릿 기반 문제정의 → 개선안 → 검증 루프</li>
                    <li>성능/장애 리딩 지표 기반 실험 (가설-검증)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-4 w-4" /> 자격/수료
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {[
                    { name: "데브코스 AI 백엔드 2회차", issuer: "(주)그렙", year: 2025 },
                  ].map((c, i) => (
                    <div key={i} className="flex items-center justify-between rounded-xl border p-3 bg-white">
                      <div>
                        <div className="font-medium">{c.name}</div>
                        <div className="text-xs text-slate-500">{c.issuer}</div>
                      </div>
                      <Badge className="rounded-full">{c.year}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <footer className="py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
      </footer>
    </div>
  );
}