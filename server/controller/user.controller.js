import User from "../model/user.model.js"
export const addUser = async(req, res) =>{
    try {
        const exist  = await User.findOne({ sub : req?.body?.sub});
        if(!exist) {
            const newUser = new User(req.body);
            await newUser.save();
            return res.status(200).json(newUser);

        }else {
            res.status(200).json({message :'user already exist'})
            return;
        }

    } catch (error) {
        console.log(error);

    }
}

export const getUsers = async(req, res) => {

    try {
        const users = await User.find({});
        res.status(200).json(users)
    } catch (error) {
        console.log(error);
        res.status(500).sjon(error.message);
    }   
}