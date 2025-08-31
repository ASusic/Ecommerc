import { Link } from 'react-router-dom';
import { FaTruck, FaShieldAlt, FaBolt, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3000/artikli');
        const products = await response.json();
        
        // Prikazujemo prvih 8 proizvoda ili manje ako nema dovoljno
        setFeaturedProducts(products.slice(0, 8));
      } catch (error) {
        console.error("Greška pri učitavanju proizvoda:", error);
        // Fallback na prazan niz ako API ne radi
        setFeaturedProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-gray-50 overflow-hidden">
      {/* Hero sekcija */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-32 px-6">
        <div className="absolute inset-0 bg-[url('/images/construction-pattern.png')] opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Premium <span className="text-green-400">Građevinski Materijali</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto"
          >
            Kvalitetni materijali za vaš dom po najboljim cijenama na tržištu
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/proizvodi"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Istražite proizvode <FaArrowRight />
            </Link>
            <Link
              to="/kontakt"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Kontaktirajte nas
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Prednosti */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <FaTruck className="text-4xl text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Brza Dostava</h3>
              <p className="text-gray-600">Dostava u roku od 24h za sve narudžbe unutar 50km</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <FaShieldAlt className="text-4xl text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Garancija Kvaliteta</h3>
              <p className="text-gray-600">Svi proizvodi sa certifikatom kvaliteta i 5-godišnjom garancijom</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="bg-green-100 p-4 rounded-full mb-4">
                <FaBolt className="text-4xl text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Stručno Savjetovanje</h3>
              <p className="text-gray-600">Besplatno savjetovanje s našim certificiranim stručnjacima</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* proizvodi */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Naši Proizvodi</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Pogledajte naš asortiman građevinskih materijala visokog kvaliteta
            </p>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg p-4 h-full">
                  <div className="h-64 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
                  <div className="space-y-3">
                    <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="h-64 bg-gray-200 overflow-hidden">
                    <img 
                      src={product.slika_url ? `/images/${product.slika_url}` : '/images/placeholder-product.jpg'} 
                      alt={product.naziv}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = '/images/placeholder-product.jpg';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{product.naziv}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.opis || 'Bez opisa'}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-green-600 font-bold">{product.cijena} KM</span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        product.kolicina_na_stanju > 0 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.kolicina_na_stanju > 0 ? 'Dostupno' : 'Nedostupno'}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Trenutno nema proizvoda za prikaz.</p>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              to="/proizvodi"
              className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Pogledajte sve proizvode <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;