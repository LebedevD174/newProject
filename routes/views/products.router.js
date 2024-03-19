const router = require('express').Router();
const { Product, Category } = require('../../db/models');
const ProductsPage = require('../../components/pages/ProductsPage');
const ProdPage = require('../../components/pages/ProdPage');

router.get('/', async (req, res) => {
  const products = await Product.findAll();
  const html = res.renderComponent(ProductsPage, {
    title: 'Продукты',
    products,
  });
  res.send(html);
});
router.get('/product:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOne({ where: { id } });
  const category = await Category.findOne({ where: { id: product.category_id } });
  const html = res.renderComponent(ProdPage, {
    title: `Продукт: ${product.name}`,
    product,
    category,
  });
  res.send(html);
});

module.exports = router;
