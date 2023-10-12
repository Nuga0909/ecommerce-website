import express from express;
const router = express.Router();
import Product from '../model/product.model'

router.get('/all', async(req, res) => {
    try {
        let products = await Product.find();

        if (products.length === 0) {
            return res.status(200).json({
            message: "There are currently no products in the database",
            status: "success"
        });
        }

        return res.status(200).json({
            message: "operation successful",
            status: "success",
            data: products,
        });
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal service error, could not fetch data",
            status: "failed"
        });
    }
});

router.get('/single/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "No product found with the provided ID",
                status: "failed",
            });
        }

        return res.status(200).json({
            message: "Operation successful",
            status: "success",
            data: product,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal service error, could not fetch data",
            status: "failed",
        });
    }
});

export default router;