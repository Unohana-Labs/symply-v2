import Image from "next/image";
import Authenticated from "./authenticated";
import User from "@/components/dashboard/main";

export default function Home() {
  return (
    <Authenticated>
      <main className="">
        <User />
      </main>
    </Authenticated>
  );
}
