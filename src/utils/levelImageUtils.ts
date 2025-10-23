// 디자이너 이름을 기반으로 levelImage 경로를 생성하는 유틸리티 함수

const nameToEnglishMap: Record<string, string> = {
  박세은: "park_seeun",
  김도완: "kim_dowan",
  김가빈: "kim_gabin",
  정일후: "jung_ilhoo",
  김예솔: "kim_yesol",
  김민채: "kim_minchae",
  김관욱: "kim_gwanuk",
  김진혁: "kim_jinhyeok",
  남현서: "nam_hyeonseo",
  박정훈: "park_jeonghun",
  고영은: "go_yeongeun",
  공태우: "gong_taewoo",
  천후민: "cheon_hoomin",
  최보윤: "choi_boyoon",
};

export function generateLevelImagePaths(designerName: string): string[] {
  const englishName = nameToEnglishMap[designerName];
  if (!englishName) {
    console.warn(`No English name mapping found for: ${designerName}`);
    return [];
  }

  return [
    `/src/assets/levelImage_personal/${englishName}_1.png`,
    `/src/assets/levelImage_personal/${englishName}_2.png`,
    `/src/assets/levelImage_personal/${englishName}_3.png`,
  ];
}

export function generateInterImagePath(designerName: string): string {
  const englishName = nameToEnglishMap[designerName];
  if (!englishName) {
    console.warn(`No English name mapping found for: ${designerName}`);
    return "";
  }

  return `/src/assets/InterImage_personal/${englishName}.png`;
}
