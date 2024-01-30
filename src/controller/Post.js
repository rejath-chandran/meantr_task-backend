
import Post from "../model/Post.js";

export const CreatePost = async(req, res,next) => {
    try{
        const {title,content}=req.body

        let data= await Post.create({
            title:title,
            content:content
        })

        res.status(201).json("sucess")
    }catch(err){
        next(err)
    }
};

export const ListAllPost = async(req, res,next) => {
    try{
      let data=await Post.find({}).sort({ createdAt: -1 }) 
       res.status(200).json(data)
    }catch(err){
      next(err)
    }
};

export const DeletePost = async(req, res,next) => {
    try{
        const {id}=req.params
        await Post.findByIdAndDelete(id)
        res.status(200).json("sucess")
    }catch(err){
       next(err)
    }
};
