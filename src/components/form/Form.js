import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import"./form.css"

export default function Form(){
    const{register,handleSubmit,formState:{errors},}=useForm();
    const onSubmit=(data)=>{
        alert(data);
    }

    return(
        <></>
    )
}