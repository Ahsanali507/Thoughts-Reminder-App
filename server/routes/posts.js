import Express  from "express";
import {getPosts,createPost} from '../controller/posts.js'

const router=Express.Router();

//https://localhost:5000/posts
router.get('/',getPosts)

//https://localhost:5000/createPost
router.post('/createPost',createPost)

// //https://localhost:5000/createPost
// router.post('/updatePost',updatePost)

// //https://localhost:5000/createPost
// router.post('/deletePost',deletePost)

export default router;