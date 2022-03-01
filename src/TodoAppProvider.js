import { useReducer } from "react";
import TodoApp from "./TodoApp";
import TodoContext from "./TodoContext";
import TodoReducer from "./TodoReducer";

const TodoAppProvider = () => {
    const initialValue = [];
    const [state,dispatch] = useReducer(TodoReducer,initialValue);
    const reducerValue = {state,dispatch};
    return (
        <TodoContext.Provider value={reducerValue}>
            <TodoApp/>
        </TodoContext.Provider>
    )

}
export default TodoAppProvider;