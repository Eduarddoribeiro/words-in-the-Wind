import { Link } from "react-router-dom";

const PoemCard = ({ titulo, resumo, slug }) => {
  return (
    <Link
      to={`/poem/${slug}`}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all flex flex-col justify-between overflow-hidden group"
    >
      <div>
        {/* ttítulo */}
        <h2 className="font-bold text-2xl mb-3 group-hover:text-amber-800 transition-colors">
          {titulo}
        </h2>

        {/* resumo*/}
        <p className="text-gray-700 line-clamp-4 mb-4">{resumo}</p>
      </div>
      <span className="mt-auto text-amber-800 font-semibold text-right">
        Ler poema →
      </span>
    </Link>
  );
};

export default PoemCard;
