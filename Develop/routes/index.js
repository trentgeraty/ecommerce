const router = require('express').Router();
const apiRoutes = require('./api');
const tagRoutes = require('./tag-routes');
const productRoutes = require('./product-routes');


// router.use('/api', apiRoutes);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;