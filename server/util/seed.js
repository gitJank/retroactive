const User = require('../api/user/userModel');
const Item = require('../api/item/itemModel');
const _ = require('lodash');
const logger = require('./logger');

logger.log('Seeding the Database');

let users = [
  {username: 'Jimmylo', password: 'test'},
  {username: 'Tod', password: 'test'},
  {username: 'katamon', password: 'test'}
];

let items = [
  {name: "this is item 1"},
  {name: "this is item 2"},
  {name: "this is item 3"},
  {name: "this is item 4"},
  {name: "this is item 5"},
  {name: "this is item 6"},
  {name: "this is item 7"},
];

let createDoc = function(model, doc) {
  return new Promise(function(resolve, reject) {
    new model(doc).save(function(err, saved) {
      return err ? reject(err) : resolve(saved);
    });
  });
};

let cleanDB = function() {
  logger.log('... cleaning the DB');
  let cleanPromises = [User, Item]
    .map(function(model) {
      return model.deleteMany({}).exec();
    });
  return Promise.all(cleanPromises);
};

let createUsers = function(data) {
  let promises = users.map(function(user) {
    return createDoc(User, user);
  });

  return Promise.all(promises)
    .then(function(users) {
      return _.merge({users: users}, data || {});
    });
};

let createItems = function(data) {
  let promises = items.map(function(item) {
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
