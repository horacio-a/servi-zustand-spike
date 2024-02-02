import React from "react";

interface SingleCardTypes {
  CardDescription: string;
  CardTitle: string;
  Redirect: string;
}

const Menu = () => {
  return (
    <>
      <section className="flex justify-center items-center bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] min-w-full	">
        <div className="container">
          <div className="grid grid-rows-3 gap-10 grid-cols-3 ">
            <SingleCard
              CardTitle="What is zustand?"
              CardDescription=""
              Redirect={"/doc/zustand"}
            />
            <SingleCard
              CardTitle="CREATE"
              CardDescription=""
              Redirect={"/doc/create"}
            />
            <SingleCard
              CardTitle="SET"
              CardDescription=""
              Redirect={"/doc/set"}
            />
            <SingleCard
              CardTitle="GET"
              CardDescription=""
              Redirect={"/doc/get"}
            />
            <SingleCard
              CardTitle="PERSIST"
              CardDescription=""
              Redirect={"/doc/persist"}
            />
            <SingleCard
              CardTitle="SUBSCRIBE"
              CardDescription=""
              Redirect={"/doc/subscribe"}
            />

            <SingleCard
              CardTitle="DEVTOOLS"
              CardDescription=""
              Redirect={"/doc/devtools"}
            />
            <SingleCard
              CardTitle="IMMER"
              CardDescription=""
              Redirect={"/doc/immer"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;

const SingleCard = ({
  CardDescription,
  CardTitle,
  Redirect,
}: SingleCardTypes) => {
  return (
    <>
      <a
        href={Redirect}
        className=" overflow-hidden rounded-lg bg-black shadow-1 duration-150 hover:bg-indigo-900	 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3 cursor-pointer content-center"
      >
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3 className="mb-5 block text-xl font-semibold text-white hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
            {CardTitle}
          </h3>
          <p className="mb-5 text-base leading-relaxed text-white dark:text-dark-6">
            {CardDescription}
          </p>
        </div>
      </a>
    </>
  );
};
