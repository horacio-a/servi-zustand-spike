import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CreateMain() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                PERSIST
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Don&apos;t lose our states
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                The Zustand{" "}
                <b className="font-semibold text-gray-900 ">persist</b>{" "}
                middleware is used to persist the store state to the
                browser&apos;s local or session storage.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center -ml-12 -mt-25 p-12 pt-32 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[75%] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 "
            src="/persist.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h2 className="mt-4 mb-4 text-2xl font-bold tracking-tight text-gray-900">
                Let&apos;s save the data
              </h2>
              <p>
                Persist the state means that the state can be preserved even
                after reloading the page or closing and opening the browser
                again. It is especially useful for maintaining data persistence
                between sessions or to implement remember session
                functionalities, we just have to wrap our functions with the
                middleware already importing
              </p>
              <pre>
                <SyntaxHighlighter
                  showLineNumbers={true}
                  language="javascript"
                  wrapLongLines={true}
                  style={tomorrow}
                >
                  {`import { create } from 'zustand'
import { persist } from "zustand/middleware";

interface Types {
  // Types
} 
export const Store = create<Types>()(
    persist(
      () => ({
        name: 0,
        // the catch that makes the state change
      }),    
  )
);`}
                </SyntaxHighlighter>
              </pre>
              <h2 className="mt-4 mb-4 text-2xl font-bold tracking-tight text-gray-900">
                Configuration
              </h2>
              <p>
                For the middleware to work we need to configure it with a name
                and we can also specify the storege that we want to use either
                localStorage, sessionStorege or whatever of our preference, if
                we do not send any parameters of storage will be used
                localStorage by default
              </p>
              <pre>
                <SyntaxHighlighter
                  showLineNumbers={true}
                  language="javascript"
                  wrapLongLines={true}
                  style={tomorrow}
                >
                  {`import { create } from 'zustand'
import { persist } from "zustand/middleware";

interface Types {
  // los types
} 
export const Store = create<Types>()(
    persist(
      ()=>{/*Your code  */},
      {
        /* Configurations */
        name: 'Sesion',  
        getStorage: () => sessionStorage
        
      }
    )
);`}
                </SyntaxHighlighter>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
