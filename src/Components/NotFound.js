import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="mx-14 flex justify-center place-items-center h-screen">
        <div className="text-center space-y-4">
        <h1 className="text-5xl text-red-500">404</h1>
        <p className="text-md font-medium">This page was not found</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
