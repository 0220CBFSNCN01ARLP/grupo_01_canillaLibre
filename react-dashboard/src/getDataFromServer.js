export async function getProducts() {
    const getResult = await fetch("http://localhost:3000/api/products");
    const productsResult = await getResult.json();

    return productsResult.products;
}

export async function getBebidas() {
    const getResult = await fetch("http://localhost:3000/api/products");
    const productsResult = await getResult.json();

    return productsResult.bebidas;
}

export async function getInsumos() {
    const getResult = await fetch("http://localhost:3000/api/products");
    const productsResult = await getResult.json();

    return productsResult.insumos;
}

export async function getCursos() {
    const getResult = await fetch("http://localhost:3000/api/products");
    const productsResult = await getResult.json();

    return productsResult.cursos;
}

export async function getUsers() {
    const getResult = await fetch("http://localhost:3000/api/profile");
    const usersResult = await getResult.json();

    return usersResult.users;
}

export async function getLastProduct() {
    const getResult = await fetch(
        "http://localhost:3000/api/products/lastproduct"
    );
    const lastProdResult = await getResult.json();

    return lastProdResult;
}
