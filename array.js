var myobj= [5, [22], [(14)], [[4]],[5,6]];
var a=[].concat.apply([],myobj);
var b=[].concat.apply([],a);
console.log(b);
