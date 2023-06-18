import {v4 as uuid} from "uuid";

export const Mutation = {
    addCategory: (parent, {input}, contextValue, info) => {
        const {name} = input
        const {categories} = contextValue

        const newCategory = {
            id: uuid(),
            name
        }
        categories.push(newCategory)
        return newCategory
    }
}