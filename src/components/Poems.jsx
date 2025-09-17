import { useState } from "react";
import PoemCard from "./PoemCard";
import poemas from "../../src/content/poemsData";

//
const poemasPorPagina = 9;

const Poesias = () => {
  // estado para controlar os poemas visíveis
  const [poemasVisiveis, setPoemasVisiveis] = useState(poemasPorPagina);

  //carregar mais poemas
  const handleCarregarMais = () => {
    setPoemasVisiveis((prev) => prev + poemasPorPagina);
  };

  const poemasParaMostrar = poemas.slice(0, poemasVisiveis);

  return (
    <div className="flex flex-col p-6">
      {/* inicioi da sessão */}
      <h2 className="text-4xl md:text-6xl font-title font-bold mb-6 text-black text-center">
        My Collection
      </h2>

      {/* grid dos poemas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {poemasParaMostrar.map((poema) => (
          <PoemCard
            key={poema.slug}
            titulo={poema.titulo}
            resumo={poema.resumo}
            slug={poema.slug}
          />
        ))}
      </div>

      {poemasVisiveis < poemas.length && (
        <div className="text-center mt-12">
          <button
            onClick={handleCarregarMais}
            className="px-6 py-3 bg-amber-800 text-white font-semibold rounded-full hover:bg-amber-900 transition-colors duration-300"
          >
            Load More Poems
          </button>
        </div>
      )}
    </div>
  );
};

export default Poesias;
