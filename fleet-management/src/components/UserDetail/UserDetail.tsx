import React, { useEffect, useState } from "react";
import { UserDto } from "../../dto/userDto";
import { getUser } from "../../services";
import { useParams } from "react-router-dom";
import BackButton from "../GoBackBtn/GoBackBtn";

function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<UserDto>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) {
        setError("No id provided");
        return;
      }

      setLoading(true);
      try {
        const data = await getUser(Number(id));
        setUser(data);
      } catch (err: any) {
        setError("User not found");
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

  return user ? (
    <div className="p-6 max-w-md mx-auto mt-5 md:mt-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <BackButton />
      <h2 className="my-4 text-xl font-bold text-black">
        {user.name} ({user.username})
      </h2>
      <p>
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p>
        <span className="font-semibold">Phone:</span> {user.phone}
      </p>
      <p>
        <span className="font-semibold">Website:</span> {user.website}
      </p>

      <div className="mt-4">
        <h3 className="text-lg font-bold text-black">Address</h3>
        <p>
          {user.address.street}, {user.address.suite}, {user.address.city},{" "}
          {user.address.zipcode}
        </p>
        <p>
          <span className="font-semibold">Latitude:</span>{" "}
          {user.address.geo.lat}
        </p>
        <p>
          <span className="font-semibold">Longitude:</span>{" "}
          {user.address.geo.lng}
        </p>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold text-black">Company</h3>
        <p>
          <span className="font-semibold">Name:</span> {user.company.name}
        </p>
        <p>
          <span className="font-semibold">Catch Phrase:</span>{" "}
          {user.company.catchPhrase}
        </p>
        <p>
          <span className="font-semibold">BS:</span> {user.company.bs}
        </p>
      </div>
    </div>
  ) : (
    <div className="text-center mt-4">No user data available</div>
  );
}

export default UserDetail;
