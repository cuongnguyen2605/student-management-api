module.exports = (req, res, next) => {

    let name    = req.body.name;
    let age     = req.body.age;
    let address = req.body.address;
    let email   = req.body.email;

    // Validate data --- Support: https://www.npmjs.com/package/validate-js
    if (!name.length) {
        return res.json({error: 'Name is null!!!'});
    }

    req.rawData = {
        name   : name,
        age    : age,
        address: address,
        email  : email
    };

    next();

};
