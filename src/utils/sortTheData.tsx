import { useSelector } from "react-redux";

const sortTheData = (products) => {
  const rating = useSelector((state) => state.ecom.byRating);
  const stock = useSelector((state) => state.ecom.byStock);
  const searchQuery = useSelector((state) => state.ecom.searchQuery);
  const sort = useSelector((state) => state.ecom.sort);
  const category = useSelector((state) => state.ecom.category);
  let sortedProduct = products;

  if (sort) {
    sortedProduct = sortedProduct.sort((a, b) =>
      sort === "LowToHigh" ? a.price - b.price : b.price - a.price
    );
  }

  if (rating) {
    sortedProduct = sortedProduct.filter((prod) => prod.rating.rate >= rating);
  }

  if (stock) {
    sortedProduct = sortedProduct.filter((prod) => prod.rating.count > 200);
  }

  if (searchQuery) {
    sortedProduct = sortedProduct.filter((prod) =>
      prod.title.toLowerCase().includes(searchQuery)
    );
  }

  if (category === "men") {
    sortedProduct = sortedProduct.filter(
      (prod) => prod.category === "men's clothing"
    );
  } else if (category === "women") {
    sortedProduct = sortedProduct.filter(
      (prod) => prod.category === "women's clothing"
    );
  } else if (category === "elec") {
    sortedProduct = sortedProduct.filter(
      (prod) => prod.category === "electronics"
    );
  } else if (category === "jewel") {
    sortedProduct = sortedProduct.filter(
      (prod) => prod.category === "jewelery"
    );
  }

  return sortedProduct;
};

export default sortTheData;
