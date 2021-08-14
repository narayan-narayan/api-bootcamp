require('dotenv').config();
const express = require('express');

const connectDB = require('./connection') // Mongoose Connection
const userModel = require('./user')

const app = express()       //Instance initialization // app will be used to build the app apis

// configuration
app.use(express.json())

// route:           /
// params:          none
// description:     To get all users
app.get('/', async (req, res) => {
    const users = await userModel.find()
    return res.json({ users })
})

// route:           /user/type/:type
// params:          type
// description:     To get all users having certain type
app.get('/user/type/:type', async (req, res) => {
    const { type } = req.params
    const users = await userModel.find({ userType: type })

    if(users.length === 0) {
        return res.json({
            message: "No user found 😶"
        })
    }
    return res.json({ users })
})

// route:           /user/:_id
// params:          id
// description:     To get user having certain id
app.get('/user/:_id', async (req, res) => {
    const { _id } = req.params
    const user = await userModel.findOne({ _id })

    if(!user) {
        return res.json({
            message: "No user found 😶"
        })
    }
    return res.json({ user })
})

// route:           /user/new
// params:          none
// request body:    user object
// description:     Create a user
app.post('/user/new', async (req, res) => {
    const { userData } = req.body
    const createResponse = await userModel.create(userData)
    return res.json({
        message: 'User Created!',
        createResponse
    })
})

// route:           /user/update/:_id
// params:          id
// request body:    user object
// description:     To update user having certain id
app.put('/user/update/:_id', async (req, res) => {
    const { _id } = req.params
    const { userData } = req.body

    const updatedUserResponse = await userModel.findByIdAndUpdate(_id, { $set: userData }, { new: true })

    return res.json({ updatedUserResponse })
})

// route:           /user/delete/:_id
// params:          id
// description:     To delete user having certain id
app.delete("/user/delete/:_id", async (req, res) => {
    const { _id } = req.params

    const userDeleted = await userModel.findByIdAndDelete(_id)

    res.json({ message: "User Deleted", userDeleted })
})

// route:           /user/delete/:userType
// params:          user type
// description:     To delete user having certain user type
app.delete("/user/delete/type/:userType", async (req, res) => {
    const { userType } = req.params

    const userDeleted = await userModel.findOneAndDelete({ userType })

    res.json({ message: "User Deleted", userDeleted })
})

app.listen(process.env.PORT,
    connectDB()
        .then((data) => console.log("Server ready 🚀"))
        .catch((err) => console.log(err))
)