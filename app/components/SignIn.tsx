"use client";
import { Button, Form, Input, message } from "antd";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { signInFailure, signInStart, signInSuccess } from "../../lib/features/auth/authSlice";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const loading = useAppSelector((s) => s.auth.loading);
  const user = useAppSelector((s) => s.auth.user);
  const error = useAppSelector((s) => s.auth.error);
  const router = useRouter();

  useEffect(() => {
    console.log("[auth] state changed", { user, loading, error });
  }, [user, loading, error]);

  const onFinish = (values: any) => {
    dispatch(signInStart());
    try {
      const user = {
        id: "demo-user",
        name: values.email.split("@")[0],
        email: values.email,
      };
      dispatch(signInSuccess(user));
      message.success("Signed in successfully. Redirecting to dashboard...");
      setTimeout(() => router.push("/dashboard"), 1000);
    } catch (e: any) {
      dispatch(signInFailure("Failed to sign in"));
      message.error("Failed to sign in");
    }
  };

  return (
    <section className="min-h-screen bg-[#f6f7fb] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-sm border border-gray-100">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-extrabold text-gray-900">Welcome back</h1>
          <p className="text-gray-500 text-sm mt-1">Sign in to continue to your account</p>
        </div>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: "Enter a valid email" }]}>
            <Input placeholder="you@example.com" />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true, message: "Enter your password" }, { min: 6, message: "Min 6 characters" }]}>
            <Input.Password placeholder="••••••••" />
          </Form.Item>
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-500">
              <Link href="#" className="text-[#4361ee] hover:underline">Forgot password?</Link>
            </div>
          </div>
          <Button htmlType="submit" type="primary" className="w-full" danger loading={loading}>
            Sign in
          </Button>
        </Form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account? <Link href="/signup" className="text-[#4361ee] font-medium">Create one</Link>
        </p>
      </div>
    </section>
  );
}

