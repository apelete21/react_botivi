import React from "react";
import Logo from "@/utils/icons/logo";
import data from "./data";
import Link from "next/link";

function Navbar() {
  return (
    <div
      className={
        "flex flex-row justify-between align-middle fixed w-screen bg-white dark:bg-gray-950"
      }
    >
      <div>
        <Link href={data.Home.link} className={`flex py-2 px-4`}>
          {<Logo color="gray" />}{" "}
        </Link>
      </div>
      <div className={"flex flex-row align-middle"}>
        <Link
          href={data.Login.link}
          className={`py-2 px-10 bg-blue-500 text-white text-center hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600`}
        >
          {data.Login.name}
        </Link>
        <Link
          href={data.Signup.link}
          className={`py-2 px-10 bg-blue-500 text-white text-center hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600`}
        >
          {data.Signup.name}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
