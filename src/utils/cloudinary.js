import {v2 as cloudinary} from 'cloudinary';
import {fs} from 'fs';
          
cloudinary.config({ 
  cloud_name: process.env.cloudinary_cloud_name, 
  api_key: process.env.cloudinary_api_key, 
  api_secret: process.env.cloudinary_api_SECRET 
});
const uploadOnCloudinary = async (file) => {
    try {
        if(!file) return null
            // upload to cloudinary
           const response = await cloudinary.uploader.upload(file, {
                resource_type: "auto"
            })
     console.log("file is uploaded on cloudinary",response.url);
        return response;
        
    } catch (error) {
        fs.unlinkSync(file); // remove the locally saved temprary file as the file was not uploaded to cloudinary
        return null
    }
}


cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });