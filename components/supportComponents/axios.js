import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://travelogic.glitch.me/api'

});

export const imagePath = 'https://travelogic.glitch.me/uploads'



export default instance;