import React from "react";

interface SingleCardTypes {
  CardDescription: string;
  CardTitle: string;
  Redirect: string;
}

const Card = () => {
  return (
    <>
      <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SingleCard
              CardTitle="Simple documentation"
              CardDescription="Basic concepts to understand how zustand works."
              Redirect={"/doc"}
            />
            <SingleCard
              CardTitle="POC"
              CardDescription="Practical and explained examples of zustand concepts (set, get, middlewares, etc.)"
              Redirect={"/POC"}
            />
            <SingleCard
              CardTitle="Official documentation"
              CardDescription="The documentation from the zustand developers is more complete than the simple one but longer."
              Redirect={
                "https://docs.pmnd.rs/zustand/getting-started/introduction"
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;

const SingleCard = ({
  CardDescription,
  CardTitle,
  Redirect,
}: SingleCardTypes) => {
  return (
    <>
      <a
        href={Redirect}
        className="mb-10 overflow-hidden rounded-lg bg-black shadow-1 duration-150 hover:bg-indigo-900	 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3 cursor-pointer content-center"
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
