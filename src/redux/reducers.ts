export default function userinfo(preState=[],action: { type: any; data: any; }){
    const {type,data}=action;
    if(type==="add"){
        return [data,...preState]
    }
    return preState
}

 