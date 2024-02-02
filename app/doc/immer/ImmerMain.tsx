import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ImmerMain() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Immer
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Managed mutability
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Immer is a library used as middleware in Zustand to manage the
                immutability of the state.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center -ml-12 -mt-25 p-12 pt-32 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[90%] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 "
            src="/immer.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h2 className="mt-4 mb-4 text-2xl font-bold tracking-tight text-gray-900">
                Even easier
              </h2>
              <p>
                This middleware simplifies state updates by allow your code to
                behave as if it were mutating the state directly, although in
                reality it is creating a new immutable state.
              </p>
              <p className="mt-4">
                {" "}
                Immer is transparently responsible for the creation of this new
                immutable state based on the modifications that you perform.
              </p>
              <p className="mt-4">
                {" "}
                With Immer, you can write status update code for more intuitive
                and similar way to mutation, without having to worry about
                managing form state immutability manual.
              </p>
              <p className="my-4">
                This makes it easier to maintain cleaner code and legible, while
                Immer is responsible for ensuring that the Status updates are
                safe and predictable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
