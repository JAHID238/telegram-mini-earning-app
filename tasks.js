const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const User = require('../models/User');

// Example: Complete a task
router.post('/complete', async (req, res) => {
    const { userId, taskId } = req.body;

    const task = await Task.findById(taskId);
    const user = await User.findById(userId);

    if(task && user){
        user.coins += task.coinsReward;
        await user.save();
        return res.json({ success: true, coins: user.coins });
    }
    res.json({ success: false });
});

module.exports = router;
