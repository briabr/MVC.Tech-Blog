const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homepage-routes');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;






// const router = require('express').Router();
// const apiRoutes = require('./api');
// const homePageRoutes = require('./homepage-routes.js');
// const dashbboardRoutes = require('./dashboard-routes.js');


// // router.use('/api', apiRoutes);
// // router.use('/dashboard', dashboardRoutes);
//  router.use('/', homePageRoutes);


// router.use((req, res) => {
//     res.status(404).end();
// });


// module.exports = router;