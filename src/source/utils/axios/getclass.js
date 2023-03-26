import axios from "axios";
import { ActionCreator } from "../redux/action";
import { store } from "../redux/store";

export function getClass(token){

    axios({
        method:'post',
        mode: 'cors',
        credentials : 'include',
        headers: {
                "Access-Control-Allow-Origin": "https://hwmdeploy.netlify.app",
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Methods": 'HEAD, GET, POST, PUT, DELETE, OPTIONS',
                "Access-Control-Allow-Headers" : 'Origin,Content-Type,Authorization',
                'Accept': "application/json",
                "Content-Type": "application/json;charset=UTF-8",
                authorization : token
            },
        url:'https://hw-mteacher-backend.vercel.app/getclass',
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
