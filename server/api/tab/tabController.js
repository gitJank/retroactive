var Tab = require('./tabModel');
var _ = require('lodash');

exports.params = function(req, res, next, id){
    Tab.findById(id)
        .then(function(tab) {
            if(!tab){
                next(new Error('tab not found'));
            } else {
                req.tab = tab;
                next();
            }
        }, function(err) {
            next(err);
        });
};

exports.get = function(req, res, next) {
    Tab.find({})
        .then(function(tabs) {
            res.json(tabs);
        }, function(err){
            next(err);
        });
};

exports.getOne = function(req, res, next) {
    var tab = req.tab;
    res.json(tab);
};

exports.put = function(req, res, next) {
    var tab = req.tab;

    var update = req.body;

    _.merge(tab, update);

    tab.save(function(err, saved) {
        if(err) {
            next(err);
        } else {
            res.json(saved);
        }
    });
};

exports.post = function(req, res, next){
    var newtab = req.body;

    Tab.create(newtab)
        .then(function(tab) {
            res.json(tab);
        }, function(err) {
            next(err);
        });
};

exports.delete = function(req, res, next) {
    req.tab.remove(function(err, removed) {
        if (err) {
            next(err);
        } else {
            res.json(removed);
        }
    });
};