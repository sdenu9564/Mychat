import mongoose from "mongoose";




const messageSchema = new mongoose.Schema({
    conversationId :{
        type : String,
        required : true
    },
    receiverId : {
        type : String,
        required : true
    },
    senderId :{
        type : String,
        required : true
    },
    text :{
        type : String,
        required: true
    },
    type : {
        type : String,
        required : true
    }
},
{
    timestamps : true
}
);


const message = mongoose.model('message', messageSchema);


export default message;


