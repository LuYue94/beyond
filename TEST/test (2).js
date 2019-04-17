var f =function (x) {
    return x.length;
}

var curry = function(f){
    var len = f.length;
    var ret = function(){
        var args = Array.prototype.slice.call(arguments);
        if(args.length<len){
            return function(){
                return ret.apply(null,args.concat(Array.prototype.slice.call(arguments)));
            }
        }
        return f.apply(null,args);
    };
    return ret;
}

var g = curry(function(x,y,z){
    return x+y+z;
})(1,2);

g(1,2,3).