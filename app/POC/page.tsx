"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import { useStore } from "@/store/orderStore";
import Modal from "@/components/poc/modal";
import { useEffect, useState } from "react";

export default function Home() {
  const [subscribeText, setsubscribeText] = useState(false);

  const { task, deleteTask, changeState } = useStore((state) => state);

  const addHandleClick = (deletedId: number) => {
    deleteTask(deletedId);
  };

  const chageStateHandleClick = (Id: number, status: number) => {
    changeState(Id, status);
  };

  useEffect(() => {
    if (useStore.getState().task.length >= 6) {
      setsubscribeText(true);
    } else {
      setsubscribeText(false);
    }

    useStore.subscribe(
      (state) => state.task,
      (task) => {
        if (task.length >= 6) {
          setsubscribeText(true);
        } else {
          setsubscribeText(false);
        }
      }
    );
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar></Navbar>
        {task[0] ? (
          <div className="grid grid-cols-3 grid-rows-2 gap-4">
            {task.map((task) => {
              return (
                <div key={task.id} className=" bg-black  block rounded-lg p-6 ">
                  <div className="flex justify-end">
                    <div
                      className="text-white text-xl text-right cursor-pointer w-fit	"
                      onClick={() => {
                        addHandleClick(task.id);
                      }}
                    >
                      &times;{" "}
                    </div>
                  </div>
                  <h5 className="mb-2 text-xl text-center	 font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {task.title}
                  </h5>
                  <p className="mb-4 text-base text-center text-neutral-600 dark:text-neutral-200">
                    {task.description}
                  </p>
                  <div
                    className="inline-flex rounded-md shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    role="group"
                  >
                    <button
                      onClick={() => {
                        chageStateHandleClick(task.id, 0);
                      }}
                      type="button"
                      className={` ${
                        task.status == 0 ? "bg-indigo-600" : ""
                      } inline-block rounded-l  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-indigo-900 `}
                    >
                      Not Started
                    </button>
                    <button
                      onClick={() => {
                        chageStateHandleClick(task.id, 1);
                      }}
                      type="button"
                      className={` ${
                        task.status == 1 ? "bg-indigo-600" : ""
                      } inline-block  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-indigo-900 `}
                    >
                      In progress
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        chageStateHandleClick(task.id, 2);
                      }}
                      className={` ${
                        task.status == 2 ? "bg-indigo-600" : ""
                      } inline-block rounded-r px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-indigo-900 `}
                    >
                      Finished
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h3>add a new task</h3>
        )}
        <div className="flex flex-col	">
          <Modal />
          <p>
            {subscribeText ? (
              <div className="text-center">
                The button is deactivated with a
                <a
                  className="font-semibold text-gray-900 hover:text-indigo-600"
                  href="/doc/subscribe"
                >
                  {" "}
                  subscribe
                </a>
              </div>
            ) : (
              ""
            )}
          </p>

          <p>
            To closely follow the statuses you can use the{" "}
            <a
              className="font-semibold text-gray-900 hover:text-indigo-600"
              href="/doc/devtools"
            >
              {" "}
              Redux devtools
            </a>
          </p>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}
