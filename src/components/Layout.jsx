// Layout.jsx
import Header from "./Header";
import { Outlet } from "react-router-dom";
import poems from "../content/poemsData";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const Layout = () => {
  const [index, setIndex] = useState(0);
  const [content, setContent] = useState("");

  // Atualiza poema a cada 30 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % poems.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const featured = poems[index];

  // conteudo do poema
  useEffect(() => {
    if (featured) {
      fetch(featured.file)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }
  }, [featured]);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Coluna Esquerda */}
      <div className="w-full md:w-7/12 min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>

      {/* Coluna Direita */}
      <aside className="hidden md:block w-5/12 bg-black text-white p-10 sticky top-0 h-screen overflow-y-auto">
        {featured && (
          <article className="space-y-4 leading-relaxed tracking-wide prose prose-invert">
            <h3 className="text-xl font-semibold mb-4">{featured.titulo}</h3>
            <ReactMarkdown>{content}</ReactMarkdown>
            <p className="text-right mt-6 text-gray-400 italic">
              - Ribeiro, Eduardo
            </p>
          </article>
        )}
      </aside>
    </div>
  );
};

export default Layout;
