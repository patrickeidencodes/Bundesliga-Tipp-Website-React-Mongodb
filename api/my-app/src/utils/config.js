// @ts-nocheck
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://tippgame.herokuapp.com/api"
    //baseURL: "localhost:8800/api"
})