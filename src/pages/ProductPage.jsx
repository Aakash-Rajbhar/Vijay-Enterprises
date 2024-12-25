import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useState } from 'react';

const ProductDisplay = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-gray-700">Product not found.</h2>
      </div>
    );
  }

  // Combine main image and additional images
  const images = [product.image, ...product.additionalImages];

  console.log('Images Array: ', images); // Log the image array
  console.log('Selected Image: ', selectedImage); // Log the selected image index

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-[82px] lg:mt-[92px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images Section */}
        <div className="space-y-4">
          <div className="aspect-square w-full bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex space-x-2 overflow-x-auto">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedImage(index); // Set selected image index
                  console.log('Selected Image Changed: ', index); // Debug log for state change
                }}
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 
                    ${
                      selectedImage === index
                        ? 'border-blue-500'
                        : 'border-gray-200'
                    }`}
              >
                <img
                  src={img}
                  alt={`View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-sm text-gray-500">
              Product ID: {product.id}
            </p>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition">
              Request Technical Specifications
            </button>
            <button className="w-full bg-gray-100 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-200 transition">
              Download Documentation
            </button>
            <button className="w-full border border-gray-300 text-gray-600 py-3 px-4 rounded-md hover:bg-gray-50 transition">
              Schedule a Demo
            </button>
          </div>

          {/* Additional Info */}
          <div className="pt-6 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">Share this product:</span>
              <div className="flex space-x-2">
                {['Twitter', 'Facebook', 'LinkedIn'].map((platform) => (
                  <button
                    key={platform}
                    className="p-2 text-gray-400 hover:text-gray-500"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Suggested Products */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Other Products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg hover:scale-105 transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h4 className="mt-4 text-lg font-bold text-gray-800">
                  {item.name}
                </h4>
                {/* Show truncated description with "Read More" link */}
                <p className="text-gray-600 text-sm mt-2">
                  {item.description.length > 100
                    ? item.description.slice(0, 100) + '...'
                    : item.description}
                </p>
                <a
                  href={item.link}
                  className="text-blue-500 font-medium mt-2 inline-block"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDisplay;
