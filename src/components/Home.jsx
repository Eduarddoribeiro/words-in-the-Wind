import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import poems from "../content/poemsData";

const Home = () => {
  const [index, setIndex] = useState(0);
  const featured = poems[index];

  // 30 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % poems.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-80px)] text-center px-6">
      <h2 className="font-title text-5xl md:text-8xl font-bold mb-4 text-black tracking-tight">
        Words in the Wind
      </h2>

      <p className="text-xl mb-6 max-w-md text-gray-800 tracking-wide">
        I share a little of who I am through a few words.
      </p>

      <Link
        to="/collection"
        className="inline-flex items-center px-6 py-3 bg-amber-800 text-white font-semibold rounded-full shadow-md hover:bg-amber-900 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      >
        Explore Collection
        <span className="ml-2">→</span>
      </Link>

      <div className="md:hidden mt-10 w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4 text-center">Poesia em destaque</h3>
        <div className="bg-gray-100 p-4 rounded-lg shadow">
          <h4 className="font-bold text-lg mb-2">{featured.titulo}</h4>
          <p className="text-gray-700 line-clamp-3">{featured.resumo}</p>
          <Link
            to={`/poem/${featured.slug}`}
            className="text-amber-800 font-semibold mt-2 inline-block"
          >
            Ler poema →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
