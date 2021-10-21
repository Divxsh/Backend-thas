const check = (req,res) => {
    if (req.session.User.role === "super-admin"){
        res.status(200).send("Success")
    }
    else{
        res.status(401).send("Needs to be super admin.")
    }
}

module.exports = check;