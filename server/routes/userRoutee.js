const express=require("express")

const {createuser,getAllusers,getSingleuser,updateuser,deleteuser}=require("../controller/userController")


const router =express.Router()

router.route("/users").get(getAllusers)
router.route("/create").post(createuser)
router.route("/user/:id").put(updateuser)
router.route("/user/:id").delete(deleteuser)
router.route("/user/:id").get(getSingleuser)


module.exports = router
