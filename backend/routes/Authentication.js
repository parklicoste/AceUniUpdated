const router = require("express").Router();
const auth = require('../controllers/auth');
const authMiddleware = require('../middleware/auth');

router.post("/signup", auth.signup);
router.post("/login", auth.signin);
router.post("/feedback", auth.feedback);

router.put('/update-profile', auth.updateProfile);
// router.put('/update-profile', authMiddleware, auth.updateProfile);

module.exports = router;