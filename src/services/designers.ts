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
  Inter?: unknown;
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
