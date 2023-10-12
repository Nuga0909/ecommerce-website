import express from express;
const router = express.Router();
import Shoe from '../model/shoe.model'

router.get('/all', async(req, res) => {
    try {
        let shoes = await Shoe.find();

        if (shoes.length === 0) {
            return res.status(200).json({
            message: "There are currently no shoes in the database",
            status: "success",
            data: shoes,
        });
        }

        return res.status(200).json({
            message: "operation successful",
            status: "success",
            data: shoes,
        });
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal service error, could not fetch data",
            status: "failed",
            data: shoes,
        });
    }
});

router.get('/single/:id', async (req, res) => {
    try {
        const shoe = await Shoe.findById(req.params.id);

        if (!shoe) {
            return res.status(404).json({
                message: "No shoe found with the provided ID",
                status: "failed",
            });
        }

        return res.status(200).json({
            message: "Operation successful",
            status: "success",
            data: shoe,
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