import { useCallback } from "react";
import openEmailClient from "@/utils/openEmailClient";

const useHandleEmailClick = () => {
  return useCallback(() => {
    openEmailClient(
      "kohari.dev@gmail.com",
      "Contact Us",
      "Please enter your message here",
    );
  }, []);
};

export default useHandleEmailClick;
