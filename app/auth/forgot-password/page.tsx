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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
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
            <CardTitle className="text-2xl">Forgot your password?</CardTitle>
            <CardDescription>
              Enter your email below to reset your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="flex items-center">
              <Link
                href="/auth/login"
                className="ml-auto inline-block text-sm underline underline-offset-4"
              >
                Remember your password? Login
              </Link>
            </div>
          </CardContent>
          <CardFooter>
            <Link href={"/auth/forgot-password/verify-otp"} className="w-full">
              <Button className="w-full">Reset Password</Button>
            </Link>
          </CardFooter>
        </div>
      </div>
    </div>
  );
}
