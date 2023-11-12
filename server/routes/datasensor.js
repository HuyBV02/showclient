const router = require('express').Router();
const datasensorControllers = require('../controllers/datasensor');
const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken');

router.get('/', datasensorControllers.getDataTest)

module.exports = router;
