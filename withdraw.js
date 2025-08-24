router.post('/request', async (req,res)=>{
    const { userId, amount } = req.body;
    const user = await User.findById(userId);
    if(user.coins >= amount){
        user.coins -= amount;
        // Save withdrawal request in DB
        await user.save();
        return res.json({success:true, message:'Withdrawal requested'});
    }
    res.json({success:false, message:'Insufficient coins'});
});
