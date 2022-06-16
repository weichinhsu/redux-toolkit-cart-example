const fakeProducts = [{
    id: "1", name: "Banana", price: 20
}, {
    id: "2", name: "Apple", price: 50
}, {
    id: "3", name: "Orange", price: 30
}]

export function fetchProducts() {
    return new Promise((resolve) =>
        setTimeout(() => resolve({ data: fakeProducts }), 500)
    );
}
