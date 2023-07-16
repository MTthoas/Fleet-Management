import React, { useEffect, useState } from "react";
import { ArticleDto } from "../../dto/articleDto";
import { UserDto } from "../../dto/userDto";
import { CommentDto } from "../../dto/commentDto";
import { getArticle, getArticleComments } from "../../services/articleService";
import { getUser } from "../../services/userService";
import { useParams } from "react-router-dom";
import BackButton from "../GoBackBtn/GoBackBtn";

const ArticleDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleDto | undefined>();
  const [user, setUser] = useState<UserDto | undefined>();
  const [comments, setComments] = useState<CommentDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const articleData = await getArticle(Number(id));
        setArticle(articleData);
        const userData = await getUser(articleData.userId);
        setUser(userData);
        const commentsData = await getArticleComments(Number(id));
        setComments(commentsData);
      } catch (err: any) {
        setError("Data not found");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div className="text-red-600 text-center mt-4">{error}</div>;
  }
  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-md mx-auto mt-5 md:mt-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <BackButton />
      <div className="mt-8 mb-2 flex justify-between">
        <a href={"/user/" + user?.id} className="underline">
          By {user?.name}
        </a>
        <p>{user?.email}</p>
      </div>
      <h2 className="mb-6 text-2xl font-bold text-black">{article?.title}</h2>
      <p className="font-semibold">Content:</p>
      <p className="mt-1">{article?.body}</p>

      <h3 className="text-xl font-bold text-black mt-16">Comments</h3>
      {comments.map((comment: CommentDto) => (
        <div
          key={comment.id}
          className="my-3 border-b border-gray-300 p-2 pb-4"
        >
          <h4 className="text-lg font-bold">{comment.name}</h4>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleDetails;
