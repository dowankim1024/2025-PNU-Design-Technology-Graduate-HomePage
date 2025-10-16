// 팀 이미지를 관리하는 유틸리티 함수들

// subTeam 폴더의 이미지들을 로드
const teamModules = import.meta.glob(
  "/src/assets/TeamImage/subTeam/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);

// themeTeam 폴더의 이미지들을 로드
const themeTeamModules = import.meta.glob(
  "/src/assets/TeamImage/themeTeam/*.{png,jpg,jpeg,webp,avif}",
  { eager: true, import: "default" }
);

// 팀 이름과 파일명 매핑
const teamImageMap: Record<string, string> = {};
const themeTeamImageMap: Record<string, string> = {};

Object.entries(teamModules).forEach(([path, url]) => {
  const file = path.split("/").pop() || "";
  const dot = file.lastIndexOf(".");
  const fileName = dot >= 0 ? file.slice(0, dot) : file;

  // 파일명을 팀 키로 매핑
  let teamKey = "";
  if (fileName === "디피") teamKey = "DP";
  else if (fileName === "브랜딩") teamKey = "Brand";
  else if (fileName === "영상") teamKey = "Video";
  else if (fileName === "웹") teamKey = "Web";

  if (teamKey) {
    teamImageMap[teamKey] = url as string;
  }
});

Object.entries(themeTeamModules).forEach(([path, url]) => {
  const file = path.split("/").pop() || "";
  const dot = file.lastIndexOf(".");
  const fileName = dot >= 0 ? file.slice(0, dot) : file;

  // 파일명을 팀 키로 매핑 (themeTeam 폴더는 영어 파일명 사용)
  const teamKey = fileName;

  if (teamKey) {
    themeTeamImageMap[teamKey] = url as string;
  }
});

// 팀 이름으로 이미지 URL을 반환하는 함수 (subTeam 폴더)
export function getTeamImage(teamKey: string): string {
  return teamImageMap[teamKey] || teamImageMap["DP"] || "";
}

// 팀 이름으로 테마 팀 이미지 URL을 반환하는 함수 (themeTeam 폴더)
export function getThemeTeamImage(teamKey: string): string {
  return themeTeamImageMap[teamKey] || themeTeamImageMap["DP"] || "";
}

// 모든 팀 이미지를 반환하는 함수
export function getAllTeamImages() {
  return teamImageMap;
}

// 모든 테마 팀 이미지를 반환하는 함수
export function getAllThemeTeamImages() {
  return themeTeamImageMap;
}
