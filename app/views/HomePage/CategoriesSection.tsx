import Image from 'next/image';
import Card from '@/app/components/Card';

interface CategoryItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const categories: CategoryItem[] = [
  {
    id: 1,
    title: 'Car Reviews',
    description:
      'Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egestasrendi in.',
    image: '/assets/cat1.jpg',
  },
  {
    id: 2,
    title: 'Maintenance Tips',
    description:
      'Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egestasrendi in.',
    image: '/assets/cat2.jpg',
  },
  {
    id: 3,
    title: 'Car Modifications',
    description:
      'Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egestasrendi in.',
    image: '/assets/cat3.jpg',
  },
  {
    id: 4,
    title: 'Driving Tips',
    description:
      'Lorem ipsum dolor sit amet consectetur. Urna dignissim ac egestasrendi in.',
    image: '/assets/cat4.jpg',
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">All Category</h2>
            <span className="hidden md:block w-16 h-[3px] bg-gray-900 rounded"></span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Card
              key={cat.id}
              variant="category"
              title={cat.title}
              image={cat.image}
              description={cat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
