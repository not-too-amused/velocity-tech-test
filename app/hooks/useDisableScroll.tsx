import { useEffect } from "react";

// Define the hook
const useDisableScroll = () => {
  useEffect(() => {
    // Disable scrolling by setting overflow to hidden
    document.body.style.overflow = "hidden";

    // Cleanup function to restore scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  });
};

export default useDisableScroll;
