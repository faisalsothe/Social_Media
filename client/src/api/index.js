import axios from "axios";

const API=axios.create({baseURL:"https://memoriesbe.onrender.com"});

//Needed for middleware to work , to get token and add it to each requests.
API.interceptors.request.use((req)=>{
    if(JSON.parse(localStorage.getItem("user_info"))){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("user_info")).token}`
    }
    return req;
})

  
//POSTS PART
export const fetchPost= (page)=> API.get(`/posts?page=${page}`);
export const createPost= (newPost)=> API.post("/posts",newPost);
export const fetchPostById= (id)=> API.get(`/posts/${id}`);
export const fetchPostBySearch=(searchQuery)=> API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`)
export const updatePost= (id,updatedPost)=> API.patch(`/posts/${id}`,updatedPost);
export const deletePost= (id) => API.delete(`/posts/${id}`);
export const likePost= (id)=> API.patch(`/posts/${id}/likePost`);
export const comment= (value,id)=> API.post(`/posts/${id}/commentPost`,{value});


//USERS PART

export const signIn=(data)=>API.post("/users/signin",data);
export const signUp=(data)=>API.post("/users/signup",data);

export const signInGoogle=(accessToken)=>API.post("/users/signin",{googleAccessToken:accessToken});
export const signUpGoogle=(accessToken)=>API.post("/users/signup",{googleAccessToken:accessToken});




