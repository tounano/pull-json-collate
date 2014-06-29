# pull-json-collate

Collate json objects and send them downstream.

This `pull-stream` is combination of a Sink and a Through. It will sink all the objects from upstream, once upstream
reached it's end, it'll send downstream a combined object.

## Example

```js
var pull = require("pull-stream");
var jsonCollateStream = require("pull-json-collate");
var objects = [
  {a:"a"},
  {b:"b"}
]

pull(
  pull.values(objects),
  jsonCollateStream(),
  pull.drain(console.log)
)
```

**Result:**

```
{ a: 'a', b: 'b' }
```

## install

With [npm](https://npmjs.org) do:

```
npm install pull-cartesian
```

## license

MIT