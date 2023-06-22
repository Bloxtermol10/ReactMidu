const {Router} = require("express");
const Users = require ("../models/users")

const router = Router();

//get

router.get("/api/users" , async (req,res) => {
    try{
        const users = await Users.find();
        res.json(users);
    }catch (error){
        res.status(500).json({msg: error});
    }
});

router.post("/api/users", async (req, res) => {
    try{
        const {name, nameuser, }

    }catch(error){

    }
});
