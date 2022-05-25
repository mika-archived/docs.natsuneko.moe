import React, { createContext } from "react";
import { Dialog, Transition } from "@headlessui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const DrawerContext = createContext(undefined);

const Drawer: React.FC<Props> = ({ isOpen, onClose, children }) => {
  return (
    <Transition show={isOpen}>
      <Dialog
        className="fixed bottom-0 left-0 right-0 z-20 overflow-hidden top-16"
        onClose={onClose}
      >
        <Dialog.Panel>
          <Transition.Child
            className="absolute inset-0 z-20 flex"
            enter="transition ease duration-250 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease duration-250 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            {children}
          </Transition.Child>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
};

export default Drawer;
export { DrawerContext };
