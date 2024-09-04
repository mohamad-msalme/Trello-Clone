import React from "react";

const HomePage = async () => {
  const response = await fetch("http://localhost:3000/api/user", {
    method: "GET",
  });

  if (!response.ok) {
    console.log("error");
  }
  const data = await response.json();
  console.log({ data });

  return (
    <div className=" container border p-4 rounded-md mt-2 h-64 shadow-sm">
      Home page
    </div>
  );
};

export default HomePage;
