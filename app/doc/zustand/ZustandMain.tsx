export default function ZustandMain() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Status control
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What is zustand?
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Zustand is a library for managing states in React, offering a
                simple and compact API
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-25 p-12 pt-32 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/bear.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                It is a state management library for React. Simplify the
                Handling state in React apps by providing an API simple and
                compact to create and manage states. Unlike Unlike other
                solutions, such as Redux, Zustand uses a more minimalist and
                easily integrates with the React ecosystem. This makes it easy
                to create and update states in React applications efficiently
                and concisely.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Basic Consets
              </h2>
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
                      CREATE
                    </a>{" "}
                    In Zustand, the CREATE method is used to create a store,
                    which is the basis of the entire library.
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
                      SET
                    </a>
                    {"  "}
                    It is a function provided by the library that is used to
                    update the store status. The set function takes a argument,
                    which is a function that specifies how to update the current
                    state. This function receives the state current as a
                    parameter and returns the new state.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <div
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <a href="get" className="font-semibold text-gray-900">
                      GET
                    </a>{" "}
                    The get() method in Zustand is used to get the value current
                    of a state property stored in the store. When you call
                    get(), it returns the current value of the property without
                    making any modifications to it.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <div
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <a href="persist" className="font-semibold text-gray-900">
                      PERSIST
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
                    <a href="subscribe" className="font-semibold text-gray-900">
                      SUBSCRIBE
                    </a>{" "}
                    The subscribe function allows subscription to changes in the
                    state. You can use it to execute code when the state change.
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
