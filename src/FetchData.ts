import axios from 'axios';
import { Image } from './types';

export const makeGallery = async (value: string, page: number):Promise<Image[]> => {
    axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
      const API_KEY = "krl4EL4KfIKuPOMBeuNhZ38qKa-0FFRbXbN495YOVpw";
      const params = {
        client_id: API_KEY, 
        query: value,
        orientation: "landscape",
        page: page,
        per_page: 20
    };  
    const getImages = await axios.get('', { params: params });
    return getImages.data.results;
} 