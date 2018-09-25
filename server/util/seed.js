var User = require('../api/user/userModel');
var Item = require('../api/item/itemModel');
var _ = require('lodash');
var logger = require('./logger');

logger.log('Seeding the Database');

var users = [
  {username: 'Jimmylo', password: 'test'},
  {username: 'Tod', password: 'test'},
  {username: 'katamon', password: 'test'}
];

var items = [
  {name: "this is item 1"},
  {name: "this is item 2"},
  {name: "this is item 3"},
  {name: "this is item 4"},
  {name: "this is item 5"},
  {name: "this is item 6"},
  {name: "this is item 7"},
]

var createDoc = function(model, doc) {
  return new Promise(function(resolve, reject) {
    new model(doc).save(function(err, saved) {
      return err ? reject(err) : resolve(saved);
    });
  });
};

var cleanDB = function() {
  logger.log('... cleaning the DB');
  var cleanPromises = [User, Item]
    .map(function(model) {
      return model.deleteMany({}).exec();
    });
  return Promise.all(cleanPromises);
}

var createUsers = function(data) {
  var promises = users.map(function(user) {
    return createDoc(User, user);
  });

  return Promise.all(promises)
    .then(function(users) {
      return _.merge({users: users}, data || {});
    });
};

var createItems = function(data) {
  var promises = items.map(function(item) {
    return createDoc(Item, item);
  });

  return Promise.all(promises)
    .then(function(items) {
      return _.merge({items: items}, data || {});
    });
};

cleanDB()
  .then(createUsers)
  .then(createItems)
  .then(logger.log.bind(logger))
  .catch(logger.log.bind(logger));
