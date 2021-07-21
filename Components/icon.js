import React from "react";
import { FaTimes,FaRegCircle, FaPen } from "react-icons/fa";

const Icon = ({choice})=>{
    switch(choice){
        case "cross":
            return<FaTimes id="I1" className="icon1" />;
        case "circle":
            return<FaRegCircle id="I2" className="icon2" />;
        default:
            return "";
    }
}

export default Icon
