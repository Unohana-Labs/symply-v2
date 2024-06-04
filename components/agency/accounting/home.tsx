"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  Airplay,
  ArrowBigDown,
  ArrowDownCircle,
  Book,
  BookDashed,
  MessageCircle,
  ScanFace,
  Search,
  Send,
  WholeWord,
} from "lucide-react";
import Image from "next/image";

export default function AccountingHome() {
  return (
    <section className="p-6 mb-20 min-h-screen w-full grid grid-cols-3">
      <section className="p-2 m-2 rounded-xl col-span-2">
        <section className="grid p-5">
          <span className="text-2xl font-semibold">Statistics</span>
        </section>
        <section className="grid gap-3 p-5">
          <section className="grid grid-cols-3 gap-4">
            <Card className="grid" x-chunk="dashboard-05-chunk-0">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <CardDescription className="max-w-lg text-balance leading-relaxed grid">
                    <span>Emmanuel Appah</span>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <span className="font-bold flex items-center gap-3">
                  <span className="text-3xl">$10,000</span>{" "}
                  <span className="flex items-center gap-1 text-xs  text-muted-foreground">
                    <ArrowDownCircle size={18} color="red" /> -13%
                  </span>
                </span>
              </CardContent>
            </Card>
            <Card className="grid" x-chunk="dashboard-05-chunk-0">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <CardDescription className="max-w-lg text-balance leading-relaxed grid">
                    <span>Emmanuel Appah</span>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <span className="font-bold flex items-center gap-3">
                  <span className="text-3xl">$10,000</span>{" "}
                  <span className="flex items-center gap-1 text-xs  text-muted-foreground">
                    <ArrowDownCircle size={18} color="green" /> +130.00%
                  </span>
                </span>
              </CardContent>
            </Card>
            <Card className="grid" x-chunk="dashboard-05-chunk-0">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <CardDescription className="max-w-lg text-balance leading-relaxed grid">
                    <span>Emmanuel Appah</span>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <span className="font-bold flex items-center gap-3">
                  <span className="text-3xl">$10,000</span>{" "}
                  <span className="flex items-center gap-1 text-xs  text-muted-foreground">
                    <ArrowDownCircle size={18} color="red" /> -13%
                  </span>
                </span>
              </CardContent>
            </Card>
          </section>
          <section className="grid grid-cols-2 gap-4">
            <Card className="grid" x-chunk="dashboard-05-chunk-0">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <CardDescription className="max-w-lg text-balance leading-relaxed grid">
                    <span>Emmanuel Appah</span>
                    <span>Premium</span>
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
            <Card className="grid" x-chunk="dashboard-05-chunk-0">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <CardDescription className="max-w-lg text-balance leading-relaxed grid">
                    <span>Emmanuel Appah</span>
                    <span>Premium</span>
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </section>
          <section className="grid gap-4">
            <Card className="grid" x-chunk="dashboard-05-chunk-0">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <CardDescription className="max-w-lg text-balance leading-relaxed grid">
                    <span>Emmanuel Appah</span>
                    <span>Premium</span>
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </section>
        </section>
      </section>
      <section className="p-2 m-2 bg-primary-foreground rounded-xl">
        <section className="grid p-5">
          <span className="text-2xl font-semibold">Statistics</span>
        </section>
        <section className="grid gap-3">
          <section className="grid gap-4">
            <Card className="grid" x-chunk="dashboard-05-chunk-0">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <CardDescription className="max-w-lg text-balance leading-relaxed grid">
                    <span>Emmanuel Appah</span>
                    <span>Premium</span>
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </section>
          <section className="grid grid-cols-3 gap-4">
            <div className="rounded-full">
              <Button className="flex items-center gap-2">
                Send invloice <BookDashed size={15} />
              </Button>
            </div>
            <Button className="flex gap-2 items-center text-center">
              Pay salary <Send />
            </Button>
            <Button className="flex gap-2 items-center text-center">
              More <DotsHorizontalIcon />
            </Button>
          </section>
          <section className="grid gap-4">
            <Card className="grid" x-chunk="dashboard-05-chunk-0">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <CardDescription className="max-w-lg text-balance leading-relaxed grid">
                    <span>Emmanuel Appah</span>
                    <span>Premium</span>
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </section>
        </section>
      </section>
    </section>
  );
}
