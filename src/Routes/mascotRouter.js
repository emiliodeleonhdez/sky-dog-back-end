const express = require('express');
const mascot = require('../Usecases/Mascots/');

const router = express.Router();

router.post('/post', async (req, res) => {
    try {
        const newMascot = await mascot.createMascot(req.body);
        if (!newMascot) throw new Error('Mascot was not created');
        res.status(201).json({
            ok: true,
            message: 'New Mascot Created',
            payload: newMascot
        });
    } catch (error) {
        console.error(error);
    }
});

router.get('/get', async (req, res) => {
    try {
        const allMascots = await mascot.getAllMascots();
        if (!allMascots) {
            res.status(400);
            throw new Error('Mascots not found');
        }
        res.status(302).json({
            message: 'All mascots',
            payload: allMascots
        });
    } catch (error) {
        console.log(error);
    }
});

router.get('/get/query', async (req, res) => {
    try {
        const getMascotsByQueryParams = await mascot.getByQuery(req.body);
        if (!getMascotsByQueryParams) {
            res.status(400);
            throw new Error('Mascots not found');
        }
        res.status(200).json({
            message: 'All mascots',
            payload: getMascotsByQueryParams
        });
    } catch (error) {
        console.log(error);
    }
});

router.patch('/patch/:id', async (req, res) => {
    const { id } = req.params;
    const update = req.body;
    try {
        const updateMascotById = await mascot.updateMascot(id, update);
        if (!updateMascotById) {
            res.status(405);
            throw new Error('Mascots not updated');
        }
        res.status(200).json({
            message: 'Mascot updated',
            payload: updateMascotById
        });
    } catch (error) {
        console.log(error);
    }
});

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleteMascotById = await mascot.deleteMascot(id);
        if (!deleteMascotById) {
            res.status(400);
            throw new Error('Mascots not deleted');
        }
        res.status(202).json({
          message: "Deleted",
          payload: deleteMascotById
        })
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
