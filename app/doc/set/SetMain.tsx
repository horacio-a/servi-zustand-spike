import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SetMain() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                SET
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How does the set work?
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                The set function takes one argument, which is a function that
                specifies how the current state should be updated
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center -ml-12 -mt-25 p-12 pt-32 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[75%] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 "
            src="/setcode.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h2 className="mt-4 mb-4 text-2xl font-bold tracking-tight text-gray-900">
                Let&apos;s use it
              </h2>
              <p>
                After creating the store with the{" "}
                <a
                  className="font-semibold text-gray-900 hover:text-indigo-600"
                  href="/doc/create"
                >
                  {" "}
                  CREATE
                </a>{" "}
                function and defining a variable as seen in the example, we can
                create a function, and if we use the{" "}
                <b className="font-semibold text-gray-900 ">SET</b> property
                mentioned above we will be able to update the state of our
                variable
              </p>
              <pre>
                <SyntaxHighlighter
                  showLineNumbers={true}
                  language="javascript"
                  wrapLongLines={true}
                  style={tomorrow}
                >
                  {`import { create } from 'zustand'

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => 
  ({ count: state.count + 1 })),
}));`}
                  {`(num) => num + 1`}
                </SyntaxHighlighter>
              </pre>
              <h2 className="mt-4 mb-4 text-2xl font-bold tracking-tight text-gray-900">
                Immutability
              </h2>
              <p>
                The function you pass to{" "}
                <b className="font-semibold text-gray-900 ">SET</b> must follow
                the principle of immutability. Instead of directly modifying the
                existing state, you must create and return a new state object.
                This helps avoid problems related to unexpected mutations and
                makes it easier to track changes in the application.
              </p>

              <h2 className="mt-4 mb-4 text-2xl font-bold tracking-tight text-gray-900">
                Asynchrony and SET
              </h2>
              <p>
                <b className="font-semibold text-gray-900 ">SET</b> can also
                handle asynchronous operations.
                <b className="font-semibold text-gray-900 "> SET</b> in
                situations where you need to perform state updates based on
                asynchronous operations, such as API calls.
              </p>
              <pre>
                <SyntaxHighlighter
                  showLineNumbers={true}
                  language="javascript"
                  wrapLongLines={true}
                  style={tomorrow}
                >
                  {`const useStore = create((set) => ({
  data: null,
  fetchData: async () => {
    const result = await fetchDataFromAPI(); 
    set((state) => ({ data: result }));
  },
}));`}
                </SyntaxHighlighter>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
