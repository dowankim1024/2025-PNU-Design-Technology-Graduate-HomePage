# 2025 부산대학교 디자인앤테크놀로지전공 졸업전시 홈페이지

## Designer : Park Se Eun (03eungreen@naver.com)

## Engineer : Kim Do Wan (kimdowan1004@naver.com)

### 배포 링크 : https://2025-pnu-design-technology-graduate.vercel.app

### 부산대학교 디자인학과 디자인앤테크놀로지 전공 16회 졸업전시 Dept. of Design, Design and Technology 16th Graduation Show

### 본 사이트는 2025 졸업논문을 대체합니다. ©2025 Pusan National University Design&Technology all rights reserved.

## 기술 개요

- 런타임: React 18 + Vite
- 스타일: styled-components
- 데이터: Firebase Realtime Database, Firebase Analytics(지원 브라우저에서만)
- 상태/데이터: @tanstack/react-query (Suspense 기반)
- 라우팅: react-router-dom v6
- 접근성/UX: prefers-reduced-motion 대응, scroll-snap, 커스텀 휠 스냅, ErrorBoundary, Suspense

## 프로젝트 구조

```text
src/
  App.tsx                 # 라우터 래퍼, ScrollToTop 포함
  main.tsx                # 진입점, QueryClientProvider + Suspense + ErrorBoundary
  routes/AppRoutes.tsx    # 라우팅 정의
  firebase.ts             # Firebase 초기화/Analytics
  components/
    common/
      Reveal.tsx          # IntersectionObserver 기반 페이드업 공통 컴포넌트
      ErrorBoundary.tsx   # 렌더 에러 격리
      ScrollToTop.tsx     # 라우트 변경 시 상단 스크롤
      Spinner.tsx         # 로딩 스피너
      SuspenseFallback.tsx# Suspense fallback
    Header.tsx            # 상단 네비게이션(데스크톱/모바일)
    Footer.tsx            # 하단 정보/링크
    DesignerCard.tsx      # 디자이너 카드(리스트)
    Layout.tsx            # 공통 레이아웃 (Header/Outlet/Footer)
    Title.tsx, Concept.tsx, MainContainer.tsx, ListSelectBox.tsx 등
  Pages/
    About/                # 섹션형 랜딩(스냅 스크롤)
    DesignersPage.tsx     # 디자이너 카드 목록
    DesignerDetail/       # 디자이너 상세(정보/포스터/인터랙션)
    TeamProject/          # 팀 프로젝트 상세(팀 정보/컨셉/필름/인터)
    TeamSelect/           # 팀 선택 페이지
    Visitor/              # 방명록 페이지
  queries/                # React Query 훅 모음
  services/               # Firebase RTDB API 클라이언트
  types/                  # 글로벌 타입
```

## 공통 컴포넌트

### Reveal.tsx (뷰포트 진입 시 페이드업)

- 기능: IntersectionObserver로 가시성 감지 후 translateY + opacity 전환. `asChild`로 래퍼 없이 자식에 직접 스타일 주입 가능.
- 기본값: `delayMs=200`, `durationMs=600`, `translateYPx=60`, `threshold=0.1`, `once=false`, `asChild=false`

```tsx
// 사용 예시
<Reveal> <Section /> </Reveal>
<Reveal asChild delayMs={100}><span>텍스트</span></Reveal>
<Reveal once>한 번만</Reveal>
```

핵심 코드:

```33:53:src/components/common/Reveal.tsx
  useEffect(() => {
    const targetEl = asChild ? childRef.current : wrapperRef.current;
    if (!targetEl) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      });
    }, { threshold });
    observer.observe(targetEl);
    return () => observer.disconnect();
  }, [threshold, once, asChild]);
```

```54:71:src/components/common/Reveal.tsx
  if (asChild && isValidElement(children)) {
    type ChildProps = { style?: CSSProperties };
    const child = children as ReactElement<ChildProps>;
    const existingStyle = (child.props?.style || {}) as CSSProperties;
    const animatedStyle: CSSProperties = {
      transform: `translateY(${isVisible ? 0 : translateYPx}px)`,
      opacity: isVisible ? 1 : 0,
      transition: `transform ${durationMs}ms ease-out ${delayMs}ms, opacity ${durationMs}ms ease-out ${delayMs}ms`,
      willChange: "transform, opacity",
      ...existingStyle,
    };
    const setRef = (node: HTMLElement | null) => { childRef.current = node; };
    return cloneElement(child, { style: animatedStyle, ref: setRef } as unknown as ChildProps);
  }
```

