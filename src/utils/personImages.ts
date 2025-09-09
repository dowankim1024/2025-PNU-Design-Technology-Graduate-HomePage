import DefaultProfile from "@/assets/PersonImage/default.webp";

// PersonImage 폴더 내 이미지를 정적으로 모두 로드합니다.
// 파일명(확장자 제외)을 소문자/공백제거로 키로 사용합니다.
const modules = import.meta.glob(
  "/src/assets/PersonImage/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);

const imageKeyToUrl: Record<string, string> = {};
Object.entries(modules).forEach(([path, url]) => {
  const file = path.split("/").pop() || "";
  const dot = file.lastIndexOf(".");
  const key = (dot >= 0 ? file.slice(0, dot) : file).toLowerCase();
  imageKeyToUrl[key] = url as string;
});

// 한국어 이름 → 파일 키 별칭 테이블(필요 시 추가)
const ALIASES: Record<string, string> = {
  김도완: "kimdowan",
  김가빈: "kimgabin",
  박세은: "parkseeun",
  정일후: "jeongilho",
  고영은: "goyoungeun",
  김진혁: "kimjinhyeok",
  남현서: "namhyeonse",
  천후민: "cheonhumin",
  공태우: "gongtaewoo",
  김예솔: "kimyesol",
  김관욱: "kimkwanwook",
  최보윤: "choiboyun",
  박정훈: "bakjeonghun",
  김민채: "kimminchae",
};

function normalize(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9가-힣]/g, "");
}

export function getPersonImageByName(name?: string | null): string {
  if (!name) return DefaultProfile;
  const alias = ALIASES[name];
  if (alias && imageKeyToUrl[alias]) return imageKeyToUrl[alias];
  const key = normalize(name);
  return imageKeyToUrl[key] ?? DefaultProfile;
}

export default getPersonImageByName;
