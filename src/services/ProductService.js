export const baseURL = process.env.REACT_APP_BASE_URL;

const ProductService = {
    getAll: () => fetch(`${baseURL}/product`),
    getProduct: (id) => fetch(`${baseURL}/product/${id}`),
    addProductCart: (product) => fetch(`${baseURL}/cart`, 
                                    { 
                                      method: 'POST', 
                                      headers: 
                                        { 'Accept': '/*/', 
                                          'Content-Type': 'application/json'
                                        }, 
                                      body: JSON.stringify(product) 
                                    }),
    
}

export default ProductService;