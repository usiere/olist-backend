

const orderRoutes =  require( './api/order-routes');
const orderRoutes =  require( './api/seller-routes');



function registerRoutes(app) {

    app.use('/api', orderRoutes);
    app.use('/api', sellerRoutes);

}


module.exports = registerRoutes(app);