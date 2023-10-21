const router = require('express').Router();
const datatestControllers = require('../controllers/datatest');
const { verifyAccessToken, isAdmin } = require('../middlewares/verifyToken');

router.get('/pz', datatestControllers.getDatasPz);
router.get('/cr', datatestControllers.getDatasCr);
router.get('/tilt', datatestControllers.getDatasTilt);
router.get('/', datatestControllers.getDataTest);
router.get('/last', datatestControllers.getLastDataTest);

module.exports = router;
