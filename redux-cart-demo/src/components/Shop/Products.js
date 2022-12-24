import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title='A Great Book'
          price={12}
          description='This is an awesome book!'
        />
        <ProductItem
          title='Another Great Book'
          price={18}
          description='This is a more awesome book!'
        />
      </ul>
    </section>
  );
};

export default Products;