접근성: `@media (prefers-reduced-motion: reduce)`에서 애니메이션 제거.

### ErrorBoundary.tsx

```13:35:src/components/common/ErrorBoundary.tsx
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> { /* ... */ }
```

### SuspenseFallback.tsx

```1:7:src/components/common/SuspenseFallback.tsx
export const SuspenseFallback = () => { return <Spinner />; };
```

### ScrollToTop.tsx

```4:12:src/components/common/ScrollToTop.tsx
useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }, [pathname, search]);
```

### Header.tsx

- 스크롤 차단: 헤더 위 스크롤/터치 입력을 `preventDefault`로 차단하여 백그라운드 스냅 스크롤과 충돌 방지.
- 모바일 메뉴: 토글 상태에 따라 오버레이 네비 표시.

```17:35:src/components/Header.tsx
useEffect(() => { /* wheel/touchmove passive:false 로 차단 */ }, []);
```

### Footer.tsx

- 외부 링크, 소셜 아이콘, 공식 사이트 링크 포함. `rel="noreferrer noopener"` 적용.

## 페이지

### About/index.tsx

- 스냅 스크롤 컨테이너 + 커스텀 휠 스냅
- 각 섹션을 `<Reveal>`로 감싸 첫 진입 시 자연스럽게 등장

```137:158:src/Pages/About/index.tsx
const SnapWrapper = styled.div`
  height: calc(100vh - 6.25vw);
  overflow-y: auto;
  scroll-snap-type: y proximity;
  overscroll-behavior: contain;
`;
```

```40:74:src/Pages/About/index.tsx
const onWheel = (e: WheelEvent) => { e.preventDefault(); /* 인덱스 계산 후 smooth 스크롤 */ };
```

### About/Main.tsx

- Hover 오버레이 이미지: 절대배치 + opacity 전환 + pointer-events: none
- 텍스트/로고/장소 등은 `<Reveal asChild>`로 등장

```90:112:src/Pages/About/Main.tsx
<Reveal asChild delayMs={200}><LogoImg ... /></Reveal>
<Reveal asChild delayMs={500}><Major>...</Major></Reveal>
<Reveal asChild delayMs={300}><Opening>...</Opening></Reveal>
<Reveal asChild delayMs={600}><Place>...</Place></Reveal>
```

### About/Professor.tsx

- 이미지 비율 유지 크롭: `object-fit: cover; object-position: top;`

```63:69:src/Pages/About/Professor.tsx
const ProfessorImage = styled.img`
  object-fit: cover;
  object-position: top;
`;
```

### DesignersPage.tsx

- React Query로 카드 데이터 로딩, Suspense + ErrorBoundary 조합

```11:21:src/Pages/DesignersPage.tsx
const { data } = useDesignerCards(); /* ... */
```

### DesignerDetail

- URL 쿼리(name)로 대상 선택, 상세 정보/포스터/인터 섹션 렌더
- `ListSelectBox`로 다른 디자이너 이동

```43:56:src/Pages/DesignerDetail/index.tsx
const targetName = searchParams.get("name") ?? "박세은";
const { data: names } = useDesignerNames();
```

### TeamProject

- URL 쿼리(team)로 팀 선택, 팀 데이터에서 컨텐츠 구성
- `ListSelectBox`로 팀 간 이동(pushState + popstate)

```58:71:src/Pages/TeamProject/index.tsx
const teamKey = params.get("team") ?? "Web";
```

## 데이터 계층 (React Query + Firebase RTDB)

### queries/designers.ts

```11:17:src/queries/designers.ts
export function useDesignerCards() {
  return useSuspenseQuery<DesignerCardData[], Error, DesignerCardData[]>({
    queryKey: ["designer-cards"],
    queryFn: fetchDesignerCards,
    staleTime: 60 * 1000,
  });
}
```

### services/designers.ts

