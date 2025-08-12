import app from "@/firebase";
import {
  getDatabase,
  ref,
  push,
  onValue,
  off,
  serverTimestamp,
  type DataSnapshot,
} from "firebase/database";

export interface GuestbookMessage {
  sender: string;
  message: string;
  receiver: string;
  createdAt?: number;
}

const database = getDatabase(app);
const GUESTBOOK_PATH = "guestbook";

export async function sendGuestbookMessage(
  message: GuestbookMessage
): Promise<void> {
  const messagesRef = ref(database, GUESTBOOK_PATH);
  await push(messagesRef, {
    ...message,
    createdAt: serverTimestamp(),
  });
}

export function subscribeGuestbook(
  onMessages: (messages: GuestbookMessage[]) => void
): () => void {
  const messagesRef = ref(database, GUESTBOOK_PATH);

  const handleValue = (snapshot: DataSnapshot) => {
    const value = snapshot.val() as Record<
      string,
      GuestbookMessage & { createdAt?: number }
    > | null;
    const list: GuestbookMessage[] = value ? Object.values(value) : [];
    list.sort((a, b) => {
      const aTime = typeof a.createdAt === "number" ? a.createdAt : 0;
      const bTime = typeof b.createdAt === "number" ? b.createdAt : 0;
      return aTime - bTime;
    });
    onMessages(list);
  };

  onValue(messagesRef, handleValue);

  return () => {
    off(messagesRef, "value", handleValue);
  };
}
