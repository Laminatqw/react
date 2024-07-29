import Joi from "joi";

const formPostValid = Joi.object({
    title: Joi.string().min(3).max(30).required(),
    body: Joi.string().min(5).max(100).required(),
    userId: Joi.number().required(),
});

export {formPostValid}