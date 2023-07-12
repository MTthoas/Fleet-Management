import React, { useEffect, useState } from "react";
import { UserDto } from "../../dto/userDto";
import { getUsers } from "../../services/userService";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState<UserDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
      const users = await getUsers();
      setUsers(users);
      } catch (err: any) {
        setError("Users not found");
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
        Liste des utilisateurs
      </h2>
      <ul className="space-y-4">
        {users.map((user: UserDto) => (
          <li key={user.id} className="p-3 bg-gray-100 rounded-md ">
            <Link
              to={"/user/" + user.id}
              className="flex justify-between items-center"
            >
              <span className="font-semibold text-gray-700">{user.name}</span>
              <span className="font-medium text-gray-500">
                {user.username} #{user.id}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
