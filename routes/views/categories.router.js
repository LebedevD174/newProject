const router = require('express').Router();
const { Product, Category } = require('../../db/models');
const CategoryPage = require('../../components/pages/CategoriesPage');
const ProductsPage = require('../../components/pages/ProductsPage');

router.get('/', async (req, res) => {
  const categories = await Category.findAll();
  const html = res.renderComponent(CategoryPage, {
    title: 'Категории',
    categories,
  });
  res.send(html);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const category = await Category.findOne({ where: { id } });
  const products = await Product.findAll({ where: { category_id: id } });
  const html = res.renderComponent(ProductsPage, {
    title: `Продукты из категории ${category.name}`,
    products,
    doctype: false,
  });
  res.send(html);
});

module.exports = router;
