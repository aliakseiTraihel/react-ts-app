import {configureStore} from "@reduxjs/toolkit";
import reducer from "./Reducer.tsx"

const store = configureStore({ reducer: { todos: reducer}})
export default store;