import React from 'react';

const ProductDetailModal = ({ product, onClose }) => {
  if (!product) return null;

  const whatsappMessage = `¡Hola! Me interesa el polo "${product.name}" (Tallas: ${product.sizes.join(', ')}). ¿Me puedes dar más información?`;
  const whatsappLink = `https://wa.me/51910940973?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-6 relative flex flex-col md:flex-row gap-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold"
        >
          &times;
        </button>
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-xl object-cover" />
        </div>
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h2>
            <p className="text-gray-700 text-lg mb-4">{product.description}</p>
            <p className="text-gray-800 text-xl font-semibold mb-2">Tallas disponibles: {product.sizes.join(', ')}</p>
            <p className="text-gray-900 text-3xl font-bold mb-6">Precio: S/. {product.price}</p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-purple-600 text-white px-8 py-4 rounded-xl text-xl font-bold hover:bg-purple-700 transition-colors duration-300 shadow-md text-center"
          >
            ¡Lo quiero!
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;