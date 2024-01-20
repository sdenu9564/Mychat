import User from "../model/user.model.js";
import Conversation from "../model/conversation.model.js";

export const newConversation =  async (req, res) => {


    try {
        const {senderId , receiverId} = req.body;

        const exist = await Conversation.findOne({members :{$all :[receiverId, senderId]}});

        if(exist) {
            return res.status(200).json({message : 'conversation already exists'});
        }
        else {
            const newConversation = new Conversation ({
                members : [senderId , receiverId]
            })
    
            await newConversation.save();
            return res.status(200).json({message : 'new conversation created successfully'})
        }
        

    } catch (error) {
        console.log('error while create a new conversation',error.message);
        res.status(500).json(error)
    }
}

export const getCOnversation = async(req, res) => {

    try {
        const {senderId, receiverId} = req.body;
        const conversation = await Conversation.findOne({members: {$all:[receiverId, senderId]}});
        return res.status(200).json(conversation);

    } catch (error) {
        console.log('Error while fetch conversation details',error.message);
        res.status(500).json(error);
    }
}