const userRouter = require('./user');
const datatestRouter = require('./datatest');

const { notFound, errorHandler } = require('../middlewares/errorHandler');

const initRoutes = (app) => {
    app.use('/api/user', userRouter);
    app.use('/api/datatest', datatestRouter);

    app.use(notFound);
    app.use(errorHandler);
};

module.exports = initRoutes;
