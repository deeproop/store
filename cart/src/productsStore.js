// Coffee : price_1MPlL9SGXIVKb2H5DfNUdni0
// Sunglasses: price_1MPlMiSGXIVKb2H5Uf9FYZjN
// Camera: price_1MPlNfSGXIVKb2H5bLJzAWfl

const productsArray = [
    {
        id: "price_1MPlL9SGXIVKb2H5DfNUdni0",
        title: "Coffee",
        price: 4.99
    },
    {
        id: "price_1MPlMiSGXIVKb2H5Uf9FYZjN",
        title: "Sunglasses",
        price: 9.99
    },
    {
        id: "price_1MPlNfSGXIVKb2H5bLJzAWfl",
        title: "Camera",
        price: 39.99
    },
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if(productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData }; {/*this allows us to give this data to any component in our javascript project */}