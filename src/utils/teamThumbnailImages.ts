// 팀 썸네일 이미지를 관리하는 유틸리티 함수들

// team_thumbnail 폴더의 Before/After 이미지들을 로드
const beforeImageModules = import.meta.glob(
  "/src/assets/team_thumbnail/*_Before.png",
  { eager: true, import: "default" }
);

const afterImageModules = import.meta.glob(
  "/src/assets/team_thumbnail/*_After.png",
  { eager: true, import: "default" }
);

// 팀 이름과 파일명 매핑
const beforeImageMap: Record<string, string> = {};
const afterImageMap: Record<string, string> = {};

// Before 이미지 매핑
Object.entries(beforeImageModules).forEach(([path, url]) => {
  const file = path.split("/").pop() || "";
  const dot = file.lastIndexOf(".");
  const fileName = dot >= 0 ? file.slice(0, dot) : file;

  // 파일명에서 팀 키 추출 (예: "Brand_Before" -> "Brand")
  const teamKey = fileName.replace("_Before", "");

  if (teamKey) {
    beforeImageMap[teamKey] = url as string;
  }
});

// After 이미지 매핑
Object.entries(afterImageModules).forEach(([path, url]) => {
  const file = path.split("/").pop() || "";
  const dot = file.lastIndexOf(".");
  const fileName = dot >= 0 ? file.slice(0, dot) : file;

  // 파일명에서 팀 키 추출 (예: "Brand_After" -> "Brand")
  const teamKey = fileName.replace("_After", "");

  if (teamKey) {
    afterImageMap[teamKey] = url as string;
  }
});

// 팀 이름으로 Before 이미지 URL을 반환하는 함수
export function getTeamBeforeImage(teamKey: string): string {
  return beforeImageMap[teamKey] || beforeImageMap["DP"] || "";
}

// 팀 이름으로 After 이미지 URL을 반환하는 함수
export function getTeamAfterImage(teamKey: string): string {
  return afterImageMap[teamKey] || afterImageMap["DP"] || "";
}

// 팀 이름으로 기본 이미지(Before) URL을 반환하는 함수
export function getTeamThumbnailImage(teamKey: string): string {
  return getTeamBeforeImage(teamKey);
}

// 모든 Before 이미지를 반환하는 함수
export function getAllBeforeImages() {
  return beforeImageMap;
}

// 모든 After 이미지를 반환하는 함수
export function getAllAfterImages() {
  return afterImageMap;
}
