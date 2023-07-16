// src/components/comment/CommentList.tsx
import React, { useEffect, useState } from 'react';
import { CommentDto } from '../../dto/commentDto';
import { getComments } from '../../services/commentService';

const CommentList = () => {
  const [comments, setComments] = useState<CommentDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getComments();
        setComments(data);
      } catch (err: any) {
        setError("Comments not found");
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
        Liste des commentaires
      </h2>
      <ul className="space-y-4">
        {comments.map((comment: CommentDto) => (
          <li key={comment.id} className="p-3 bg-gray-100 rounded-md ">
            <div className="font-semibold text-gray-700">{comment.name}</div>
            <div className="font-medium text-gray-500">{comment.email}</div>
            <div className="font-normal text-gray-600">{comment.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
