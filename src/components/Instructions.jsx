import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Instructions = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {/* <div className="flex items-center justify-center"> */}
      <button
        type="button"
        onClick={openModal}
        className="my-6 rounded border border-zinc-700 bg-transparent px-4 py-2 font-semibold text-zinc-700 hover:border-transparent hover:bg-zinc-600 hover:text-white"
      >
        Instructions
      </button>
      {/* </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Instructions
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Grid Height, Grid Width and Grid Square Side Length
                      control the dimensions and structure of a grid similar to
                      the below, with the grid square side length effectively
                      being the length of a non-hypotenuse side of a triangle.
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      Grid ref can then be selected up to the available
                      triangles in the grid. For example, with dimensions set to
                      60 x 60 with grid square side length of 10, there are 6
                      rows available (A-F) and 12 columns of triangles (1-12),
                      so valid ranges of grid references are A1 - F12.
                    </p>
                    <img className="mt-2" src="/example-grid.png" />
                    <p className="mt-2 text-sm text-gray-500">
                      Descriptive error messages will be displayed when
                      something isn't quite right with the inputs, for example
                      if:
                    </p>
                    <ul className="mt-2 list-disc text-sm text-gray-500">
                      <li>
                        The grid square side length does not evenly divide into
                        the supplied grid height or width
                      </li>
                      <li>
                        The grid reference does not fit on the supplied grid
                      </li>
                    </ul>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
export default Instructions;
