import postsMessage from "../models/postsMessage.js"

export const getPosts=async (req,res)=>{
    try {
        const postMessage=await postsMessage.find()

        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const createPost=async (req,res)=>{
    const post=req.body 
    const newPost=new postsMessage(post)

    try {
        await newPost.save()

        res.status(201).json(newPost)
    } catch (error) {
        res.status(209).json({message:error.message})
    }
}