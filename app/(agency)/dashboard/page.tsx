import Image from "next/image";
import User from "@/components/dashboard/main";
import Authenticated from "@/app/authenticated";

export default function Home() {
  return (
    <Authenticated>
      <main className="">
        <User />
      </main>
    </Authenticated>
  );
}
