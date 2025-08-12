import { useSuspenseQuery } from "@tanstack/react-query";
import {
  fetchDesignerCards,
  fetchDesignerDetailByName,
  fetchDesignerNamesSorted,
  type DesignerDetailData,
  type DesignerCardData,
} from "@/services/designers";

export function useDesignerCards() {
  return useSuspenseQuery<DesignerCardData[], Error, DesignerCardData[]>({
    queryKey: ["designer-cards"],
    queryFn: fetchDesignerCards,
    staleTime: 60 * 1000,
  });
}

export function useDesignerDetail(name: string) {
  return useSuspenseQuery<
    DesignerDetailData | null,
    Error,
    DesignerDetailData | null
  >({
    queryKey: ["designer-detail", name],
    queryFn: () => fetchDesignerDetailByName(name),
    staleTime: 60 * 1000,
  });
}

export function useDesignerNames() {
  return useSuspenseQuery<string[], Error, string[]>({
    queryKey: ["designer-names"],
    queryFn: fetchDesignerNamesSorted,
    staleTime: 5 * 60 * 1000,
  });
}
