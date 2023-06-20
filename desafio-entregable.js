class ProductManager {
  products;
  constructor() {
    this.products = [];
  }
  static correlativoId = 0;
  addProduct(title, description, price, thumbnail, code, stock) {
    

    if (
      title == undefined ||
      description == undefined ||
      price == undefined ||
      thumbnail == undefined ||
      code == undefined ||
      stock == undefined
    ) {
      throw new Error("Los campos son obligatorios");
    }
    let codeExists = this.products.some((dato) => dato.code == code);

    if (codeExists) {
      throw new Error("El codigo ya existe ");
    } else {
      ProductManager.correlativoId++;
      const newProduct = {
        id: ProductManager.correlativoId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
      this.products.push(newProduct);
    }

    
  }
  getProducts() {
    return this.products;
  }
  getProductById(id) {
    let product = this.products.find((dato) => dato.id === id);

    if (product !== undefined) {
      return product;
    } else {
      return "no existe el producto ";
    }
  }
}

