const express = require("express");
const router = express.Router();

const {
    getAllUser,
    getUserById,
    createUser,
    deleteUser,
} = require("../controller/user_controller");

router.get("/users", getAllUser);
router.get("/:id", getUserById);
router.post("/users", createUser);
router.delete("/users", deleteUser);

module.exports = router;