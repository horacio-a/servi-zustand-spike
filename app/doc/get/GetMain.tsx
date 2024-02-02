import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function GetMain() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                GET
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                GET Utilities
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                The method <b className="font-semibold text-gray-900 ">GET</b>{" "}
                it is used to obtain the state without modifying it.
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
                GET()
              </h2>
              <p>
                It is useful to access our state without having to modify it,
                but it is even more useful to make copies of our state and be
                able to make more specific modifications, such as filtering or
                exact deletions.
              </p>
              <pre>
                <SyntaxHighlighter
                  showLineNumbers={true}
                  language="javascript"
                  wrapLongLines={true}
                  style={tomorrow}
                >
                  {`import { create } from 'zustand'

interface orderType {
  name: Array<string>
} 

export const orderStore = create<orderType>()(
  (set, get) => ({
    name: ['pedro', 'juan', 'mateo'], 

    deleteName: (DeletedName: string) => {
      const {name} = get()

      const newNames = structuredClone(name)
      .filter((name) => name != DeletedName)

      set({name:newNames}, false, 'deleteName')}
  }),
)`}
                  {`(num) => num + 1`}
                </SyntaxHighlighter>
              </pre>
              <h2 className="mt-4 mb-4 text-2xl font-bold tracking-tight text-gray-900">
                .getState()
              </h2>
              <p>
                Although we normally call the state value inside the store, we
                can also call it from outside or from another store if we
                require it.
              </p>
              <pre>
                <SyntaxHighlighter
                  showLineNumbers={true}
                  language="javascript"
                  wrapLongLines={true}
                  style={tomorrow}
                >
                  {`import { Store } from './Store.ts'

const storeState = Store.getState();

console.log(storeState) 
// the states of all the variables declared in your store `}
                </SyntaxHighlighter>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
