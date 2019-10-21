import ajax from "./ajax";

import {saveObj,getObj,removeObj} from "../cache-tools/store";




const USERKEY = 'user';

export const checkLogin = (account,password)=>{
    return ajax('/api/users/login',{
        account,
        password
    },'post')
};

export const saveUser =(obj)=>{
    // localStorage.setItem('user',JSON.stringify(obj))
    saveObj(USERKEY,obj)
};

export const logOut =()=>{
    removeObj(USERKEY);
};

export const isLogin = ()=>{
    // let user = JSON.parse(localStorage.getItem('user') || '{}');
    let user = getObj(USERKEY);
   /* if(user.id){
        return true
    }else {
        return false;
    }*/
    return !!user.id;

};




