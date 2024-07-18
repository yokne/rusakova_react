import { useReducer } from "react";

const INITIAL_FORM = {
    rating: 0,
    name: "",
    comment: "",
};

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case "set_name":
          return {
            ...state,
            name: action.payload,
          };
        case "set_comment":
          return {
            ...state,
            text: action.payload,
          };
        case "set_rating":
          return {
            ...state,
            rating: action.payload,
          };
        case "clear_form":
          return {
            ...INITIAL_FORM,
          };
        default:
          return state;
      }
}

export const useForm = () => {
    const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

    const clearForm = () => {
        dispatch({ type: "clear_form" });
    };
    const onChangeName = (e) => {
        dispatch({ type: "set_name", payload: e.target.value });
    };
    const onChangeComment = (e) => {
        dispatch({ type: "set_comment", payload: e.target.value });
    };
    const onChangeRating = (value) => {
        dispatch({ type: "set_rating", payload: value });
    };

    return {
        form,
        clearForm,
        onChangeName,
        onChangeComment,
        onChangeRating,
    };
};
