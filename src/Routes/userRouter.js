const express = require('express');
const user = require('../Usecases/Users/');

const router = express.Router();

router.post('/post', async (req, res) => {
    try {
        const newUser = await user.createUser(req.body);
        if (!newUser) throw new Error('User was not created');
        res.status(201).json({
            ok: true,
            message: 'New User Created',
            payload: newUser
        });
    } catch (error) {
        console.error(error);
    }
});

router.get('/get', async (req, res) => {
    try {
        const allUsers = await user.getAllUsers();
        if (!allUsers) {
            res.status(400);
            throw new Error('Users not found');
        }
        res.status(200).json({
            ok: true,
            message: 'All users',
            payload: allUsers
        });
    } catch (error) {
        console.log(error);
    }
});

router.get('/get/query', async (req, res) => {
    const query = req.body;
    try {
        const getUserByQuery = await user.getUserByQuery(query);
        if (!getUserByQuery) {
            res.status(400);
            throw new Error('User not found');
        }
        res.status(200).json({
            ok: true,
            message: 'User(s) by query',
            payload: getUserByQuery
        });
    } catch (error) {
        console.log(error);
    }
});

router.get('/get/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const getUserById = await user.getUserById(id);
        if (!getUserById) {
            res.status(400);
            throw new Error('User not found');
        }
        res.status(200).json({
            ok: true,
            message: 'User by id',
            payload: getUserById
        });
    } catch (error) {
        console.log(error);
    }
});

router.patch('/patch/:id', async (req, res) => {
    const { id } = req.params;
    const update = req.body;
    try {
        const updateUser = await user.updateUser(id, update);
        if (!updateUser) {
            res.status(400);
            throw new Error("Couldn't update user");
        }
        res.status(202).json({
            message: 'User updated',
            payload: updateUser
        });
    } catch (error) {
        console.log(error);
    }
});

router.delete("/delete/:id", async (req, res) =>{
    const {id} = req.params
    try {
        const deleteUser = await user.deleteUser(id)
        if (!deleteUser) {
            res.status(406);
            throw new Error("Couldn't delete user");
        }
        res.status(200).json({
            message: 'User deleted',
            payload: deleteUser
        });
    } catch (error) {
        console.log(error)
    }
})


module.exports = router;
