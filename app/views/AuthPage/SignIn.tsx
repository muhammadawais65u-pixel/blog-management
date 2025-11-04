"use client";
import { Button, Form, Input, message } from "antd";
import Link from "next/link";

export default function SignIn() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    // TODO: call your API route to sign in
    console.log("sign-in:", values);
    message.success("Signed in successfully (demo)");
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
          <Form.Item name="password" label="Password" rules={[{ required: true, message: "Enter your password" }]}>
            <Input.Password placeholder="••••••••" />
          </Form.Item>
          <div className="flex items-center justify-between mb-4">
            <div className="text-sm text-gray-500">
              <Link href="#" className="text-[#4361ee] hover:underline">Forgot password?</Link>
            </div>
          </div>
          <Button htmlType="submit" type="primary" className="w-full" danger>
            Sign in
          </Button>
        </Form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don7t have an account? <Link href="/signup" className="text-[#4361ee] font-medium">Create one</Link>
        </p>
      </div>
    </section>
  );
}
