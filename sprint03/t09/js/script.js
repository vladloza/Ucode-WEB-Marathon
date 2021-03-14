let validator = {
    set: function(obj, property, value) {
        if(property === 'age') {
            if(!Number.isInteger(value))
                throw new TypeError('The age is not an integer');
            else if(value < 0 || value > 200)
                throw new RangeError('The age is invalid.')
        }
        console.log(`Setting value '${value}' to '${property}'`);
        obj[property] = value;
    },
    get: function(obj, property) {
        console.log(`Trying to access the property '${property}'...`);
        if(!property)
            return false;
        else return obj[property];
    }
}