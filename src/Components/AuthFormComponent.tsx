import React from 'react';
import {useForm} from "react-hook-form";
import {TokenObtainPairModel} from "../Models/TokenObtainPairModel";
import {UserModel} from "../Models/UserModel";
import {authService} from "../services/api.services";

const AuthFormComponent = () => {
    let{
        handleSubmit,
        register
        } = useForm<UserModel>({
        defaultValues:{
            username: 'Victor123',
            password: 'QWer1@23'
        }
    })
    let aunthenticate = (data:UserModel) =>{
        authService.authenticate(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(aunthenticate)}>
                <input type='text' {...register('username')} />
                <input type='text' {...register('password')} />
                <button>Sign in</button>
            </form>
        </div>
    );
};

export default AuthFormComponent;