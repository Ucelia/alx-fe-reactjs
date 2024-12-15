import React from "react";
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q=';

export const fetchUserData = async ({username, location, minRepos}) => {
    let query ='';

    if(username) query += `${username} in:login`;
    if(location) query += `Location: ${location}`;
    if(minRepos) query += `repos: >= ${minRepos}`;

    try {
        const response = await axios.get(`${BASE_URL}${query}`);
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.message || 'An error occurred. Please try again.');
        }
};
