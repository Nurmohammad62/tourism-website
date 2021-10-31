import React from 'react';
import './AddTour.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddTour = () => {
    const { register, handleSubmit, reset } = useForm();

    // POST a new tour with axios
    const onSubmit = data => {
        axios.post('https://warm-meadow-52876.herokuapp.com/tour', data)
        .then(result => {
            if(result.data.acknowledged){
                alert('added successfully');
                reset();
            }
        })
    };
    return (
        // React hook form to add a new tour
        <div className='add-tour-form'>
            <h1 className='add-tour-header text-center mt-5 mb-5'>Add a new tour</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true})} placeholder='title'/>
                <textarea {...register("description")} placeholder='description'/>
                <input type="number" {...register("price")} placeholder='price'/>
                <input {...register("img_url")} placeholder='iamge url'/>
                <input className='btn-submit' type="submit" value='Add Tour'/>
            </form>
        </div>
    );
};

export default AddTour;