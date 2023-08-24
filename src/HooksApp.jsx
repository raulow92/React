import { CounterApp } from "./01-useState/CounterApp";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { MultipleCustomHooks } from "./03-Examples/MultipleCustomHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";
import { Memorize } from "./06-memos/Memorize";
import { MemoHook } from "./06-memos/MemoHook";
import { CallbackHook } from "./06-memos/CallbackHook";
import { Padre } from "./07-tarea-memo/Padre";
// import './08-useReducer/intro-reducer';
import { TodoApp } from "./08-useReducer/TodoApp";

export const HooksApp = () => {
    return (
        <>
            <h1>HooksApp</h1>
            <TodoApp />
        </>
    );
};
