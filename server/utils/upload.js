

//import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';
import multer from 'multer';

import dotenv from 'dotenv';
dotenv.config();

const DATABASENAME= process.env.DB_USERNAME;


const storage=new GridFsStorage({
    url:`mongodb://127.0.0.1:27017/${DATABASENAME}`,
    options: {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    },
    file:(request,file)=>{
        const match=["image/png","image/jpg"];
        if(match.indexOf(file.mimeType)===-1){
            return `${Date.now()}-file-${file.originalname}`;
        }

        return {
            bucketName:"photos",
            filename:  `${Date.now()}-file-${file.originalname}`
        }
    }
});

export default multer({storage});