```30:46:src/services/designers.ts
export async function fetchDesignerCards(): Promise<DesignerCardData[]> {
  const db = getDatabase(app);
  const root = ref(db, "designerInfo");
  const snapshot = await get(root);
  const value = snapshot.val() as Record<string, RawDesignerNode> | null;
  if (!value) return [];
  const list = Object.entries(value).map(([key, node]) => ({
    name: node?.designerInfo?.name ?? key,
    projectName: node?.Poster?.title ?? node?.designerInfo?.conceptTitle ?? "",
  }));
  return list;
}
```

```69:100:src/services/designers.ts
export async function fetchDesignerDetailByName(name: string): Promise<DesignerDetailData | null> { /* ... */ }
```

```117:123:src/services/designers.ts
export async function fetchTeamInfo(): Promise<Record<string, TeamInfoRecord>> { /* ... */ }
```

### Guestbook (실시간 스트림)

```22:30:src/services/guestbook.ts
export async function sendGuestbookMessage(message: GuestbookMessage): Promise<void> { /* push + serverTimestamp */ }
```

```32:56:src/services/guestbook.ts
export function subscribeGuestbook(onMessages: (messages: GuestbookMessage[]) => void): () => void { /* onValue + off */ }
```

```22:43:src/queries/guestbook.ts
export function useGuestbookStream() {
  const { data } = useSuspenseQuery({ queryKey: ["guestbook"], queryFn: async () => [], staleTime: Infinity });
  useEffect(() => {
    const unsubscribe = subscribeGuestbook(list => { queryClient.setQueryData(["guestbook"], list); });
    return unsubscribe;
  }, [queryClient]);
  return data ?? [];
}
```

## 라우팅/엔트리

```1:16:src/App.tsx
<BrowserRouter>
  <ScrollToTop />
  <AppRoutes />
</BrowserRouter>
```

```11:30:src/main.tsx
<QueryClientProvider client={queryClient}>
  <ErrorBoundary>
    <Suspense fallback={<SuspenseFallback />}>
      <App />
    </Suspense>
  </ErrorBoundary>
</QueryClientProvider>
```

```10:26:src/routes/AppRoutes.tsx
<Routes>
  <Route element={<Layout />}>
    <Route path="/" element={<Navigate to="/about" replace />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/designers" element={<DesignersPage />} />
    <Route path="/designer" element={<DesignerDetailPage />} />
    <Route path="/team" element={<TeamSelect />} />
    <Route path="/team-detail" element={<TeamProject />} />
    <Route path="/visitor" element={<Visitor />} />
  </Route>
</Routes>
```

## Firebase 초기화

```18:29:src/firebase.ts
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const analyticsPromise = typeof window !== "undefined"
  ? isSupported().then(s => (s ? getAnalytics(app) : null))
  : Promise.resolve(null);
```

## 스타일 가이드

- vmin/vw 단위로 해상도 독립적 레이아웃 구성
- object-fit/object-position으로 이미지 크롭 제어
- transition/transform/opacity로 애니메이션, will-change로 성능 힌트
- scroll-snap, overscroll-behavior, isolation으로 스크롤/레이어 안정성 확보
- 모바일: 미디어쿼리로 크기/간격 조정, 모바일 네비 오버레이 분리

## 접근성/성능

- prefers-reduced-motion 대응으로 모션 민감 사용자 보호
- Suspense + ErrorBoundary로 로딩/에러 격리
- React Query `staleTime` 설정으로 네트워크/리렌더 최적화
- IntersectionObserver 사용으로 스크롤 성능 우수

## 개발 메모

- asChild 사용 시 자식이 DOM ref를 전달해야 관찰 가능 (커스텀 컴포넌트는 forwardRef 권장)
- TeamProject 라우트 내 리스트 이동은 pushState + popstate로 구현하여 페이지 전환 없이 콘텐츠 교체

## 훅/기술 상세 가이

### React 기본 훅

- useState: 화면에 보이는 값(상태)을 저장하고 바꾸는 훅입니다.
  - 예: `const [open, setOpen] = useState(false)` → `setOpen(true)`로 열기 상태로 변경하면 화면이 다시 그려집니다.

- useRef: DOM 요소나 변경돼도 화면을 다시 그리지 않아도 되는 값을 저장합니다.
  - DOM 참조: `<div ref={boxRef} />`로 실제 HTML 요소를 가리켜 스크롤/크기 등 직접 조작 가능.
  - 값 저장: `const lastTimeRef = useRef(0)`처럼 이전 값 보관(바뀌어도 리렌더 없음).

