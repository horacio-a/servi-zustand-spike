import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function DevtoolsMain() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Devtools
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Testing with Redux DevTools
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Zustand devtools are a useful feature for facilitate debugging
                and status tracking in your React app.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center -ml-12 -mt-25 p-12 pt-32 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[75%] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 "
            src="/devtoolsmain.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h2 className="mt-4 mb-4 text-2xl font-bold tracking-tight text-gray-900">
                Follow our statuses
              </h2>
              <p>
                By integrating devtools into Zustand, you can perform various
                actions to understand and analyze the flow of data in your
                application, you can use the{" "}
                <a
                  href="https://chromewebstore.google.com/detail/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es"
                  className="font-semibold text-gray-900 hover:text-indigo-600"
                >
                  devtools the redux
                </a>{" "}
                which it is very likely that they already used before.
              </p>
              <img className="my-4 rounded-xl" src="/devtools.png" alt="" />
              <h2 className="mt-4 mb-4 text-2xl font-bold tracking-tight text-gray-900">
                Name the functions
              </h2>
              <p>
                It is very useful to name the functions when debugging power.
                better differentiate and navigate between states.
              </p>
              <pre>
                <SyntaxHighlighter
                  showLineNumbers={true}
                  language="javascript"
                  style={tomorrow}
                >
                  {`import { create } from 'zustand'

export const Store = create<Types>(set)(
  devtools(
    (set) => ({
      num:0,
      inc: () => set((state) => (
        { num: state.num + 1 }),false,'increment'),
      }),
));`}
                </SyntaxHighlighter>
              </pre>
              <p>
                This is the example code, after defining our function we have to
                pass a false and then the name in quotes and our devtools will
                recognize the name
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
