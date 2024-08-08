const getProducts = () => {
  fetch("../data/data.json")
    .then((response) => response.json())
    .then((products) => {
      pintarProductos(products)
    })
};



