import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";

export default function SubAccountsHome() {
  return (
    <section className="p-6 mb-20 min-h-screen w-full">
      <section className="flex justify-end">
        <Button variant={"outline"}>Create SubAccount</Button>
      </section>
      <section className="relative ml-auto flex-1 md:grow-0 w-full mt-10">
        <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for subaccount"
          className="w-full rounded-lg bg-background pl-8 py-4"
        />
      </section>
      <section className="mt-20 grid gap-3">
        <span className="text-3xl font-semibold">SubAccounts</span>
        <Card
          className="sm:col-span-2 grid grid-cols-2"
          x-chunk="dashboard-05-chunk-0"
        >
          <CardHeader>
            <div className="flex items-center gap-4">
              <img
                src={
                  "https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1441974231531-c6227db76b6e%3Fq%3D80%26w%3D2560%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=1080&q=75"
                }
                alt="image"
                width={150}
                height={150}
              />
              <CardDescription className="max-w-lg text-balance leading-relaxed grid">
                <span>Emmanuel Appah</span>
                <span>Premium</span>
              </CardDescription>
            </div>
          </CardHeader>
          <div className="pb-3 flex items-center justify-end p-4">
            <CardDescription className="max-w-lg text-balance leading-relaxed flex items-center gap-3">
              <Button>View</Button>
              <Button variant={"outline"}>Edit</Button>
              <Button variant={"destructive"}>Delete</Button>
            </CardDescription>
          </div>
        </Card>
      </section>
    </section>
  );
}
