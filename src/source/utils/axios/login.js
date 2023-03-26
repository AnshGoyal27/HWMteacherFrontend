import axios from "axios";
import { ActionCreator } from "../redux/action";
import { store } from "../redux/store";

export function LoginCall(userName,ID){
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
                "Content-Type": "application/json;charset=UTF-8"
            },
        url:'https://hw-mteacher-backend.vercel.app/login',
        data:{
            userName:userName,
            password:ID,
            type:'teacher'
        }
    })
    .then((data)=>{
        console.log(data.data.message);
        const action=ActionCreator('login',data.data.message);
        store.dispatch(action);
    })
    .catch((err)=>{
        console.log(err);
    })
}
