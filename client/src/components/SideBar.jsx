import React from "react";
import { links } from "./../constants";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="flex flex-col h-screen justify-between items-center md:px-3 py-3 max-md:gap-20 max-md:justify-normal">
      <img
        src="r_logo.jpg"
        alt="logo"
        className="max-w-[80px] md:max-w-[120px]"
      />
      <nav className="flex flex-col gap-14 ">
        {links.map((i) => (
          <NavLink
            to={i.path}
            className="flex gap-4 items-center text-lg text-gray-400"
          >
            <span className="max-md:text-2xl">{i.icon}</span>
            <span className="max-md:hidden">{i.title}</span>
          </NavLink>
        ))}
      </nav>

      <div className="flex flex-col gap-2 max-md:hidden">
        <p className="font-semibold">Günlük Haberleri al</p>
        <button className="bg-red-500 p-2 rounded-lg text-white hover:bg-red-400">
          Abone Ol
        </button>
      </div>
    </aside>
  );
};

export default SideBar;
