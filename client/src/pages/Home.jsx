import React from "react";
import { CiSearch } from "react-icons/ci";

const Home = () => {
  return (
    <main className="overflow-y-auto">
      <section className="bg-white flex gap-3 p-2 rounded-lg overflow-hidden items-center shadow-lg">
        <CiSearch className="text-xl" />
        <input type="text" className="w-full outline-none text-zinc-700 " />
      </section>
      <section className=""></section>
    </main>
  );
};

export default Home;
