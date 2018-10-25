const Tab = require('../api/tab/tabModel');
const _ = require('lodash');
const logger = require('./logger');

logger.log('Seeding the Database');

let tabs = [
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
  let cleanPromises = [Tab]
    .map(function(model) {
      return model.deleteMany({}).exec();
    });
  return Promise.all(cleanPromises);
};

let createTabs = function(data) {
  let promises = tabs.map(function(tab) {
    return createDoc(Tab, tab);
  });

  return Promise.all(promises)
    .then(function(tabs) {
      return _.merge({tabs: tabs}, data || {});
    });
};

cleanDB()
  .then(createTabs)
  .then(logger.log.bind(logger))
  .catch(logger.log.bind(logger));
