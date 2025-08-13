import { Badge } from "@/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/ui/card";
import { Cpu, Database, Server, Network, Rocket, Shield } from "lucide-react";

export default function CapabilitySummary() {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="text-xl">개발역량 요약</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* 한 줄 포지션 요약 */}
        <div className="text-slate-700">
          <span className="font-semibold">Backend Engineer</span> ·
          API 설계/데이터 흐름 중심의 백엔드 개발과
          안정성·가시성 확보에 강점
        </div>

        {/* 핵심 스택 배지 */}
        <div className="flex flex-wrap gap-2">
          <Badge className="rounded-full" variant="secondary">Java</Badge>
          <Badge className="rounded-full" variant="secondary">Spring Boot</Badge>
          <Badge className="rounded-full" variant="secondary">JPA</Badge>
          <Badge className="rounded-full" variant="secondary">MySQL</Badge>
          <Badge className="rounded-full" variant="secondary">Docker</Badge>
          <Badge className="rounded-full" variant="secondary">React</Badge>
          <Badge className="rounded-full" variant="secondary">Vite</Badge>
          <Badge className="rounded-full" variant="secondary">Tailwind</Badge>
          <Badge className="rounded-full" variant="secondary">GitHub Actions</Badge>
        </div>

        {/* 역량 하이라이트 (아이콘 + 요약) */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border p-4 bg-white">
            <div className="flex items-center gap-2 font-medium">
              <Server className="h-4 w-4" /> API 설계·구현
            </div>
            <p className="text-sm text-slate-600 mt-1">
              인증/인가, CRUD, 상태전이 규칙, 파일 서빙 이슈 해결(404→200) 등 실무형 API 개발
            </p>
          </div>
          <div className="rounded-xl border p-4 bg-white">
            <div className="flex items-center gap-2 font-medium">
              <Database className="h-4 w-4" /> 데이터 모델링
            </div>
            <p className="text-sm text-slate-600 mt-1">
              명확한 애그리게잇·트랜잭션 경계, RDB 설계/최적화(JPA·Query)
            </p>
          </div>
          <div className="rounded-xl border p-4 bg-white">
            <div className="flex items-center gap-2 font-medium">
              <Network className="h-4 w-4" /> 외부 연동/AI
            </div>
            <p className="text-sm text-slate-600 mt-1">
              Flask 기반 Webhook/REST로 AI API(Asyncia) 연동, 비동기 응답 처리·상태 관리
            </p>
          </div>
          <div className="rounded-xl border p-4 bg-white">
            <div className="flex items-center gap-2 font-medium">
              <Shield className="h-4 w-4" /> 신뢰성·가시성
            </div>
            <p className="text-sm text-slate-600 mt-1">
              Spring Security, 입력검증, 권한 경계, 로그/추적ID/헬스체크 기반 진단
            </p>
          </div>
        </div>

        {/* 결과/성과 포인트 */}
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="rounded-xl border p-4 bg-white">
            <div className="text-xs text-slate-500">API 안정화</div>
            <div className="text-2xl font-bold">+38%</div>
            <div className="text-xs text-slate-500">장애율 감소, 응답시간 개선</div>
          </div>
          <div className="rounded-xl border p-4 bg-white">
            <div className="text-xs text-slate-500">테스트 커버리지</div>
            <div className="text-2xl font-bold">82%</div>
            <div className="text-xs text-slate-500">도메인 레벨 단위테스트</div>
          </div>
          <div className="rounded-xl border p-4 bg-white">
            <div className="text-xs text-slate-500">배포 리드타임</div>
            <div className="text-2xl font-bold">↓ 40%</div>
            <div className="text-xs text-slate-500">CI 파이프라인 최적화</div>
          </div>
        </div>

        {/* 사용 맥락 요약 */}
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Cpu className="h-4 w-4" />
          PortPilot 등 프로젝트에서 API/데이터 흐름 설계, 이슈 트러블슈팅, 배포 자동화까지 엔드투엔드 경험
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Rocket className="h-4 w-4" />
          React + Vite 프론트와 백엔드(Flask/Spring) 연동, 운영 단계에서 성능/안정성 개선 주도
        </div>
      </CardContent>
    </Card>
  );
}