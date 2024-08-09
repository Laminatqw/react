import React from 'react';
import {useForm} from "react-hook-form";

import {userService} from "../services/api.services";
import {UserModel} from "../Models/UserModel";


const RegisterFormComponent = () => {
    let{
        handleSubmit,
        register
    } = useForm<UserModel>()
    let reg = (data:UserModel) =>{
        userService.saveUser(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(reg)}>
                <input type='text' {...register('username')} />
                <input type='text' {...register('password')} />
                <button>sign up</button>
            </form>
        </div>
    );
};

export default RegisterFormComponent;