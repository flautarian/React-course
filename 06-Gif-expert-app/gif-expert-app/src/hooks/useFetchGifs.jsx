import { useEffect, useState } from "react";
import { fillGifs } from "../helpers/get-gifs";

export const useFetchGifs = ({ category }) => {

    const [images, setImages] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fillGifs(category).then( newImg => setImages(newImg));
        setIsLoading(false);
    }, []) 

    return {
        images: images,
        isLoading: isLoading
    }
}
