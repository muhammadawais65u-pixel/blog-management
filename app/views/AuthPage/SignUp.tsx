"use client";
import { Button, Form, Input, message } from "antd";
import Link from "next/link";

export default function SignUp() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    // TODO: call your API route to sign up
    console.log("sign-up:", values);
    message.success("Account created (demo)");
  };

  return (
    <section className="min-h-screen bg-[#f6f7fb] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-sm border border-gray-100">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-extrabold text-gray-900">Create account</h1>
          <p className="text-gray-500 text-sm mt-1">Join us and start your journey</p>
        </div>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item name="name" label="Full name" rules={[{ required: true, message: "Enter your name" }]}>
            <Input placeholder="John Doe" />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: "Enter a valid email" }]}>
            <Input placeholder="you@example.com" />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true, min: 6, message: "Min 6 characters" }]}>
            <Input.Password placeholder="••••••••" />
          </Form.Item>
          <Form.Item name="confirm" label="Confirm password" dependencies={["password"]} rules={[{ required: true, message: "Confirm your password" }, ({ getFieldValue }) => ({ validator(_, value) { if (!value || getFieldValue('password') === value) { return Promise.resolve(); } return Promise.reject(new Error('Passwords do not match')); } })]}>
            <Input.Password placeholder="••••••••" />
          </Form.Item>
          <Button htmlType="submit" type="primary" className="w-full" danger>
            Create account
          </Button>
        </Form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account? <Link href="/signin" className="text-[#4361ee] font-medium">Sign in</Link>
        </p>
      </div>
    </section>
  );
}
