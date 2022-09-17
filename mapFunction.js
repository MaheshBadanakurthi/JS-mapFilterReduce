// // map for multiplying numbers
// let numbers=[123,456,3451,23,123]
// let newNumbers=numbers.map(mapFunction);
//  function mapFunction(num){
//     return num*5;
//  }
//  console.log(newNumbers);


// //  for multiply
// let num=[23,3456,2345123,23]
// let result=num.map(x=>x*3);
// console.log(result);

// //  cube  root;
// let  str=[121,125,343,789];
// let cube=str.map(x=>Math.cbrt(x));
// console.log(cube);


//objects
let samObject=[{key:'movie', value:'RRR'},     {key:'Music',value:'Keeravani'},    {key:'Heros' ,value:'NTR RamCharan'},{key:'Heros' ,value:'NTR RamCharan'},{key:'Heros' ,value:'NTR RamCharan'}]
let result=samObject.map(({key,value})=>({[key]:value}));
console.log(result)




