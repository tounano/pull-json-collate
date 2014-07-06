var _ = require("underscore");
var pull = require("pull-stream");

module.exports = pull.Through( function (read) {
  var obj = {};
  var ended = false;
  return function next (end, cb) {
    if (ended) return cb(ended);

    read(end, function (end, data) {
      if (end) {
        ended = end;
        cb(null, obj);
        obj = {};
        return;
      }

      obj = _.extend(obj, data);
      next(end, cb);
    })
  }
});