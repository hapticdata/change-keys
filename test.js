var test       = require('tape'),
    changeKeys = require('./index');

var numAssertions = 5;

var assert = function( t, original, result ){
    t.notDeepEqual(result, original, 'should be a different object');
    t.equal(result.left, original.x, 'should transform x to left');
    t.equal(result.top, original.y, 'should transform y to top');
    t.equal(result.opacity, original.opacity, 'should keep opacity');
    t.deepEqual(result.background, original.background, 'should keep reference to background');
};

test('modifies keys of a single object', function(t){
    var original = {
        x: 25,
        y: 12,
        opacity: 0.5,
        background: { color: 'black' }
    };
    var result = changeKeys(original,{
        x: 'left',
        y: 'top'
    });

    t.plan(numAssertions);
    assert(t, original, result);
});

test('modifies keys on a collection', function(t){
    var originals = [];
    for( var i=0; i<10; i++ ){
        originals.push({ x: Math.random(), y: Math.random(), opacity: Math.random() });
    }

    t.plan(numAssertions * originals.length);

    var results = changeKeys( originals, { x: 'left', y: 'top' });
    originals.forEach(function( o, i ){
        assert(t, o, results[i]);
    });
});

