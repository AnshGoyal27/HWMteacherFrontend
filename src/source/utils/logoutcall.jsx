import { ActionCreator } from "./redux/action";
import { store } from "./redux/store";

export default function logoutcall() {
    console.log("hi")
    const action=ActionCreator('logout');
        store.dispatch(action);
}
