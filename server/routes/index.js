const userRouter = require('./user');
const datatestRouter = require('./datatest');
const datasensorRouter = require('./datasensor');

const { notFound, errorHandler } = require('../middlewares/errorHandler');

const initRoutes = (app) => {
    app.use('/api/user', userRouter);
    app.use('/api/datatest', datatestRouter);
    app.use('/api/datasensor', datasensorRouter);

    app.use(notFound);
    app.use(errorHandler);
};

module.exports = initRoutes;
