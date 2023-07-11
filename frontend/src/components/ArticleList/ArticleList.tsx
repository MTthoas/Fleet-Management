import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArticleDto } from "../../dto";
import { getArticles } from "../../services";

const ArticleList = () => {
  const [posts, setPosts] = useState<ArticleDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getArticles();
        setPosts(data);
      } catch (err: any) {
        setError("Posts not found");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="text-red-600 text-center mt-4">{error}</div>;
  }
  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-md mt-5 md:mt-10 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <h2 className="mb-4 text-2xl text-center font-bold text-black">
        Liste des articles
      </h2>
      <ul className="space-y-4">
        {posts.map((post: ArticleDto) => (
          <li key={post.id} className="p-3 bg-gray-100 rounded-md">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
