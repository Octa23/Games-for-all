import { useEffect, useRef, useState } from "react";

const useModal = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (
        show &&
        refContainer.current &&
        !refContainer.current.contains(e.target)
      ) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [show]);

  return { refContainer, show, setShow };
};

export default useModal;
