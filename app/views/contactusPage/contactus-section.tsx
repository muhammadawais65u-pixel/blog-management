"use client";
import { Button, Form, Input, message } from "antd";

export default function ContactSection() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    // In a real app, send values to your API here
    message.success("Thanks! We'll get back to you soon.");
    form.resetFields();
  };

  return (
    <section className="bg-white">
      <div className="container px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <p className="uppercase tracking-[0.2em] text-xs text-gray-500">Contact us</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">We'd love to hear from you</h2>
          <p className="mt-4 text-gray-600">Have a question or feedback? Fill out the form and our team will reply as soon as possible.</p>

          <div className="mt-8 rounded-xl border border-gray-200 p-6 bg-white">
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#EF4444] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1118 0zm-9-3a3 3 0 100 6 3 3 0 000-6z"/></svg>
                </span>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-600">Finstreet 118 2561 abctown</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#EF4444] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M1.5 4.5A2.25 2.25 0 013.75 2.25h16.5A2.25 2.25 0 0122.5 4.5V19.5A2.25 2.25 0 0120.25 21.75H3.75A2.25 2.25 0 011.5 19.5V4.5zm2.25 0l8.25 6 8.25-6H3.75zm16.5 1.864l-7.83 5.695a1.5 1.5 0 01-1.84 0L2.25 6.364V19.5c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75V6.364z"/></svg>
                </span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">example@email.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#EF4444] text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.52 22 2 13.48 2 3.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z"/></svg>
                </span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">001 2345 442</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-xl border border-gray-200 p-6 bg-white shadow-sm">
            <Form layout="vertical" form={form} onFinish={onFinish}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Form.Item name="name" label="Name" rules={[{ required: true, message: "Please enter your name" }]}>
                  <Input placeholder="Your name" />
                </Form.Item>
                <Form.Item name="email" label="Email" rules={[{ required: true, type: "email", message: "Enter a valid email" }]}>
                  <Input placeholder="you@example.com" />
                </Form.Item>
              </div>
              <Form.Item name="subject" label="Subject" rules={[{ required: true, message: "Please enter a subject" }]}>
                <Input placeholder="How can we help?" />
              </Form.Item>
              <Form.Item name="message" label="Message" rules={[{ required: true, message: "Please enter your message" }]}>
                <Input.TextArea rows={5} placeholder="Write your message..." />
              </Form.Item>
              <div className="flex justify-end">
                <Button type="primary" danger htmlType="submit">
                  Send message
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}