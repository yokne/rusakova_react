import s from "./reviewForm.module.css";
import { CounterContainer as Counter } from "../counter/CounterContainer";
import { useForm } from "./useForm";

// eslint-disable-next-line react/prop-types
export const ReviewForm = () => {
    const { form, clearForm, onChangeName, onChangeComment, onChangeRating } = useForm();

    const handleSubmit = () => {
        clearForm();
    };

    return (
        <div className={s.wrapper}>
            <form
                className={s.form}
                onSubmit={(e) => e.preventDefault()}>
                <div className={s.content}>
                    <h3> Add review </h3>
                    <input value={form.name} onChange={onChangeName} placeholder="name"></input>
                    <textarea
                        value={form.comment}
                        onChange={onChangeComment}
                        placeholder="review"
                    />
                    <Counter value={form.rating} onChange={onChangeRating} />
                </div>

                <button onClick={handleSubmit} className={s.button}> Отправить </button>
            </form>
        </div>
    );
};
