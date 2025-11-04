import { Layout } from 'antd';
import 'antd/dist/reset.css';
import Blog from '@/app/views/BlogPage/blog';

export default function Page() {
  return (
    <Layout className="min-h-screen bg-gray-50">
      <Blog />
    </Layout>
  );
}
