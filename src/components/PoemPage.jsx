import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import poems from "../content/poemsData";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
const PoemPage = () => {
  const { slug } = useParams();

  const poem = poems.find((p) => p.slug === slug);

  const [content, setContent] = useState("");

  useEffect(() => {
    if (poem) {
      fetch(poem.file)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }
  }, [poem]);

  if (!poem) return <p>Poesia não encontrada!</p>;
  if (!content) return <p>Carregando...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto prose prose-lg space-y-4">
      <h1 className="text-2xl font-bold mb-4">{poem.titulo}</h1>
      <ReactMarkdown remarkPlugins={[remarkBreaks]}>{content}</ReactMarkdown>
    </div>
  );
};

export default PoemPage;
