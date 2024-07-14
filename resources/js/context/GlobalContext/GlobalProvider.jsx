import { useState } from "react";
import Context from "./GlobalContext";

function GlobalProvider({children}) {
  const [ToggleCreateTask, setToggleCreateTask] = useState(false);
  const [checkedTasks, setCheckedTasks] = useState(new Set([]))
  const value = {
    ToggleCreateTask, setToggleCreateTask, checkedTasks, setCheckedTasks
  }
  return (
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
  )
}

export default GlobalProvider