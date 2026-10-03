import {useEffect, useState } from "react";

const AddTodo = ({ handleAdd,selectedTodo,handleUpdate }) => {

    const [input, setInput] = useState({
        task: "",
        description: ""
    });

    useEffect(() => {
     if(selectedTodo){
        setInput({
            task: selectedTodo.task,
            description: selectedTodo.description
        });
     };
    },[selectedTodo]);
    

    const handleChange = (field, e) => {
        setInput((p) => {
            return {
                ...p,
                [field]: e.target.value
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if( selectedTodo){
            handleUpdate({
                ...selectedTodo,
                ...input
            });

            setInput({task:"",description:""});

            return;
        }

        handleAdd(input);

        setInput({ task: "", description: "" });

    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="enter your text"
                    value={input.task}
                    onChange={(e) => handleChange("task", e)}
                    required
                />

                <br />
                <br />

                <input
                    type="text"
                    placeholder="enter your text"
                    value={input.description}
                    onChange={(e) => handleChange("description", e)}
                    required
                />

                <br />
                <br />

                <button type="submit">
                    {
                        selectedTodo ? "Update" : "Add"
                    }
                </button>
            </form>
        </>
    );
};

export default AddTodo;