module.exports = (req, res, next) => {

    let fullName    = req.body.fullName,
        dateOfBirth = req.body.dateOfBirth,
        address     = req.body.address,
        position    = req.body.position,
        department  = req.body.department;

    // Validate data --- Support: https://www.npmjs.com/package/validate-js
    if (!fullName.length) {
        res.status(400).json({message: 'fullName field is not null!'});
        return ;
    }

    req.data = {
        full_name    : fullName,
        date_of_birth: dateOfBirth,
        address      : address,
        position     : position,
        department   : department
    };

    next();

};
