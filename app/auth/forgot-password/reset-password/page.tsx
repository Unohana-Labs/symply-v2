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

export default function Login() {
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
        <div className="mx-auto max-w-lg w-full">
          <CardHeader>
            <CardTitle className="text-xl">Set new password</CardTitle>
            <CardDescription>
              Enter and confirm the new password for your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 my-2">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Enter Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter new password"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Confirm Password</Label>
                  <Input
                    id="password2"
                    type="password2"
                    placeholder="Confirm new password:"
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full mt-2">
                Confirm reset password
              </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </div>
  );
}
