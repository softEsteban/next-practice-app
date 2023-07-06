"use client"

import { ChangeEvent, useReducer } from "react";
import { BiPlus } from "react-icons/bi";
import Success from "./success";
type FormState = Record<string, string>;

type FormAction = {
    name: string;
    value: string;
};

const formReducer = (state: FormState, event: FormAction): FormState => {
    return {
        ...state,
        [event.name]: event.value,
    };
};


export default function AddUserForm() {

    const [formData, setFormData] = useReducer(formReducer, {});

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ name, value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.keys(formData).length == 0) return console.log("Dont have form data!");
        console.log(formData)

    }

    if (Object.keys(formData).length > 0) return <Success message={"User added!"}></Success>

    return (
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 w-4/6 gap-4">
            <div className="input-type">
                <input type="text" onChange={handleChange} name="firstname" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="FirstName" />
            </div>
            <div className="input-type">
                <input type="text" onChange={handleChange} name="lastname" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="LastName" />
            </div>
            <div className="input-type">
                <input type="text" onChange={handleChange} name="email" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Email" />
            </div>
            <div className="input-type">
                <input type="text" onChange={handleChange} name="salary" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Salary" />
            </div>
            <div className="input-type">
                <input type="date" onChange={handleChange} name="date" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Birthday" />
            </div>
            <div className="flex gap-1 items-center">
                <div className="form-check">
                    <input type="radio" onChange={handleChange} name="status" value="Active" id="radioDefault1" className="form-check-input appearance-none rounded-full h-3 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                    <label htmlFor="radioDefault1" className="inline-block text-gray-400">Active</label>
                </div>
                <div className="form-check">
                    <input type="radio" onChange={handleChange} name="status" value="Inactive" id="radioDefault2" className="form-check-input appearance-none rounded-full h-3 w-4 border border-gray-300 bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                    <label htmlFor="radioDefault2" className="inline-block text-gray-400">Inactive</label>
                </div>
            </div>
            <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:border-green-500 hover:bg-white hover:text-green-500">
                Add <span className="px-1"><BiPlus size={24}></BiPlus></span>
            </button>
        </form>
    )
} 