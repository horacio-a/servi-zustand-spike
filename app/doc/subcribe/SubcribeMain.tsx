import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SubcribeMain() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                SUBSCRIBE
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Running code with subcribe
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Subscribe is a feature that allows you to subscribe to changes
                in the state of the store.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center -ml-12 -mt-25 p-12 pt-32 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[75%] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 "
            src="/Createcode.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h2 className="mt-4 mb-4 text-2xl font-bold tracking-tight text-gray-900">
                Espera el momento
              </h2>
              <p>
                <b className="font-semibold text-gray-900 ">Subscribe</b> is
                certainly very useful when you want to execute certain actions
                or update components when state changes. You can use subscribe
                to make updates to the interface user, perform additional logic,
                or any other action that is necessary in response to changes in
                the state of the store.
              </p>
              <p className="my-4">
                <b className="font-semibold text-gray-900 ">Subscribe</b> is a
                middleware so it is necessary to wrap our{" "}
                <a
                  href="/doc/create"
                  className="font-semibold text-gray-900 hover:text-indigo-900 "
                >
                  create
                </a>{" "}
                with it, we import it from zustand/middlewares and we will be
                able to use subscriptions from sample store
              </p>
              <pre>
                <SyntaxHighlighter
                  showLineNumbers={true}
                  language="javascript"
                  style={tomorrow}
                >
                  {`import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

interface Types {
  sesion: object | null;
}

export const Store = create<Types>()(
  subscribeWithSelector((set) => ({
    sesion: null,
    //Code that changes the status
  }))
);
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Store.subscribe(
      (state) => state.sesion,
      (sesion) => {
        // Code that changes the status
      }
    );
  }, []);
  return <>{/* code TSX */}</>;
}`}
                  {`(num) => num + 1`}
                </SyntaxHighlighter>
              </pre>
              <h2 className="mt-4 mb-4 text-2xl font-bold tracking-tight text-gray-900">
                Unsubscribe
              </h2>
              <p>
                unsubscribe is a function that is returned when you subscribe to
                the store. You can call this function to stop listening changes
                in state.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
