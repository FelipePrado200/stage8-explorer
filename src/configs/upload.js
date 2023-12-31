const path = require("path")

const multer = require("multer")

const crypto = require("crypto")

//pasta temporária 
const TMP_FOLDER = path.resolve(__dirname , ".." , ".." , "tmp")

//pasta onde os arquivos ficam
const UPLOADS_FOLDER = path.resolve(__dirname , "uploads")


const MULTER = {
    storage : multer.diskStorage({
        destination: TMP_FOLDER,
        filename( request ,file , callback){
            const fileHash = crypto.randomBytes(10).toString("hex");
            const filename = `${fileHash}-${file.originalname}`

            return callback(null , filename)
        },
    }),
};

module.exports = {
    TMP_FOLDER,
    UPLOADS_FOLDER,
    MULTER,
}