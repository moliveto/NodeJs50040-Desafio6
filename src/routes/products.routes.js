import { Router } from "express";
const router = Router();
import { getProductById, getAllProducts, createProduct, updateProduct, deleteProduct } from '../models/products.model.js';

router.get("/:pid", async (req, res) => {
    const pid = req.params.pid;
    try {
        const product = await getProductById(pid);
        res.send(product);
    } catch (error) {
        res.status(500).send({ error: "Error al obtener el producto por ID" });
    }
});

router.get("/", async (req, res) => {
    try {
        const products = await getAllProducts();
        res.send(products);
    } catch (error) {
        res.status(500).send({ error: "Error al obtener los productos" });
    }
});

router.post("/", async (req, res) => {
    try {
        const newProduct = await createProduct(req.body);
        res.send(newProduct);
    } catch (error) {
        res.status(500).send({ error: "Error al agregar el producto" });
    }
});

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await updateProduct(id, req.body);
        res.send(updatedProduct);
    } catch (error) {
        res.status(500).send({ error: "Error al actualizar el producto" });
    }
});

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await deleteProduct(id);
        res.send(deletedProduct);
    } catch (error) {
        res.status(500).send({ error: "Error al eliminar el producto" });
    }
});

export default router;