export const Product = {
    category: (parent, args, contextValue, info) => {
        const {categories} = contextValue
        return categories.find(category => category.id === parent.categoryId)
    },
    reviews: (parent, args, contextValue, info) => {
        const {reviews} = contextValue
        return reviews.filter(review => review.productId === parent.id)
    }
}