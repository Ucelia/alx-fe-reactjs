import React from "react";
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q=';
const GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN;

export const fetchUserData = async ({username, location, minRepos}) => {
    let query ='';

    if(username) query += `${username} in:login`;
    if(location) query += `Location: ${location}`;
    if(minRepos) query += `repos: >= ${minRepos}`;

    const headers = {
        Authorization: `token ${GITHUB_API_TOKEN}`,
    };


    try {
        const response = await axios.get(`${BASE_URL}${query}`, { headers });
        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.message || 'An error occurred. Please try again.');
        }
};
