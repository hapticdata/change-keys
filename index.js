/**
* create a new object with the keys modified
* @param {Object} object
* @param {Object} transf transformations to make
* @return new transformed object
*
* @example
*  modifyKeys({ x: 25, y: 0, opacity: 0.5 }, { x: 'left', y: 'top' })
*  => { left: 25, y: 0, opacity: 0.5 }
*
*  @example
*  modifyKeys([
*      { x: 5, y: 5, o: 0.5 },
*      { x: 10, y: 10, o: 0.4 }
*  ],  { x: 'left', y: 'top' });
*  => [{ left: 5, top: 5, o: 0.5 },{ left: 10, top: 10, o: 0.4 }]
*/
module.exports = function changeKeys( object, transf ){
    return Array.isArray(object) ?
        object.map(function iterator(o){ return change(o, transf); }) :
        change(object, transf);
};


function change( object, transf ){
    var obj = {};
    for( var prop in object ){
        obj[ transf.hasOwnProperty(prop) ? transf[prop] : prop ] = object[prop];
    }
    return obj;
}


