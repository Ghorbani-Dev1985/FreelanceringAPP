import React from "react";
import { HiOutlineX } from "react-icons/hi";

const Modal = ({ open, OnCloseHandler, title, children }) => {
  return (
    open && (
      //Backdrop
      <div onClick={OnCloseHandler} className="w-full h-screen bg-secondary-800 bg-opacity-30 z-40 backdrop-blur-sm fixed top-0 left-0">
        {/* Main Modal */}
        <div className="w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary-0 rounded-lg shadow-lg transition-all duration-500 ease-in-out">
          {/* Header */}
          <div class="flex-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="flex-center line-clamp-1 flex-1 text-xl font-MorabbaBold text-secondary-700 dark:text-white">
              {title}
            </h3>
            <button
              onClick={OnCloseHandler}
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm size-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white transition-colors"
            >
              <HiOutlineX className="size-6 text-rose-500" />
            </button>
          </div>
          {/* Body */}
          <div class="p-4 md:p-5 space-y-4 text-secondary-700">{children}</div>
        </div>
      </div>
    )
  );
};

export default Modal;
