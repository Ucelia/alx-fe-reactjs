import React from "react";
import axios from 'axios';

const base_url = 'https://api.github.com/users/{username}';

const fetchUserData = async(username)=>{
    try {
        const response = await axios.get(`${base_url}/users/${username}`);
        return response.data;
    } catch (error) {
        throw new Error('User not found');
    }
}
export default fetchUserData;

