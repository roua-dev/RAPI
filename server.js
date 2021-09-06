const express = require('express');
const connectDB = require('./config/connectDB');
const User = require('./model/User');
const app = express()
require('dotenv').config({path:'./config/.env'})
 app.use(express.json())
connectDB()


// CREATE(post) READ(get) UPDATE(put) DELETE 
// -1-create all user

app.post('/users/add', async(req,res)=>{
    const {firstName,email,phone}=req.body ;
    const newUser = new User({
        firstName, 
        email,
        phone
        
    })
    try {
        await newUser.save() 
        res.send(newUser)
    } catch (error) {
        alert('post error')
    }
})
//  -2- get all useres
app.get('/users/get', async(req,res)=>{
    try {
       let users= await User.find()
        res.send(users)
    } catch (error) {
        alert('get error')
    }
})
 // get one user
// app.get('/users/get/:id', async(req,res)=>{
//     try {
//         let users= await User.findById(req.params.id)
//         res.send(users)
//     } catch (error) {
//         alert('get error')
//     }
// })
// update useres
app.put('/users/update/:id', async (req, res)=>{
    try {
        let editedUser= await User.findByIdAndUpdate(req.params.id ,{...req.body} ,{new:true})
        res.send(editedUser)
    } catch (error) {
        alert ("update error")
    }
})


// delete
app.delete('/users/delete/:id', async (req, res)=>{
    try {
         await User.findByIdAndDelete(req.params.id) 
         res.send("user deleted succefully")
    } catch (error) {
        alert('delete error')
    }
})








const PORT = process.env.PORT ||5000
app.listen(PORT , (err)=> err ? console.log(err): console.log(`server running on port ${PORT}`))