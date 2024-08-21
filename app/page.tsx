import React from "react";
import { revalidateTag } from "next/cache";

const HomePage = async () => {
  return (
    <div className=" container border p-4 rounded-md mt-2 h-64 shadow-sm">
      Home page
    </div>
  );
};

export default HomePage;
