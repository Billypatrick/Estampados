import React, { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import CatalogSection from './components/CatalogSection';
import ProductDetailModal from './components/ProductDetailModal';
import productsData from './data/products';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products] = useState(productsData);

  const reviews = [
    {
      name: 'Ana G.',
      comment: '¡Me encantó mi polo del Gato Cósmico! La tela es súper suave y el diseño es único. ¡Ya quiero pedir otro!',
    },
    {
      name: 'Carlos R.',
      comment: 'Pedí un polo personalizado y quedó justo como lo imaginé. La atención por WhatsApp fue rapidísima y muy amable. ¡Recomendados!',
    },
    {
      name: 'Sofía M.',
      comment: 'Los diseños de cultura pop son lo máximo. Compré el de Lucha Libre y todos mis amigos me preguntan dónde lo conseguí. ¡Calidad top!',
    },
  ];

  const whatsappPersonalizarMessage = "Hola, quiero personalizar un polo con mi diseño.";
  const whatsappPersonalizarLink = `https://wa.me/51910940973?text=${encodeURIComponent(whatsappPersonalizarMessage)}`;

  const handleDetailsClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {currentPage === 'home' && (
          <>
            <section
              className="relative text-white py-20 sm:py-24 lg:py-32 flex items-center justify-center text-center"
              style={{
                backgroundImage: "url('/images/banner.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-8 drop-shadow-lg">
                  Estampa tu estilo con diseños únicos
                </h2>
                <button
                  onClick={() => setCurrentPage('catalog')}
                  className="inline-block bg-white text-purple-600 text-xl sm:text-2xl font-bold px-10 py-4 rounded-full shadow-xl hover:bg-gray-100 transform transition-transform duration-300 hover:scale-105"
                >
                  Ver catálogo
                </button>
              </div>
            </section>

            <section className="py-16 bg-gray-100">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-10">
                  Nuestros <span className="text-indigo-600">Destacados</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {products.sort(() => 0.5 - Math.random()).slice(0, 3).map((product) => (
                    <ProductCard key={product.id} product={product} onDetailsClick={handleDetailsClick} />
                  ))}
                </div>
              </div>
            </section>

            
            <section id="personalizar" className="py-16 bg-gradient-to-r from-green-400 to-blue-500 text-white text-center">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 drop-shadow-lg">
                  ¿Quieres tu propio diseño?
                </h2>
                <p className="text-xl sm:text-2xl mb-10">
                  ¡Haz tu idea realidad! Estampa tu estilo único con un polo 100% personalizado.
                </p>
                <a
                  href={whatsappPersonalizarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-green-600 text-xl sm:text-2xl font-bold px-10 py-4 rounded-full shadow-xl hover:bg-gray-100 transform transition-transform duration-300 hover:scale-105"
                >
                  Personalizar por WhatsApp
                </a>
              </div>
            </section>

            <section id="opiniones" className="py-16 bg-gray-100">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
                  Lo que dicen nuestros <span className="text-indigo-600">Clientes</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {reviews.map((review, index) => (
                    <div key={index} className="bg-white p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                      <p className="text-gray-700 text-lg italic mb-6">"{review.comment}"</p>
                      <p className="text-gray-900 font-bold text-xl">- {review.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {currentPage === 'catalog' && (
          <CatalogSection products={products} onDetailsClick={handleDetailsClick} />
        )}
      </main>
      <Footer />
      <ProductDetailModal product={selectedProduct} onClose={handleCloseModal} />
    </div>
  );
};

export default App;

