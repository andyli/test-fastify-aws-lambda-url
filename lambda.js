'use strict';

module.exports.endpoint = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(event, null, "\t"),
  };

  callback(null, response);
};
