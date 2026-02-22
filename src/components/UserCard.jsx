import React from "react";

const UserCard = ({ user }) => {
  if (!user) return null;

  const { firstName, lastName, age, gender, photoUrl, about } = user;

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="relative w-80 h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-base-100">

        {/* Image Section */}
        <img
          src={photoUrl}
          alt="profile"
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

        {/* Info Section */}
        <div className="absolute bottom-0 p-5 text-white w-full">
          <h2 className="text-2xl font-bold">
            {firstName} {lastName}
            {age && <span className="ml-2 font-normal">{age}</span>}
          </h2>

          {gender && (
            <p className="text-sm opacity-80">{gender}</p>
          )}

          <p className="text-sm mt-2 line-clamp-3">{about}</p>

          {/* Buttons */}
          <div className="flex justify-center gap-6 mt-5">
            <button className="w-20 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white text-xl shadow-lg">
              Ignore
            </button>

            <button className="w-28 h-10 rounded-full bg-green-500 hover:bg-green-600 text-white text-xl shadow-lg">
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;