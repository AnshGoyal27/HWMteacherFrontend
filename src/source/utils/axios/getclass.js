import axios from "axios";
import { ActionCreator } from "../redux/action";
import { store } from "../redux/store";

export function getClass(token){

    axios({
        method:'post',
        url:'https://hw-mteacher-backend-5oth7ar2h-anshgoyal27.vercel.app/getclass',
        headers:{
            authorization : token
        }
    })
    .then((data)=>{
        console.log(data)
        const action=ActionCreator('class',data.data.message);
        store.dispatch(action);
    })
    .catch((err)=>{
        console.log(err)
        const action = ActionCreator('logout');
        store.dispatch(action);
    })
}
