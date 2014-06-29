var pull = require("pull-stream");
var jsonCollateStream = require("../");
var objects = [
  {a:"a"},
  {b:"b"}
]

pull(
  pull.values(objects),
  jsonCollateStream(),
  pull.drain(console.log)
)