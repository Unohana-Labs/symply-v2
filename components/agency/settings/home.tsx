"use client";
import { Button } from "@/components/ui/button";
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
import { MessageCircle, ScanFace, Search, WholeWord } from "lucide-react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
});

export default function SettingsHome() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      security_emails: true,
    },
  });

  return (
    <section className="p-6 mb-20 min-h-screen w-full grid grid-cols-2 bg-card">
      <section className="p-2 m-2 bg-primary-foreground rounded-xl">
        <section className="grid p-5">
          <span className="text-2xl font-semibold">Agency Information</span>
          <span className=" text-muted-foreground">
            Edit your agency setting here
          </span>
        </section>
        <section className="grid p-5">
          <span className="my-3 text-sm font-semibold">Agency Logo</span>
          <img
            src={
              "https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1441974231531-c6227db76b6e%3Fq%3D80%26w%3D2560%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=1080&q=75"
            }
            alt="image"
            width={400}
            height={300}
          />
        </section>
        <section className="grid grid-cols-2 gap-3 p-5">
          <div className="grid gap-3">
            <Label>Agency Name</Label>
            <Input type="text" placeholder="Emmanuel" />
          </div>
          <div className="grid gap-3">
            <Label>Agency Email</Label>
            <Input type="email" placeholder="legadax@gmail.com" />
          </div>
          <div className="col-span-2 grid gap-4">
            <Label>Agency Phone Number</Label>
            <Input type="tel" placeholder="+234 906 643 8709" />
          </div>
        </section>
        <section className="p-5">
          <Form {...form}>
            <div className="space-y-0.5">
              <FormField
                control={form.control}
                name="marketing_emails"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base flex items-center gap-2">
                        <ScanFace size="14" />
                        Securit Emails
                      </FormLabel>
                      <FormDescription>
                        Receive emails highlighting all activities performed on
                        your agency account
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </Form>
        </section>
        <section className="p-5">
          <Form {...form}>
            <div className="space-y-0.5">
              <FormField
                control={form.control}
                name="marketing_emails"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base flex items-center gap-2">
                        <WholeWord size="14" />
                        Marketing Emails
                      </FormLabel>
                      <FormDescription>
                        Receive emails for new products, features, and more.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </Form>
        </section>
      </section>
      <section className="p-2 m-2  rounded-xl">
        <section className="grid p-5">
          <span className="text-2xl font-semibold">User Details</span>
          <span className=" text-muted-foreground">
            Edit your profile info / setting here
          </span>
        </section>
        <section className="grid p-5">
          <span className="my-3 text-sm font-semibold">Profile Image</span>
          <img
            src={
              "https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1441974231531-c6227db76b6e%3Fq%3D80%26w%3D2560%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=1080&q=75"
            }
            alt="image"
            width={400}
            height={300}
          />
        </section>
        <section className="grid gap-5 p-5">
          <div className="grid gap-3">
            <Label>Profile Name</Label>
            <Input type="text" placeholder="Emmanuel" />
          </div>
          <div className="grid gap-3">
            <Label>Profile Email</Label>
            <Input type="email" placeholder="legadax@gmail.com" />
          </div>
          <div className="grid gap-4">
            <Label>Profile Role</Label>
            <Input type="text" placeholder="Admin" disabled />
          </div>
        </section>
        <section className="p-5">
          <Form {...form}>
            <div className="space-y-0.5">
              <FormField
                control={form.control}
                name="marketing_emails"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">
                        Enable 2fa on your account
                      </FormLabel>
                      <FormDescription>
                        Enable 2fa on your account to make sure only you can
                        sign in.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </Form>
        </section>
      </section>
    </section>
  );
}
