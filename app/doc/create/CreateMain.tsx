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
                CREATE
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What is CREATE and how does it work?
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                The create method in Zustand is used to create a store, which is
                a state container for React applications{" "}
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
                The beginning of zustand
              </h2>
              <p>
                This method is essential for the initial configuration of your
                store, defining both the initial state and the actions that can
                update that state.
              </p>
              <pre>
                <SyntaxHighlighter
                  showLineNumbers={true}
                  language="javascript"
                  wrapLongLines={true}
                  style={tomorrow}
                >
                  {`import { create } from 'zustand'

interface Types {
  // los types
} 
const Store = create<Types>((set) => ({
  // Aqui vamos a agrega el codigo necesario
}));`}
                  {`(num) => num + 1`}
                </SyntaxHighlighter>
              </pre>
              <h2 className="mt-4 mb-4 text-2xl font-bold tracking-tight text-gray-900">
                Middlewares
              </h2>
              <p>
                In Zustand, middlewares are functions that can be used to
                intercept and modify actions before they affect to the state of
                the store. This provides a way to extend or customize the
                behavior of actions in the store. The middlewares can be added
                during store creation using the create method. There is a
                variety of them...
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <div
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <a
                      href="/doc/create"
                      className="font-semibold text-gray-900 hover:text-indigo-600"
                    >
                      Devtools
                    </a>{" "}
                    The devtools middleware provides integration with the
                    browser development tools.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <div
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <a
                      href="/doc/set"
                      className="font-semibold text-gray-900  hover:text-indigo-600"
                    >
                      Logger
                    </a>
                    {"  "}
                    createLogger middleware creates a logging middleware which
                    prints information about the actions and changes of status
                    in the console. This is useful to understand how and when
                    the status is updated.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <div
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <a
                      href="get"
                      className="font-semibold text-gray-900 hover:text-indigo-600"
                    >
                      Persist
                    </a>{" "}
                    The persist method in Zustand is used to manage the
                    persistent storage of state in an application. Allows you to
                    save the application state to a storage (such as
                    localStorage, AsyncStorage, IndexedDB, etc.) so that the
                    data persists even after the application is closed or
                    reloaded.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <div
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <a
                      href="persist"
                      className="font-semibold text-gray-900 hover:text-indigo-600"
                    >
                      Immer
                    </a>{" "}
                    immer middleware on Zustand makes upgrading easy of the
                    state in a more convenient and expressive way. immer It is a
                    library that allows you to update objects immutably using a
                    more syntax simple and familiar.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
