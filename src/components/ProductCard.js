import React from 'react';

const ProductCard = ({ product, onDetailsClick }) => {
  const whatsappMessage = `¡Hola! Me interesa el polo "${product.name}" (Tallas: ${product.sizes.join(', ')}). ¿Me puedes dar más información?`;
  const whatsappLink = `https://wa.me/51910940973?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">{product.name}</h3>
        <div className="flex flex-col items-center mt-auto">
          <span className="text-3xl font-bold text-gray-800 mb-4">S/. {product.price}</span>
          <div className="flex space-x-2 w-full">
            <button
              onClick={() => onDetailsClick(product)}
              className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg text-base font-medium hover:bg-indigo-700 transition-colors duration-300 shadow-md text-center"
            >
              Ver detalles
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg text-base font-medium hover:bg-purple-700 transition-colors duration-300 shadow-md text-center"
            >
              ¡Lo quiero!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;