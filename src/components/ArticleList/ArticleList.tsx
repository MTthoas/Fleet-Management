import React, { useEffect, useState } from "react";
import { ArticleDto } from "../../dto";
import { getArticles } from "../../services";
import { Link } from "react-router-dom";

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
      <ul>
        {posts.map((post: ArticleDto) => (
          <Link to={`/article/${post.id}`}>
            <li key={post.id} className="p-3 mb-4 bg-gray-100 rounded-md">
              {post.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
