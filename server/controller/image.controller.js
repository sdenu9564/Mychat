import grid from "gridfs-stream";
import mongoose from "mongoose";

const url = "http://localhost:8000"

const con = mongoose.connection;
let gfs;
let gridfsBucket;
con.once('open', ()=> {
  gridfsBucket = new mongoose.mongo.GridFSBucket(con.db, {
    bucketName : 'fs'

  });
  gfs = grid(con.db , mongoose.mongo)
  gfs.collection('fs');

})

export const uploadImage = (request, response) => {
  if(!request.file) 
      return response.status(404).json("File not found");
  
  const imageUrl = `${url}/file/${request.file.filename}`;

  response.status(200).json(imageUrl);    
}


export const getImage = async(req, re)=>{
  try {
    const file = await gfs.files.findOne({filename : req.params.filename});
    const   readStream = gridfsBucket.openDownloadStream(file._id);
    readStream.pipe(res)

  } catch (error) {
    return res.status(500).json(error.message)
  }
}