- useEffect: 화면이 그려진 뒤(또는 특정 값이 바뀐 뒤) 실행되는 코드입니다.
  - 예: 이벤트 리스너 등록/해제, IntersectionObserver 설정/해제.
  - 의존성 배열: `[a, b]`가 바뀔 때만 실행. 빈 배열 `[]`이면 최초 1번만 실행 후 정리 함수로 해제.

### React Router

- BrowserRouter: 주소창을 감시하고 라우팅을 가능하게 만드는 최상위 래퍼입니다.
- Routes/Route: 경로(path)에 따라 어떤 컴포넌트를 보여줄지 정의합니다.
- useNavigate: 코드로 다른 경로로 이동합니다. `navigate('/about')`.
- useLocation: 현재 경로/쿼리 정보를 제공합니다. 스크롤 초기화 등에서 사용.

### React Query(@tanstack/react-query)

- QueryClientProvider: 전역 캐시/설정 주입. `retry`, `refetchOnWindowFocus` 등의 기본 동작을 설정.
- useSuspenseQuery: 데이터를 불러오며 로딩 중이면 Suspense를 통해 fallback UI를 보여줍니다.
  - `queryKey`: 캐시 키(같은 키면 캐시 공유).
  - `queryFn`: 실제 데이터를 불러오는 비동기 함수.
  - `staleTime`: 데이터 신선도 유지 시간(밀리초). 동안 재요청 안 함.
- useMutation: 데이터 쓰기(POST/PUT/DELETE). 완료 후 캐시 갱신/무효화 가능.

예시(카드 목록):

```ts
// queries/designers.ts
export function useDesignerCards() {
  return useSuspenseQuery({
    queryKey: ["designer-cards"],
    queryFn: fetchDesignerCards,
    staleTime: 60 * 1000,
  });
}
```

### Firebase Realtime Database

- getDatabase/ref/get: 데이터 한 번 가져오기(읽기 전용 페이지에 적합).
- onValue/off: 특정 경로의 변경을 실시간으로 구독/해제(방명록 스트림).
- push + serverTimestamp: 리스트에 새 항목 추가하면서 서버 시간이 기록되도록 합니다.

예시(방명록 실시간):

```ts
onValue(messagesRef, snapshot => {
  const value = snapshot.val() as Record<string, Message> | null;
  const list = value ? Object.values(value) : [];
  list.sort((a, b) => (a.createdAt ?? 0) - (b.createdAt ?? 0));
  onMessages(list);
});
```

### IntersectionObserver (Reveal 핵심)

- 요소가 화면(뷰포트)에 들어왔는지를 브라우저가 알려주는 API.
- `threshold`: 요소가 몇 % 보일 때 “들어왔다”고 판단할지(0~1). 0.1이면 10%만 보여도 트리거.
- `unobserve`: `once=true`일 때 최초 1회만 실행하도록 관찰 해제.

예시:

```ts
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setIsVisible(true);
      else setIsVisible(false);
    });
  },
  { threshold: 0.1 }
);
observer.observe(targetEl);
```

### CSS(기술이 들어간 항목)

- scroll-snap-type / scroll-snap-align: 스크롤이 특정 지점에서 “착” 달라붙게 하는 브라우저 기능.
- overscroll-behavior: 끝단에서 바운스/스크롤 전파 방지. 컨테이너 밖으로 스크롤이 번지는 것을 막음.
- isolation: isolate: 컴포넌트의 z-index 레이어를 독립시켜 다른 요소와 간섭을 줄임.
- object-fit: cover + object-position: top: 이미지 비율 유지하며 박스에 꽉 채우고, 위쪽을 기준으로 잘라 보이기.
- prefers-reduced-motion: 모션 민감 사용자를 위해 애니메이션을 비활성화.
- transition/transform/opacity + will-change: 부드러운 전환과 성능 최적화 힌트.

### ErrorBoundary & Suspense

- ErrorBoundary: 자식 컴포넌트 렌더링 중 오류를 잡아 페이지 전체가 깨지지 않게 보호.
- Suspense: 데이터가 아직 없을 때 fallback을 먼저 보여주고, 준비되면 실제 컴포넌트를 보여줍니다.

