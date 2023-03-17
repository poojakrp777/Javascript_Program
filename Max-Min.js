var randoms=[...Array(5)].map(()=>Math.floor(Math.random()*1000));
console.log(randoms);
var min=Math.min(...randoms);
console.log(min);

var max=Math.max(...randoms);
console.log(max);