import { useContext, useRef } from "react";
import TodoContext from "./TodoContext";
const TodoApp = () => {
    const refDefaultValue=null;
    const inputRef = useRef(refDefaultValue);
    const selectRef = useRef(refDefaultValue);
    const { dispatch } = useContext(TodoContext);
    const reducerValue = useContext(TodoContext);
    return (
        <div>
             <input ref={inputRef} type="text" name="item"/>
                <select ref={selectRef} name="status">
                    <option value="complete">Complete</option>
                    <option value="incomplete">Incomplete</option>
                </select>
                <br/>
            <button className="prime_btn" onClick={() => {
                dispatch({ type: "add", item: inputRef.current.value,status:selectRef.current.value })
            }}>Add hobby</button>
            <button className="del_btn"
                onClick={() => {
                    dispatch({ type: "clearAll" })
                }}>Clear All</button>

            <h1>Todos</h1>
            <table className="item">
                <tr>
                    <th>Item</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                {reducerValue.state.map((val, index) => {
                    if (val == "") {
                        return (<div></div>)
                    }
                    return (
                        <tr>
                            <td>{val.item}</td>
                            <td>{val.status}</td>
                            <td><button
                                onClick={(event) => {
                                    event.preventDefault();
                                    dispatch({ type: "deleteIndex", index })
                                }}>Delete</button></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}
export default TodoApp;