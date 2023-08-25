import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

const useGif = (tag) => {
    const [gif, setgif] = useState('');
    const [loading, setLoading] = useState(false);

    const tagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    async function getdata(tag) {
        setLoading(true)
        const { data } = await axios.get(tag ? tagurl : randomurl);
        const imgsource = data.data.images.downsized_large.url;
        setgif(imgsource)
        setLoading(false)
    }

    useEffect(() => {
        getdata();
    }, [])

    return { gif, loading, getdata }
}

export default useGif;