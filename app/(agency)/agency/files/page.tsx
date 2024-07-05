import ChatHome from "@/components/agency/messages/chat/home";
import Authenticated from "@/app/authenticated";
export default function Home() {
  return (
    <Authenticated>
      <ChatHome />
    </Authenticated>
  );
}
