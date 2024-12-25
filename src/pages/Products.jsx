import { InfiniteMovingCards } from '../components/ui/InfiniteMovingCards';
// import { ProductCarousel } from '../components/ProductCarousel';
import { HoverEffect } from '../components/ui/card-hover-effect';
import { products } from '../data/products';

const Products = () => {
  return (
    <div className="min-h-screen  bg-gray-100 ">
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

      {/* <section className="my-8">
        <h2 className="text-2xl font-bold text-center mb-4">
          Featured Products
        </h2>
        <ProductCarousel key={products.id} items={products.slice(0, 4)} />
      </section> */}

      <main className="container max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">All Products</h2>
        <HoverEffect items={products} />
        <div className="my-12 p-6">
          <InfiniteMovingCards
            items={products}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </div>
      </main>
    </div>
  );
};

export default Products;
