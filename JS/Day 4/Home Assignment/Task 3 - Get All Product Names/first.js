let store = {
    categories: [
        { type: "fruits", items: ["watermelon", "kiwi"] },
        { type: "veggies", items: ["potato", "beans"] },
        { type: "softdrinks", items: ["coke", "monster"] }
    ]
};

let products = [];

store.categories.forEach(category => {
    products.push(...category.items);
});

console.log(products);