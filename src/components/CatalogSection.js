import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Listbox } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import products, { categories } from '../data/products';


const PRODUCTS_PER_PAGE = 6;

const CatalogSection = ({ products, onDetailsClick }) => {
  const categoriesWithProducts = categories.filter(cat =>
  products.some(p => p.category === cat)
);

const allCategories = ['Todas', ...categoriesWithProducts];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Paginación
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  // Cambia de página y vuelve al inicio del catálogo
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  return (
    <section id="catalogo" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Catálogo <span className="text-indigo-600">Completo</span>
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <input
            type="text"
            placeholder="Buscar polos..."
            className="w-full sm:w-1/2 px-5 py-3 rounded-full border-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition-all duration-300 text-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="relative w-full sm:w-1/4">
            <Listbox value={selectedCategory} onChange={setSelectedCategory}>
              <div className="relative">
                <Listbox.Button className="w-full bg-white border-2 border-indigo-400 text-gray-700 py-3 px-5 pr-10 rounded-full text-lg shadow-md flex justify-between items-center focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 transition-all duration-300">
                  {selectedCategory}
                  <ChevronDownIcon className="w-5 h-5 text-indigo-500 ml-2" />
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 mt-2 w-full bg-white border border-indigo-200 rounded-xl shadow-lg max-h-60 overflow-auto focus:outline-none">
                  {allCategories.map((category) => (
                    <Listbox.Option
                      key={category}
                      value={category}
                      className={({ active }) =>
                        `cursor-pointer select-none px-6 py-3 text-lg rounded-xl ${
                          active ? 'bg-indigo-100 text-indigo-700' : 'text-gray-900'
                        }`
                      }
                    >
                      {category}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} onDetailsClick={onDetailsClick} />
            ))
          ) : (
            <p className="text-center text-xl text-gray-600 col-span-full">No se encontraron polos con esos criterios.</p>
          )}
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded-full font-bold border-2 ${
                  currentPage === i + 1
                    ? 'bg-indigo-600 text-white border-indigo-600'
                    : 'bg-white text-indigo-600 border-indigo-300 hover:bg-indigo-50'
                } transition-colors duration-200`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CatalogSection;