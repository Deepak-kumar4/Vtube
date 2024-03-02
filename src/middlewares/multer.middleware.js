import multer from "multer";

// we are using disk storage here 
const storage = multer.diskStorage({
                         // req file callbacks
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
export const upload = multer({ 
    storage, 
})