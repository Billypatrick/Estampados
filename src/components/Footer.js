import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold mb-2">Contáctanos:</p>
            <p className="text-md text-gray-300">WhatsApp: <a href="https://wa.me/51910940973" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors duration-300">+51 910940973</a></p>
          </div>
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold mb-2">Síguenos:</p>
            <div className="flex justify-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                {/* Facebook */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                {/* Instagram */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.132 5.775.072 7.053.014 8.333 0 8.74 0 12s.014 3.667.072 4.947c.06 1.278.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.765.297 1.635.499 2.913.558C8.333 23.986 8.74 24 12 24s3.667-.014 4.947-.072c1.278-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.297-.765.499-1.635.558-2.913.058-1.278.072-1.687.072-4.947s-.014-3.667-.072-4.947c-.06-1.278-.262-2.148-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.35 1.935 20.682 1.522 19.893 1.224c-.765-.297-1.635-.499-2.913-.558C15.667.014 15.26 0 12 0zm0 2.16c3.2 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.899.42.42.68.81.899 1.382.166.422.36 1.057.415 2.227.056 1.265.07 1.65.07 4.85s-.014 3.585-.07 4.85c-.055 1.17-.249 1.805-.415 2.227-.217.562-.477.96-.899 1.382-.42.42-.81.68-1.382.899-.422.166-1.057.36-2.227.415-1.265.056-1.65.07-4.85.07s-3.585-.014-4.85-.07c-1.17-.055-1.805-.249-2.227-.415-.562-.217-.96-.477-1.382-.899-.42-.42-.68-.81-.899-1.382-.166-.422-.36-1.057-.415-2.227C2.16 15.667 2.16 15.26 2.16 12s.016-3.585.071-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477-.96.899-1.382.42-.42.81-.68 1.382-.899.422-.166 1.057-.36 2.227-.415C8.333 2.16 8.74 2.16 12 2.16zm0 3.635c-3.402 0-6.16 2.758-6.16 6.16s2.758 6.16 6.16 6.16 6.16-2.758 6.16-6.16-2.758-6.16-6.16-6.16zM12 16c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm5.5-.657c-.34-.34-.795-.557-1.25-.557-.455 0-.91.217-1.25.557-.34.34-.557.795-.557 1.25 0 .455.217.91.557 1.25.34.34.795.557 1.25.557.455 0 .91-.217 1.25-.557.34-.34.557-.795.557-1.25 0-.455-.217-.91-.557-1.25z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">
                {/* Twitter */}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.417-4.293 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012 10.48c-.0.045-.0.089-.0.134a4.102 4.102 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <a href="#" className="text-md text-gray-300 hover:text-indigo-400 transition-colors duration-300">Política de Privacidad</a>
          </div>
        </div>
        <p className="text-lg mb-4">© 2023 Polos Chidos. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;