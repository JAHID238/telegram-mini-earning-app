const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Routes
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
const earningRoutes = require('./routes/earnings');
const withdrawRoutes = require('./routes/withdrawals');

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);
app.use('/earnings', earningRoutes);
app.use('/withdraw', withdrawRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
