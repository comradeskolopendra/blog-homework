"use client";

import {Input, Textarea, Button} from "@/components";
import styles from "./form.module.css";

import { useForm } from "react-hook-form";

interface IPostCommentForm {
    name: string;
    description: string;
}

export const Form = () => {
    const {
        handleSubmit,
        reset,
        register,
        formState: {errors}
    } = useForm<IPostCommentForm>();

    const handleSubmitForm = (form: IPostCommentForm) => {
        console.log(form);
        reset();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(handleSubmitForm)}>
            <Input
                {...register("name", {required: { value: true, message: "Обязательное поле" }})}
                error={errors.name}
                placeholder={"Имя"}
                className={styles.input}
            />
            <Textarea
                {...register("description", {required: { value: true, message: "Обязательное поле" }})}
                error={errors.description}
                placeholder={"Описание"}
                className={styles.textarea}
            />

            <Button className={styles.button}>Отправить</Button>
        </form>
    )
};