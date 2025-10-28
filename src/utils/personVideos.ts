import DefaultVideo from "@/assets/personalPosterVideo/kim_dowan.mp4";

// personalPosterVideo 폴더 내 비디오를 정적으로 모두 로드합니다.
// 파일명(확장자 제외)을 소문자/공백제거로 키로 사용합니다.
const modules = import.meta.glob(
  "/src/assets/personalPosterVideo/*.{mp4,webm,mov,avi}",
  { eager: true, import: "default" }
);

const videoKeyToUrl: Record<string, string> = {};
Object.entries(modules).forEach(([path, url]) => {
  const file = path.split("/").pop() || "";
  const dot = file.lastIndexOf(".");
  const key = (dot >= 0 ? file.slice(0, dot) : file).toLowerCase();
  videoKeyToUrl[key] = url as string;
});

// 한국어 이름 → 파일 키 별칭 테이블
const ALIASES: Record<string, string> = {
  김도완: "kim_dowan",
  김가빈: "kim_gabin",
  박세은: "park_seeun",
  정일후: "jung_ilhoo",
  고영은: "go_yeongeun",
  김진혁: "kim_jinhyeok",
  남현서: "nam_hyeonseo",
  천후민: "cheon_hoomin",
  공태우: "gong_taewoo",
  김예솔: "kim_yesol",
  김관욱: "kim_gwanuk",
  최보윤: "choi_boyoon",
  박정훈: "park_jeonghun",
  김민채: "kim_minchae",
};

function normalize(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9가-힣]/g, "");
}

export function getPersonVideoByName(name?: string | null): string {
  if (!name) return DefaultVideo;
  const alias = ALIASES[name];
  if (alias && videoKeyToUrl[alias]) return videoKeyToUrl[alias];
  const key = normalize(name);
  return videoKeyToUrl[key] ?? DefaultVideo;
}

export default getPersonVideoByName;
