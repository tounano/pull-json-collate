var _ = require("underscore");
var pull = require("pull-stream");

module.exports = pull.Through( function (read) {
  var obj = {};
  var ended = false;
  return function next (end, cb) {
    if (ended) return cb(ended);
    if (end === true) {ended = true; return cb(null, obj)};
    if (end) return cb(end);

    read(end, function (end, data) {
      if (end) return next(end, cb);
      obj = _.extend(obj, data);
      next(end, cb);
    })
  }
});