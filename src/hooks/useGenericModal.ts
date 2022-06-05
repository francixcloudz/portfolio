import { useEffect, useState } from "react";

interface UseGenericModal {
  isOpenModal: boolean;
  openModal: () => void;
  handleClose: () => void;
}

const useGenericModal = (): UseGenericModal => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const close = (event: { keyCode: number }) => {
      if (event.keyCode === 27) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return {
    isOpenModal: isOpen,
    openModal,
    handleClose,
  };
};

export default useGenericModal;
