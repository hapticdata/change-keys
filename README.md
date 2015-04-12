# change-keys

a simple utility to get a new object with transformed property names.

[![NPM](https://nodei.co/npm/change-keys.png)](https://npmjs.org/package/change-keys)


##Usage

On a single object:
```js
changeKeys({ x: 25, y: 0, opacity: 0.5 }, { x: 'left', y: 'top' })
//=> { left: 25, y: 0, opacity: 0.5 }
```

On a collection of objects:
```js
changeKeys([
    { x: 5, y: 5, o: 0.5 },
    { x: 10, y: 10, o: 0.4 }
],  { x: 'left', y: 'top' });
//=> [{ left: 5, top: 5, o: 0.5 },{ left: 10, top: 10, o: 0.4 }]
```

##License

MIT, see [LICENSE.md](http://github.com/hapticdata/change-keys/blob/master/LICENSE.md) for details.
