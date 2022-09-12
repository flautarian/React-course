import { useEffect, useState } from "react";
import { fillGifs } from "../helpers/get-gifs";

export const UseFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await fillGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []) 

    return {
        images,
        isLoading
    }
}
