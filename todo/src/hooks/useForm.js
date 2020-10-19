import React,{useState} from 'react'

const useForm = (callback) => {
    const [values, setValues] = useState({});
    const handleSubmit = (e) => {
        console.log("Generic Change handleSubmit ...")
        if (e) e.preventDefault();
        callback(values)
        setValues({...values, [e.target.name]: e.target.value })
    }
    const onChangeHandler = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log("Generic Change Handler ...")
    }
    return [handleSubmit, onChangeHandler, values];
}
export default useForm;