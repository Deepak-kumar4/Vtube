import { v2 as cloudinary} from "cloudinary";
import fs from "fs"


          
cloudinary.config({ 
  cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME', 
  api_key: 'process.env.CLOUDINARY_API_KEY', 
  api_secret: 'process.env.CLOUDINARY_API_SECRET' 
});

const uploadOnCloudinary= async(localFilepath)=>{
    try{
        if(!localFilepath) return null
        // upload the file on cloudinary
        const response=await cloudinary.uploader.upload(localFilepath,{
            resource_type:"auto"
        })
        // file has been uploaded successfully
        console.log("FILE IS UPLOADED ON CLOUDINARY",response.url);
        return response;
    }catch(error){
        // it will remove the locally saved temporary
        // file as the upload operation  got failed
        fs.unlinkSync(localFilepath)
        return null;

    }
}

cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });


export {uploadOnCloudinary}