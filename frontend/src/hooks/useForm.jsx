import { useState } from 'react';

const useForm = (callback) => {
    // Hook for state variable and function to update state variable
    const [formValues, setFormValues] = useState({});

    const handleChange = (event) => {
        //event.persist() allows the event to occur asynchronously
        event.persist();

        //...formValues is to spread the original object apart for the new object
        // being sent into the setFormValues function call
        setFormValues({...formValues, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Calling our callback function that was sent into this hook
        // When being used on a component
        callback();
    }

    // Putting our state variable and on change/on submit function calls in 
    // an object and returning it

    return { formValues, handleChange, handleSubmit };

}

export default useForm;