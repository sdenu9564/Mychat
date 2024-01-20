import Message from "../model/message.model.js"
import Conversation from "../model/conversation.model.js";

export const newMessage = async(req, res) => {

    try {
        console.log(req.body,'-------------------------')
        const newMessage = new Message(req?.body);
        await newMessage.save();
        await Conversation.findByIdAndUpdate(req.body.conversationId, {message : req.body.text});


        return res.status(200).json('Message has been sent successfully')
    } catch (error) {
        console.log('Error while add a message',error.message)
        res.status(500).json(error.message);
    }
}

export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find({ conversationId : req.params.id})
        return res.status(200).json(messages);
    } catch (error) {
        console.log('error while fetch messages', error.message)
        res.status(200).json(error.message);
    }
}