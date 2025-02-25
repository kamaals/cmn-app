"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { LoginType } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/schema";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { Form } from "@/components/ui/form";
import LoadingButton from "@/components/loading-button/loading-button";
import RHFInput from "@/components/rhf/rhf-input";
import RHFPassword from "@/components/rhf/rhf-password";
import { toast } from "sonner";

function RHFLogin() {
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);

  const form = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {},
  });

  const handleSubmit = React.useCallback(
    async (data: Partial<LoginType>) => {
      setLoading(true);
      try {
        await axios.post("/api/auth/login", { ...data });
        router.push("/");
        router.refresh();
      } catch (e: unknown) {
        const error = e as AxiosError;
        const data = error?.response?.data as { error: string };
        toast.error(data.error ?? "Something went wrong");
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    },
    [router],
  );

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="p-6 md:p-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold">Welcome back</h1>
              <p className="text-balance text-muted-foreground">
                Login to your Comeon account
              </p>
            </div>
            <div className="grid gap-2">
              <RHFInput label={"Username"} name="username" type="text" />
            </div>
            <div className="grid gap-2">
              <RHFPassword label={"Password"} name="password" type="text" />
            </div>
            <LoadingButton loading={loading} type="submit" className="w-full">
              Login
            </LoadingButton>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default RHFLogin;
