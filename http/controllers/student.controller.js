exports.create = (req, res) => {
    req.app.studentRepos.create(req.data)
        .then(() => {
            res.status(200).json({message: 'Done!'});
        });
};

exports.findAll = (req, res) => {
    req.app.studentRepos.findAll()
        .then(students => {
            res.status(200).json(students);
        });
};

exports.findOne = (req, res) => {
    req.app.studentRepos.findOne(req.params.id)
        .then(student => {
            res.status(200).json(student);
        });
};

exports.edit = (req, res) => {
    req.app.studentRepos.edit(req.params.id, req.data)
        .then(() => {
            res.status(200).json({message: 'Done!'});
        });
};

exports.delete = (req, res) => {
    req.app.studentRepos.delete(req.params.id)
        .then(() => {
            res.status(200).json({message: 'Done!'});
        });
};
