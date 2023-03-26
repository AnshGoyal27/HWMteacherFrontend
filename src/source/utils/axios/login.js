import axios from "axios";
import { ActionCreator } from "../redux/action";
import { store } from "../redux/store";

export function LoginCall(userName,ID){
    axios({
        method:'post',
        mode: 'cors',
        url:'https://hw-mteacher-backend-5oth7ar2h-anshgoyal27.vercel.app/login',
        headers:{
            'Access-Control-Allow-Origin':"*",
            'Access-Control-Allow-Methods': "OPTIONS, POST, GET",
            'Access-Control-Allow-Credentials': "true",
            'Access-Control-Allow-Headers': "Content-Type"
        },
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
