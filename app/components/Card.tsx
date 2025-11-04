import Image from 'next/image';

type CardVariant = 'blog' | 'category';

type CommonProps = {
  className?: string;
  image: string;
  title: string;
};

type BlogProps = CommonProps & {
  variant: 'blog';
  author: string;
  date: string;
  readTime?: string;
  description?: string;
  avatarSrc?: string;
};

type CategoryProps = CommonProps & {
  variant: 'category';
  description?: string;
};

type CardProps = BlogProps | CategoryProps;

const Card = (props: CardProps) => {
  if (props.variant === 'category') {
    const { className, image, title, description } = props;
    return (
      <div className={`rounded-xl bg-gray-50 p-6 text-center shadow-sm hover:shadow-md transition-shadow ${className ?? ''}`}>
        <div className="mx-auto mb-5 h-20 w-20 rounded-full overflow-hidden ring-4 ring-white shadow">
          <div className="relative h-full w-full">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        {description && (
          <p className="text-sm text-gray-500 leading-relaxed max-w-[240px] mx-auto">{description}</p>
        )}
      </div>
    );
  }

  // blog variant
  const { className, image, title, author, date, readTime, description, avatarSrc } = props;
  return (
    <div className={`rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col ${className ?? ''}`}>
      <div className="relative h-44 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-5 bg-[#F4F2FF] flex-1 flex flex-col">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4 leading-snug">{title}</h3>
        {description && <p className="text-sm text-gray-600 mb-4">{description}</p>}
        <div className="mt-auto">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
              <Image src={avatarSrc ?? '/assets/avatar.jpg'} alt={author} width={32} height={32} className="object-cover w-full h-full" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">{author}</p>
              <p className="text-xs text-gray-500">{date}{readTime ? ` • ${readTime}` : ''}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
