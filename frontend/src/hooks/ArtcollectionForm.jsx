import React from 'react';
import useForm from './useForm';

const ArtcollectionForm = () => {
    const { formValues, handleChange, handleSubmit } = useForm(artcollection);

    function artcollection() {
        alert('This post will be seen by users.');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Time:
                    <input type='date-time' name='time' onChange={handleChange} value={formValues.time} required={true} />
                </label>
                <label>
                    Title:
                    <input type='text' name='title' onChange={handleChange} value={formValues.title} required={true} />
                </label>
                <label>
                    Price:
                    <input type='text' name='price' onChange={handleChange} value={formValues.price} required={true} />
                </label>
                <button type='submit'>Art Post</button>
            </form>
        </div>
    );
}

export default ArtcollectionForm;