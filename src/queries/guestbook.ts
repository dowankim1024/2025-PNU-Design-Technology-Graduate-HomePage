import { useEffect } from "react";
import {
  useMutation,
  useSuspenseQuery,
  useQueryClient,
} from "@tanstack/react-query";
import {
  sendGuestbookMessage,
  type GuestbookMessage,
} from "@/services/guestbook";
import { subscribeGuestbook } from "@/services/guestbook";

export function usePostGuestbookMessage() {
  return useMutation({
    mutationFn: (payload: GuestbookMessage) => sendGuestbookMessage(payload),
    onSuccess: () => {
      // RTDB onValue 실시간 구독이 캐시를 갱신하므로 무효화 불필요
    },
  });
}

export function useGuestbookStream() {
  const queryClient = useQueryClient();

  const { data } = useSuspenseQuery<
    GuestbookMessage[],
    Error,
    GuestbookMessage[]
  >({
    queryKey: ["guestbook"],
    queryFn: async () => [],
    staleTime: Infinity,
  });

  useEffect(() => {
    const unsubscribe = subscribeGuestbook(list => {
      queryClient.setQueryData(["guestbook"], list);
    });
    return unsubscribe;
  }, [queryClient]);

  return data ?? [];
}
