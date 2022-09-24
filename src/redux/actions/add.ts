import { ADD } from "../constans";

export const  add_action = (data:number) => ({type:ADD,data:data*1});