### asChild 패턴(레이아웃 안전 애니메이션)

- 래퍼 div를 추가하면 텍스트/인라인 요소의 레이아웃이 어긋날 수 있습니다.
- `asChild`는 자식 요소 자체에 스타일과 ref를 주입해 래퍼 없이 동일한 애니메이션을 적용합니다.
- 커스텀 컴포넌트에 쓰려면 DOM ref 전달을 위한 `forwardRef`가 필요할 수 있습니다.

## 파일별 핵심 코드 설명

아래는 실제 코드 일부를 인용하며, 왜 그 코드가 필요한지와 동작 원리를 설명합니다.

### src/components/common/Reveal.tsx

```33:53:src/components/common/Reveal.tsx
useEffect(() => {
  const targetEl = asChild ? childRef.current : wrapperRef.current;
  if (!targetEl) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (once) observer.unobserve(entry.target);
      } else if (!once) {
        setIsVisible(false);
      }
    });
  }, { threshold });
  observer.observe(targetEl);
  return () => observer.disconnect();
}, [threshold, once, asChild]);
```

- 목적: 브라우저에게 “이 요소가 화면에 보이는지” 감시시키는 로직. 보이면 애니메이션을 시작하고, `once`가 true면 한 번만 실행합니다.
- 포인트: `observer.disconnect()`로 해제하여 메모리 누수 방지. `targetEl`은 asChild 여부에 따라 래퍼 div 또는 자식 DOM을 선택합니다.

```54:71:src/components/common/Reveal.tsx
if (asChild && isValidElement(children)) {
  type ChildProps = { style?: CSSProperties };
  const child = children as ReactElement<ChildProps>;
  const existingStyle = (child.props?.style || {}) as CSSProperties;
  const animatedStyle: CSSProperties = {
    transform: `translateY(${isVisible ? 0 : translateYPx}px)`,
    opacity: isVisible ? 1 : 0,
    transition: `transform ${durationMs}ms ease-out ${delayMs}ms, opacity ${durationMs}ms ease-out ${delayMs}ms`,
    willChange: "transform, opacity",
    ...existingStyle,
  };
  const setRef = (node: HTMLElement | null) => { childRef.current = node; };
  return cloneElement(child, { style: animatedStyle, ref: setRef } as unknown as ChildProps);
}
```

- 목적: 래퍼를 추가하지 않고 자식 요소 “자체”에 스타일과 ref를 주입.
- 포인트: 기존 style을 마지막에 덮어쓰지 않도록 먼저 애니메이션 스타일을 만들고, 맨 끝에 `...existingStyle`을 병합해 충돌을 최소화합니다.

### src/Pages/About/index.tsx

```40:74:src/Pages/About/index.tsx
const onWheel = (e: WheelEvent) => {
  e.preventDefault();
  const now = Date.now();
  if (animatingRef.current || now - lastScrollAtRef.current < COOLDOWN_MS) return;
  const sectionHeight = el.clientHeight;
  const current = el.scrollTop;
  const direction = e.deltaY > 0 ? 1 : -1;
  const currentIndex = Math.round(current / sectionHeight);
  const maxIndex = Math.ceil(el.scrollHeight / sectionHeight) - 1;
  const targetIndex = Math.min(Math.max(currentIndex + direction, 0), maxIndex);
  const target = targetIndex * sectionHeight;
  setAnimating(true);
  animatingRef.current = true;
  lastScrollAtRef.current = now;
  el.scrollTo({ top: target, behavior: "smooth" });
  window.setTimeout(() => { setAnimating(false); animatingRef.current = false; }, COOLDOWN_MS);
};
```

- 목적: 휠 이벤트 1번에 섹션 1단위로 이동하는 사용자 경험 제공.
- 포인트: `preventDefault()`로 기본 스크롤을 막고, 쿨다운으로 과도 입력을 무시합니다. 컨테이너 높이를 기준으로 인덱스를 계산합니다.

```137:158:src/Pages/About/index.tsx
const SnapWrapper = styled.div`
  height: calc(100vh - 6.25vw);
  overflow-y: auto;
  scroll-snap-type: y proximity;
  overscroll-behavior: contain;
`;
```

- 목적: 브라우저의 네이티브 스냅 기능 활성화로 스크롤 정지 지점을 안정화.
- 포인트: `overscroll-behavior: contain`으로 컨테이너 밖으로 스크롤이 새어 나가는 것을 방지합니다.

