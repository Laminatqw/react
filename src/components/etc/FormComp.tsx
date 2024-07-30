import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import axios from 'axios';
import {formPostValid} from "../../validator/formPostValid";

interface IFormType {
    title: string;
    body: string;
    userId: number;
}



const FormComp: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormType>({
        resolver: joiResolver(formPostValid)
    });

    const onSubmit = async (data: IFormType) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data, {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Title</label>
                <input {...register('title')} />
                {errors.title && <div>{errors.title.message}</div>}
            </div>
            <div>
                <label>Body</label>
                <input {...register('body')} />
                {errors.body && <div>{errors.body.message}</div>}
            </div>
            <div>
                <label>User ID</label>
                <input type="number" {...register('userId')} />
                {errors.userId && <div>{errors.userId.message}</div>}
            </div>
            <button type="submit">Create Post</button>
        </form>
    );
};

export default FormComp;
