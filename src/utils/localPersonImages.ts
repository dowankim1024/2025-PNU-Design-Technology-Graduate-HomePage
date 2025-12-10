// 로컬 assets/PersonImage 폴더의 이미지들을 사용하는 유틸리티 함수들

// afterPersonal 폴더의 이미지들을 로드
const afterModules = import.meta.glob(
  "/src/assets/PersonImage/afterPersonal/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);

// beforePersonal 폴더의 이미지들을 로드
const beforeModules = import.meta.glob(
  "/src/assets/PersonImage/beforePersonal/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);

// subPersonal 폴더의 이미지들을 로드
const subModules = import.meta.glob(
  "/src/assets/PersonImage/subPersonal/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);

// 이미지 URL 매핑 객체들
const afterImageMap: Record<string, string> = {};
const beforeImageMap: Record<string, string> = {};
const subImageMap: Record<string, string> = {};

// 각 폴더의 이미지들을 매핑
Object.entries(afterModules).forEach(([path, url]) => {
  const file = path.split("/").pop() || "";
  const dot = file.lastIndexOf(".");
  const key = dot >= 0 ? file.slice(0, dot) : file;
  afterImageMap[key] = url as string;
});

Object.entries(beforeModules).forEach(([path, url]) => {
  const file = path.split("/").pop() || "";
  const dot = file.lastIndexOf(".");
  const key = dot >= 0 ? file.slice(0, dot) : file;
  beforeImageMap[key] = url as string;
});

Object.entries(subModules).forEach(([path, url]) => {
  const file = path.split("/").pop() || "";
  const dot = file.lastIndexOf(".");
  const key = dot >= 0 ? file.slice(0, dot) : file;
  subImageMap[key] = url as string;
});

// 기본 이미지 (첫 번째 이미지를 기본값으로 사용)
const defaultImage = Object.values(subImageMap)[0] || "";

// 한국어 이름 → 영어 파일명 매핑
const NAME_TO_FILE: Record<string, string> = {
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

// 디자이너 이름으로 로컬 이미지 객체를 반환하는 함수
export function getLocalPersonImages(name: string) {
  const fileName = NAME_TO_FILE[name] || name;
  return {
    after: afterImageMap[fileName] || defaultImage,
    before: beforeImageMap[fileName] || defaultImage,
    sub: subImageMap[fileName] || defaultImage,
  };
}

// 디자이너 이름으로 sub 이미지만 반환하는 함수 (DesignerInfo에서 사용)
export function getLocalPersonImage(name: string): string {
  const fileName = NAME_TO_FILE[name] || name;
  return subImageMap[fileName] || defaultImage;
}

// 모든 디자이너의 이미지 데이터를 반환하는 함수
export function getAllLocalDesignerImages() {
  const names = Object.keys(subImageMap);
  return names.map(name => ({
    name,
    image: getLocalPersonImages(name),
  }));
}
