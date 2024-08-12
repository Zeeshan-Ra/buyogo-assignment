const router = require("express").Router();
const User = require("../models/user");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//SIGNUP API
router.post("/signup", async (req, resp) => {
    try {
        const { fullname } = req.body;
        const { email } = req.body;
        const existingEmail = await User.findOne({ email: email });
        if (existingEmail) {
            return resp.status(400).json({ message: "Email already exists" });
        }
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({ fullname: req.body.fullname, email: req.body.email, password: hashPassword, organization_name: req.body.organization_name, organization_id: req.body.organization_id, designation: req.body.designation, birthdate: req.body.birthdate, city: req.body.city, pincode: req.body.pincode });
        await newUser.save();
        return resp.status(200).json({ message: "SignIn successfully" })
    } catch (error) {
        console.log(error);
        resp.status(400).json({ message: "Internal Server Error" });
    }
});

//LOGIN API
router.post("/login", async (req, resp) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
        return resp.status(400).json({ message: "Invalid Credentials" });
    }
    bcrypt.compare(password, existingUser.password, (err, data) => {
        if (data) {
            const authClaims = [{ name: email }, {jti: jwt.sign({}, "zeeTM")}]
            const token = jwt.sign({ authClaims }, "zeeTM", { expiresIn: "2d" });
            resp.status(200).json({id: existingUser._id, token: token})
        } else {
            return resp.status(400).json({ message: "Invalid Credentials" });
        }
    })
})

module.exports = router;