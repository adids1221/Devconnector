const express = require('express');
const router = express.Router();
const User = require('../../modles/User');
const auth = require('../../middleware/auth');

// @route  GET api/auth
// @desc   Test route
// @access public
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        ers.status(500).send('Server Error');
    }
});

module.exports = router;