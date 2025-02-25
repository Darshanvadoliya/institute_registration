let classCategoryController = require('./classCategory.service')

// add calss category
let addClassCategory = async (data) => {
    return await classCategoryController.addClassCategory(data)
}

// view class category
let viewClassCategory = async (data) => {
    return await classCategoryController.viewClassCategory(data)
}

module.exports = {
    addClassCategory,
    viewClassCategory
}