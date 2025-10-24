// 로컬 assets/InterImage_personal 폴더의 이미지들을 사용하는 유틸리티 함수들

// InterImage_personal 폴더의 이미지들을 로드
const interModules = import.meta.glob(
  "/src/assets/InterImage_personal/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);

// levelImage_personal 폴더의 이미지들을 로드
const levelModules = import.meta.glob(
  "/src/assets/levelImage_personal/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);

// 이미지 URL 매핑 객체들
const interImageMap: Record<string, string> = {};
const levelImageMap: Record<string, string[]> = {};

// InterImage_personal 폴더의 이미지들을 매핑
Object.entries(interModules).forEach(([path, url]) => {
  const file = path.split("/").pop() || "";
  const dot = file.lastIndexOf(".");
  const key = dot >= 0 ? file.slice(0, dot) : file;
  interImageMap[key] = url as string;
});

// levelImage_personal 폴더의 이미지들을 매핑
Object.entries(levelModules).forEach(([path, url]) => {
  const file = path.split("/").pop() || "";
  const dot = file.lastIndexOf(".");
  const key = dot >= 0 ? file.slice(0, dot) : file;

  // 파일명에서 레벨 번호 추출 (예: kim_dowan_1 -> kim_dowan, 1)
  const levelMatch = key.match(/^(.+)_(\d+)$/);
  if (levelMatch) {
    const [, baseName, levelNum] = levelMatch;
    const levelIndex = parseInt(levelNum) - 1; // 0-based index

    if (!levelImageMap[baseName]) {
      levelImageMap[baseName] = [];
    }
    levelImageMap[baseName][levelIndex] = url as string;
  }
});

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

// 디자이너 이름으로 인터사진을 반환하는 함수
export function getLocalInterImage(name: string): string {
  const fileName = NAME_TO_FILE[name] || name;
  return interImageMap[fileName] || "";
}

// 디자이너 이름으로 레벨 이미지들을 반환하는 함수
export function getLocalLevelImages(name: string): string[] {
  const fileName = NAME_TO_FILE[name] || name;
  return levelImageMap[fileName] || [];
}
