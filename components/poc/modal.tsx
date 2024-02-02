import React, { useEffect, useState } from "react";
import { useStore } from "@/store/orderStore";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const { task, addTask } = useStore((state) => state);

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const [AddButtonState, setAddButtonState] = useState(false);

  useEffect(() => {
    if (useStore.getState().task.length >= 6) {
      setAddButtonState(true);
    } else {
      setAddButtonState(false);
    }

    useStore.subscribe(
      (state) => state.task,
      (task) => {
        if (task.length >= 6) {
          setAddButtonState(true);
        } else {
          setAddButtonState(false);
        }
      }
    );
  }, []);

  const addHandleClick = () => {
    setShowModal(false);
    addTask({ title, description, status: 0 });
  };
  return (
    <>
      <button
        disabled={AddButtonState ? true : false}
        className=" disabled:bg-gray-500 bg-blue-500 m-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add a new task
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">New task</h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="w-full max-w-xs">
                    <form className="bg-white rounded px-8 pt-6 mb-4">
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Title
                        </label>
                        <input
                          onChange={(event) => settitle(event.target.value)}
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="Titulo"
                          type="text"
                          placeholder="Título"
                        />
                      </div>
                      <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Description
                        </label>
                        <textarea
                          onChange={(event) =>
                            setdescription(event.target.value)
                          }
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="Descripcion"
                          placeholder="Descripción"
                        />
                      </div>
                    </form>
                    <p className="text-center">
                      When you click on the button you will use a function that
                      will save the state in the store, use both a{" "}
                      <a
                        className="font-semibold text-gray-900 hover:text-indigo-600"
                        href="/doc/set"
                      >
                        SET
                      </a>{" "}
                      and a{" "}
                      <a
                        className="font-semibold text-gray-900 hover:text-indigo-600"
                        href="/doc/get"
                      >
                        GET
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => addHandleClick()}
                  >
                    Add
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
