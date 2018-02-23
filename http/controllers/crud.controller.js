const StudentRepos = require('../../src/student.repos');
const mysqlConnect = require('../../database/mysqlConnect');

const studentRepos = new StudentRepos(mysqlConnect);

exports.create = (req, res, next) => {
    studentRepos.create(req.rawData)
        .then(() => {
            res.status(200).json({message: 'Done!'});
        })
        .catch(next());
};

exports.findAll = (req, res, next) => {
    studentRepos.findAll()
        .then(() => {

        })
        .catch(next());
};

exports.findOne = (req, res) => {

};

exports.edit = (req, res) => {

};

exports.delete = (req, res) => {

};
