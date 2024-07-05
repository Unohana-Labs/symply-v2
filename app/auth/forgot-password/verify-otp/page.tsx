"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function Home() {
  const [value, setValue] = React.useState("");

  return (
    <div className="w-full lg:grid lg:grid-cols-2 min-h-screen">
      <div className="hidden bg-muted lg:block">
        <Image
          src="https://static.vecteezy.com/system/resources/previews/001/590/655/non_2x/blue-wavy-background-free-vector.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex items-center justify-center py-12">
        <div className="w-full max-w-xl">
          <CardHeader>
            <CardTitle className="text-2xl">Input OTP</CardTitle>
            <CardDescription>
              Enter the OTP sent to your email below to reset your password.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 items-center justify-center">
            <div className="space-y-2">
              <InputOTP
                maxLength={6}
                value={value}
                onChange={(value) => setValue(value)}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <div className="text-center text-sm mt-2">
                {value === "" ? (
                  <>Enter your one-time password.</>
                ) : (
                  <>You entered: {value}</>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link
              href={"/auth/forgot-password/reset-password"}
              className="w-full"
            >
              <Button className="w-full">Reset Password</Button>
            </Link>
          </CardFooter>
        </div>
      </div>
    </div>
  );
}
