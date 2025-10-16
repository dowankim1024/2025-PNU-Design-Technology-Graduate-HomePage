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

// 디자이너 이름으로 로컬 이미지 객체를 반환하는 함수
export function getLocalPersonImages(name: string) {
  return {
    after: afterImageMap[name] || defaultImage,
    before: beforeImageMap[name] || defaultImage,
    sub: subImageMap[name] || defaultImage,
  };
}

// 디자이너 이름으로 sub 이미지만 반환하는 함수 (DesignerInfo에서 사용)
export function getLocalPersonImage(name: string): string {
  return subImageMap[name] || defaultImage;
}

// 모든 디자이너의 이미지 데이터를 반환하는 함수
export function getAllLocalDesignerImages() {
  const names = Object.keys(subImageMap);
  return names.map(name => ({
    name,
    image: getLocalPersonImages(name),
  }));
}
