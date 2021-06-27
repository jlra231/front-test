

export const selectProducts = ({products}) => 
    products.search.trim().length > 0 
        ? 
            products.values.filter(product => 
                product.model.toLowerCase().includes(products.search) || product.brand.toLowerCase().includes(products.search))
        :
            products.values

export const selectUiState = state => state.products.uiState;

export const selectSearchValue = state => state.products.search;
