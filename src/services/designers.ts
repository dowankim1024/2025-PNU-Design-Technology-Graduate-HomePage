import app from "@/firebase";
import { getDatabase, ref, get } from "firebase/database";

export interface DesignerCardData {
  name: string;
  projectName: string;
}

type RawDesignerNode = {
  designerInfo?: {
    team?: string;
    name?: string;
    nameEnglish?: string;
    email?: string;
    intro?: string;
    conceptTitle?: string;
    conceptDescription?: string;
  };
  Poster?: {
    title?: string;
    description?: string;
  };
  Inter?: {
    title?: string;
    description?: string;
    levelDescription?: string[];
  };
};

export async function fetchDesignerCards(): Promise<DesignerCardData[]> {
  const db = getDatabase(app);
  const root = ref(db, "designerInfo");
  const snapshot = await get(root);
  const value = snapshot.val() as Record<string, RawDesignerNode> | null;

  if (!value) return [];

  const list: DesignerCardData[] = Object.entries(value).map(([key, node]) => {
    const name = node?.designerInfo?.name ?? key;
    const projectName =
      node?.Poster?.title ?? node?.designerInfo?.conceptTitle ?? "";
    return { name, projectName };
  });

  return list;
}

export interface DesignerDetailData {
  info: {
    name: string;
    nameEnglish: string;
    email: string;
    intro: string;
    conceptTitle: string;
    conceptDescription: string;
  };
  poster: {
    title: string;
    description: string;
  };
  inter: {
    title: string;
    description: string;
    levelDescription: string[];
  };
}

export async function fetchDesignerDetailByName(
  name: string
): Promise<DesignerDetailData | null> {
  const db = getDatabase(app);
  const nodeRef = ref(db, `designerInfo/${name}`);
  const snapshot = await get(nodeRef);
  const node = snapshot.val() as RawDesignerNode | null;
  if (!node || !node.designerInfo) return null;

  return {
    info: {
      name: node.designerInfo.name ?? name,
      nameEnglish: node.designerInfo.nameEnglish ?? "",
      email: node.designerInfo.email ?? "",
      intro: node.designerInfo.intro ?? "",
      conceptTitle: node.designerInfo.conceptTitle ?? "",
      conceptDescription: node.designerInfo.conceptDescription ?? "",
    },
    poster: {
      title: node.Poster?.title ?? "",
      description: node.Poster?.description ?? "",
    },
    inter: {
      title: node.Inter?.title ?? "",
      description: node.Inter?.description ?? "",
      levelDescription: Array.isArray(node.Inter?.levelDescription)
        ? node.Inter!.levelDescription!
        : [],
    },
  };
}

export interface TeamInfoRecord {
  TeamName: string;
  Description: string;
  Concept: string;
  TeamMates: Record<string, string>;
  Initial?: string;
  TeamFilm?: { Title?: string; Description?: string };
  TeamVideo?: { Title?: string; Description?: string };
  TeamInter?: {
    Title?: string;
    Description?: string;
    LevelDescription?: Array<string | null | undefined>;
  };
}

export async function fetchTeamInfo(): Promise<Record<string, TeamInfoRecord>> {
  const db = getDatabase(app);
  const refNode = ref(db, `TeamInfo`);
  const snapshot = await get(refNode);
  const value = snapshot.val() as Record<string, TeamInfoRecord> | null;
  return value ?? {};
}

export async function fetchDesignerNamesSorted(): Promise<string[]> {
  const db = getDatabase(app);
  const root = ref(db, "designerInfo");
  const snapshot = await get(root);
  const value = snapshot.val() as Record<string, RawDesignerNode> | null;
  if (!value) return [];
  const names = Object.values(value)
    .map(node => node.designerInfo?.name)
    .filter((n): n is string => !!n)
    .sort((a, b) => a.localeCompare(b, "ko"));
  return names;
}

// React Query 훅은 src/queries/designers.ts로 분리되었습니다.
