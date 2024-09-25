

const User =require("../model/userModel")

exports.createuser = async ( req,res,next)=>
{
    const user= await User.create(req.body)

    res.status(201).json({success:true,msg:"User Add Successfully...!",user})

}

// get all products

exports.getAllusers= async (req,res,next)=>
{
     const users= await User.find();

    res.status(200).json(users)

}

//  get single products

exports.getSingleuser= async (req,res,next )=>
{
    const user = await User.findById(req.params.id)

    if(!user){
        // return next( new ErrorHander("product not fount",404))
        return res.status(404).json({
            success:false,
            message:"user not found"
        })
    }

    
    res.status(200).json({user})
}

// update product -- admin

exports.updateuser= async (req,res)=>
{
    
    let user=await User.findById(req.params.id)

    if(!user)
    {
        return res.status(500).json({
            success:false,
            msg:"user not found "
        })
    } 

      
      user= await User.findByIdAndUpdate(req.params.id,req.body,{new:true,
        runValidators:true,
        useFindModify:true
    })
    res.status(200).json({success:true,user})

}

// delete product --admin
exports.deleteuser = async (req,res,next)=>
{
     
     const user =await User.findById(req.params.id)

    if(!user)
    {
           return res.status(500).json({
            success:false,
            message:"user not found"
        })
    } 

    //  await User.remove()
    await User.findByIdAndDelete(user)

    res.status(200).json({success:true,msg:`USER DELETE SUCCESSFULLY..!`})

}



// module.exports ={getAllProducts ,createProduct,updateProduct,deleteProduct,getSingleProduct}