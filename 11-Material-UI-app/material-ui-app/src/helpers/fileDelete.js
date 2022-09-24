export const fileDelete = async (file) => {
    if(!file) throw new Error("no file found to send!");
    const url = "https://api.cloudinary.com/v1_1/flautarian/image/upload";

    const formData = new FormData();
    formData.append('upload_preset', 'react-project-journal');
    formData.append('file', file);

    try{
        const resp = await fetch(url, {
            method: 'POST',
            body: formData
        });

        if(!resp.ok)
        throw new Error("Error during file upload, the file was not uploaded-> " + resp.status + ":" + resp.statusText);
        
        const cloudResp = await resp.json();
        return cloudResp.secure_url;

    }catch(e){
        console.log(e);
        throw new Error(e);
    }

}