### src/Pages/About/Main.tsx

```90:112:src/Pages/About/Main.tsx
<Reveal asChild delayMs={200}><LogoImg src={Logo} alt="logo" /></Reveal>
<Reveal asChild delayMs={500}><Major>Design & <br /> Technology</Major></Reveal>
<Reveal asChild delayMs={300}><Opening>...</Opening></Reveal>
<Reveal asChild delayMs={600}><Place>...</Place></Reveal>
```

- 목적: 텍스트/절대배치 요소에 레이아웃 변형 없이 등장 애니메이션 적용.
- 포인트: asChild로 래퍼 DOM을 추가하지 않아 기존 배치가 어긋나지 않습니다. `delayMs`로 순차 등장 연출.

```140:155:src/Pages/About/Main.tsx
const BrandImgOverlay = styled.img<{ $active?: boolean }>`
  position: absolute;
  top: 50%; left: 44%; transform: translate(-50%, -50%);
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 400ms ease-in-out;
  pointer-events: none;
`;
```

- 목적: 베이스 이미지 위에 호버 시 자연스럽게 나타나는 오버레이.
- 포인트: `pointer-events: none`으로 오버레이가 클릭/호버 이벤트를 가로채지 않도록 처리합니다.

### src/Pages/About/Professor.tsx

```63:69:src/Pages/About/Professor.tsx
const ProfessorImage = styled.img`
  object-fit: cover;
  object-position: top;
`;
```

- 목적: 이미지 비율을 유지하며 지정 박스에 꽉 차게 하되, 위쪽을 기준으로 잘려 보이도록 표시.
- 포인트: 임의 크기 강제로 인한 찌그러짐을 제거.

### src/components/Header.tsx

```17:35:src/components/Header.tsx
useEffect(() => {
  const el = headerRef.current; if (!el) return;
  const onWheel = (e: WheelEvent) => { e.preventDefault(); e.stopPropagation(); };
  const onTouchMove = (e: TouchEvent) => { e.preventDefault(); e.stopPropagation(); };
  el.addEventListener("wheel", onWheel, { passive: false });
  el.addEventListener("touchmove", onTouchMove, { passive: false });
  return () => { el.removeEventListener("wheel", onWheel as EventListener); el.removeEventListener("touchmove", onTouchMove as EventListener); };
}, []);
```

- 목적: 헤더 위에서의 스크롤/터치가 본문 스냅 스크롤을 방해하지 않도록 차단.
- 포인트: `passive:false`로 등록해야 `preventDefault()`가 동작합니다.

### src/Pages/TeamProject/index.tsx

```45:53:src/Pages/TeamProject/index.tsx
<ListSelectBox
  list={list}
  currentName={teamKey}
  onNavigate={nextKey => {
    const qs = new URLSearchParams({ team: nextKey });
    window.history.pushState(null, "", `/team-detail?${qs.toString()}`);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }}
/>
```

- 목적: 페이지 전체 리로드 없이 쿼리만 변경하여 콘텐츠 교체.
- 포인트: `pushState`로 주소만 바꾸고, `popstate` 이벤트를 의도적으로 발생시켜 라우터/훅이 변화를 감지하도록 합니다.

### src/queries/guestbook.ts & src/services/guestbook.ts

```35:41:src/queries/guestbook.ts
useEffect(() => {
  const unsubscribe = subscribeGuestbook(list => {
    queryClient.setQueryData(["guestbook"], list);
  });
  return unsubscribe;
}, [queryClient]);
```

- 목적: RTDB 실시간 업데이트를 React Query 캐시에 주입.
- 포인트: onValue 구독 해제 함수를 그대로 반환해 깔끔하게 언마운트 시 정리합니다.

```22:30:src/services/guestbook.ts
export async function sendGuestbookMessage(message: GuestbookMessage): Promise<void> {
  const messagesRef = ref(database, GUESTBOOK_PATH);
  await push(messagesRef, { ...message, createdAt: serverTimestamp() });
}
```

- 목적: 서버 시간 기준으로 생성 시각을 기록하여 정렬/표시에 일관성을 확보.
- 포인트: 클라이언트 시간이 아닌 `serverTimestamp()`를 사용.
