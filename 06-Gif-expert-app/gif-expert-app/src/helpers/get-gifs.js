export const fillGifs = async( category ) => {
    try {
        const apiKey = 'LwBR46gej0K4pz4AZZEZGtJIKbWNkGqW';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`);
        const { data } = await resp.json();

        const gifs = (data.map( img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        })));
        
        return gifs;
    } catch (error) {
        // manejo del error
        console.error(error);
        return 'No se encontro la imagen';
    }
}