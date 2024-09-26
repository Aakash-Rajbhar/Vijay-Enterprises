import { InfiniteMovingCards } from '../components/ui/InfiniteMovingCards';
import { LensDemo } from '../components/LensDemo.jsx';
import { HoverEffect } from '../components/ui/card-hover-effect.jsx';
import { ProductCarousel } from '../components/ProductCarousel.jsx';

const products = [
  {
    id: 1,
    name: 'Machine Parts',
    description:
      'Custom-made machine parts for various industrial applications.',
    image:
      'https://miro.medium.com/v2/resize:fit:828/format:webp/1*909Dlosz1MqPM2vQ9WQOJA.jpeg',
  },
  {
    id: 2,
    name: 'Covers and Panels',
    description: 'Durable covers and panels for equipment protection.',
    image:
      'https://pcbtechnologies.in/wp-content/uploads/2022/05/ELECTRICAL-CONTROL-PANEL-02.jpg',
  },
  {
    id: 3,
    name: 'Hoppers',
    description: 'Industrial hoppers for material handling and processing.',
    image:
      'https://img.vevorstatic.com/us%2FGTYTGZJ40LLD00001V0%2Fgoods_img_big-v4%2Ffilling-machine-hopper-m100-1.2.jpg?timestamp=1614528000000&format=webp',
  },
  {
    id: 4,
    name: 'Ladders',
    description: 'Custom-fabricated ladders for industrial and commercial use.',
    image:
      'https://store.youngman.co.in/cdn/shop/products/7_step_al-wall_support.770_1_2048x2048.jpg?v=1644924060',
  },
  {
    id: 5,
    name: 'Tables',
    description: 'Heavy-duty tables for workshops and industrial environments.',
    image: 'https://m.media-amazon.com/images/I/51zU08GtvIL.jpg',
  },
  {
    id: 6,
    name: 'Gates',
    description:
      'Security gates and fencing solutions for various applications.',
    image:
      'https://5.imimg.com/data5/SELLER/Default/2022/5/AG/NE/RH/137051090/metal-gate.jpg',
  },
  {
    id: 7,
    name: 'Jali Designs',
    description:
      'Decorative and functional jali designs for architectural use.',
    image:
      'https://5.imimg.com/data5/CB/IU/MY-23467021/img-20171014-wa0107-500x500.jpg',
  },
  {
    id: 8,
    name: 'Metal Frames',
    description: 'Custom metal frames for various applications.',
    image:
      'https://i0.wp.com/www.bliksen.com/wp-content/uploads/Semiconductor-manufacturing-equipment-frame.jpg',
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-100 mt-[82px] lg:mt-[92px]">
      <header className="relative bg-gradient-to-b from-black to-slate-300 text-white py-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: `url('https://example.com/metal-fabrication-background.jpg')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-[#222] opacity-90"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Our Products and Services
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Sheet Metal Works, Fabrication, Laser Cutting, and More
          </p>
        </div>
      </header>

      <section className="my-8">
        <h2 className="text-2xl font-bold text-center mb-4">
          Featured Products
        </h2>
        <ProductCarousel items={products.slice(0, 4)} />
      </section>

      <main className="container max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">All Products</h2>
        <div>
          <HoverEffect items={products} />
        </div>
        <div className="my-12 p-6 ">
          <InfiniteMovingCards
            items={products}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            return (
              <LensDemo
                key={product.id}
                title={product.name}
                image={product.image}
                desc={product.description}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Products;
