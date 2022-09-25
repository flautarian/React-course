export const fileUpload = async (file) => {
    if (!file) return null;
    const url = "https://api.cloudinary.com/v1_1/flautarian/upload";

    const formData = new FormData();
    formData.append('upload_preset', 'react-project-journal');
    formData.append('file', file);

    try {
        const resp = await fetch(url, {
            method: 'POST',
            body: formData
        });

        if (!resp.ok)
            throw new Error("Error during file upload, the file was not uploaded-> " + resp.status + ":" + resp.statusText);

        const cloudResp = await resp.json();
        return cloudResp.secure_url;

    } catch (e) {
        //throw new Error(e);
        console.log(e);
        return null;
    }

}