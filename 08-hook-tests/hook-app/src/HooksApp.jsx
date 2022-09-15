import { Fragment } from "react"
import { CounterApp } from "./01-useState/CounterApp"
import { CounterAppWithCustomHook } from "./01-useState/CounterAppWithCustomHook"
import { SimpleForm } from "./02-useEffect/SimpleForm"
import { SimpleFormWithCustomHook } from "./02-useEffect/SimpleFormWithCustomHook"
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks"
import { FocusScreen } from "./04-useRef/FocusScreen"
import { Layout } from "./05-useLayoutEffect/Layout"
import { CallbackHook } from "./06-memos/CallbackHook"
import { MemoHook } from "./06-memos/MemoHook"
import { Memorize } from "./06-memos/Memorize"
import { Padre } from "./07-tarea-memo/Padre"
import { TodoApp } from "./08-use-reducer/TodoApp"
import { MainApp } from "./09-use-context/MainApp"

export const HooksApp = () => {
    return (
        <Fragment>
            <h2>Hooks App</h2>
            {/* <CounterApp value={0}/> */}
            {/* <CounterAppWithCustomHook value={0}/> */}
            {/* <SimpleForm/> */}
            {/* <SimpleFormWithCustomHook/> */}
            {/* <MultipleCustomHooks/> */}
            {/* <FocusScreen/> */}
            {/* <Layout/> */}
            {/* <Memorize/> */}
            {/* <MemoHook/> */}
            {/* <CallbackHook/> */}
            {/* <Padre/> */}
            {/* <TodoApp/> */}
            <MainApp/>
        </Fragment>
    )
}