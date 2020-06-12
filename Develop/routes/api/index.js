const router = require('express').Router();
const tagRoutes = require('./tag-routes');
const productRoutes = require('./product-routes');
const categoryRoutes = require('./category-routes');

// router.use('/api', apiRoutes);
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;