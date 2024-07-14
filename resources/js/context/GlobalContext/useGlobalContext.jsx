import Context from "./GlobalContext";
import { useContext } from "react";

export const useGlobalContext = () => {
    return useContext(Context)
}