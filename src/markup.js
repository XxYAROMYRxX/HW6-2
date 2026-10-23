function render(array) {
  const item = array.map(
    ({
      name,
      brand,
      category,
      price,
      currency,
      description,
      color,
      rating,
      reviews,
      inStock,
      stockQuantity,
      weight,
      warranty,
      discount,
      isFeatured,
    }) => {
        return `<li>
        <p>${name}</p>
        <p>${brand}</p>
        <p>${category}</p>
        <p>${price}</p>
        <p>${currency}</p>
        <p>${description}</p>
        <p>${color}</p>
        <p>${rating}</p>
        <p>${reviews}</p>
        <p>${inStock}</p>
        <p>${stockQuantity}</p>
        <p>${weight}</p>
        <p>${warranty}</p>
        <p>${discount}</p>
        <p>${isFeatured}</p>
    </li>`
    },
  ).join("");
  return item;
}


export default render;
