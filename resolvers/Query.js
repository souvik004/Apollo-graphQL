export const Query = {
    hello: () => "Souvik",
    // products: (parent, args, {products}, info) => products,
    products: (parent, args, {products, reviews}, info) => {
        const {onSale, avgRating} = args.filter
        if(onSale){
            return products.filter(product => product.onSale)
        }
        if(avgRating){
            if ([1, 2, 3, 4, 5].includes(avgRating)) {
                products.filter((product) => {
                    const { sumRating, numberOfReviews } = reviews.reduce((acc, review) => {
                        if (review.productId === product.id) {
                            acc.sumRating += review.rating;
                            acc.numberOfReviews++;
                        }
                        return acc;
                    }, { sumRating: 0, numberOfReviews: 0 });
                  
                    const avgProductRating = sumRating / numberOfReviews;
                    return avgProductRating >= avgRating;
                });                  
            }
        }
    },
    product: (parent, args, contextValue, info) => {
        const {products} = contextValue
        const product = products.find(product => product.id === args.id)
        return product
    },
    categories: (parent, args, {categories}, info) => categories,
    category: (parent, args, contextValue, info) => {
        const {categories} = contextValue
        const categoryId = args.id
        return categories.find(category => category.id === categoryId)
    },
}