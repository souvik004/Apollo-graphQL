export const Category = {
    products: (parent, args, contextValue, info) => {
        const {products} = contextValue
        const {onSale} = args.filter
        // return products.filter(product => product.categoryId === parent.id)
        if(onSale){
            return products.filter(product => product.onSale)
        }
    }
}
