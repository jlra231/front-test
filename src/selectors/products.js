

export const selectProducts = ({products}) => 
    products.search.trim().length > 0 
        ? 
            products.values.filter(product => 
                product.model.toLowerCase().includes(products.search) || product.brand.toLowerCase().includes(products.search))
        :
            products.values

export const selectProduct = ({products}) => products.product;

export const selectSearchValue = ({products}) => products.search;

export const selectProductById = ({products}, id) => products.values.find(product => product.id === id);

