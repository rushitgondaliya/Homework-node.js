const { Groceryservice } = require("../services");

/* Create Grocery*/

const createGrocery = async (req, res) => {
    try {
        const reqBody = req.body;

        const Grocery = await Groceryservice.createGrocery(reqBody);
        if (!Grocery) {
            throw new Error("Something went wrong, please try again or later!");
        }
        res.status(200).json({
            success: true,
            message: reqBody,
            data: { reqBody },
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

/* Get Grocery*/

const Grocerylist = async (req, res) => {
    try {
        const getGrocery = await Groceryservice.getGrocerylist();
        res.status(200).json({
            success: true,
            message: "Grocery list!!",
            data: {
                getGrocery,
            },
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
};

/* delete Grocery */

const deleteGrocery = async (req, res) => {
    try {
        const GroceryId = req.params.GroceryId;
        const GroceryExists = await Groceryservice.getGrocerylist(GroceryId);
        if (!GroceryExists) {
            throw new Error("Category not found!");
        }
        await Groceryservice.deleteGrocery(GroceryId);

        res.status(200).json({
            success: true,
            message: "Category delete successfully!",
        });
    }catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
}

module.exports = {
    createGrocery,
    Grocerylist,
    deleteGrocery
}