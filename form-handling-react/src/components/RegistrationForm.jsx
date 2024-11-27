import React, { useState } from "react";

const RegistrationForm = () => {
    // const [formData, setFormData] = useState({username:'', email:'',password:''});

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState =>({ ...prevState, [name]: value}));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
    };

    return(
        <form onSubmit={handleSubmit}>
            <label>User Name: </label>
            <input 
            type="text"
            name="username"
            value={username}
            onChange={handleChange} required/><br/>

            <label>Email: </label>
            <input 
            type="email" 
            name="email"
            value={email}
            onChange={handleChange} required /><br/>

            <label>Password: </label>
            <input type="password"
            name="password"
            value={password}
            onChange={handleChange} required/><br/><br/>

            <button type="submit">Submit</button>
        </form>
    );
}

export default RegistrationForm;