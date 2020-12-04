var objectJ = require('./hw.json');

/*
for( let i=0 ; i <objectJ[0].topping.length ; i++ ){
    console.log(objectJ[0].topping[i].type);
 } */

 console.log('-----------------------------------');
 console.log('-------" All topping types"-------');
for(let i=0 ; i <objectJ.length ; i++ ){
    for(let x=0 ; x<objectJ[i].topping.length ; x++ ){
     console.log( objectJ[i].topping[x].type);
 }}

 console.log('-----------------------------------');

/*
 for( let i=0 ; i <objectJ[0].batters.batter.length ; i++ ){
    console.log( objectJ[0].batters.batter[i].type);
 }*/
 console.log('-------" All batter types"-------');
 for( let i=0 ; i <objectJ.length ; i++ ){
    for(let x=0 ; x<objectJ[i].batters.batter.length; x++ ){
        console.log(objectJ[i].batters.batter[x].type);
 }}

 console.log('-----------------------------------');
 console.log('-------" Ppu average "-------');
 var total = 0;
 for(var i = 0; i < objectJ.length; i++) {
    console.log(objectJ[i].ppu);      
     total += objectJ[i].ppu;
 }
 var avg = total / objectJ.length;
 console.log("the ppu avg" + avg);

 console.log('-----------------------------------');
 console.log('-------" Ppu sum"-------');
 var sum =0 ;
 for( let i=0 ; i <objectJ.length ; i++ ){
console.log(objectJ[i].ppu);   
 sum +=  objectJ[i].ppu;
 }
 var totalsum = sum;
 console.log( "the ppu sum "+totalsum);

 console.log('-----------------------------------');
 console.log('-------" List of all mentioned IDs regardless to the type "-------');
 function OBjectId(){
    console.log("all OBject id : ");
    for( let i=0 ; i <objectJ.length ; i++ ){
        console.log(objectJ[i].id + "  ");
     }
     }

 function batterId(){
console.log("all batter id : ");
for( let i=0 ; i <objectJ.length ; i++ ){
    for(let x=0 ; x<objectJ[i].batters.batter.length; x++ ){
        
        console.log(objectJ[i].batters.batter[x].id + "  ");
 }}
 }

 function toppingId(){
    console.log("all topping id : ");
    for( let i=0 ; i <objectJ.length ; i++ ){
        for(let x=0 ; x<objectJ[i].topping.length; x++ ){
            
            console.log(objectJ[i].topping[x].id + "  ");
     }}
     }
     OBjectId();
     batterId();
     toppingId();

     console.log('-----------------------------------');



 