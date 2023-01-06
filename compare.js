var obj1 = {Name : "Anand",age : 30};
var obj2 = {age : 30,Name : "Anand"};
let iterate ;
let flag="equal";
(Object.keys(obj1).length>Object.keys(obj2).length)?iterate=obj1:iterate=obj2;
for(var key in iterate){
    if(obj1[key]!==obj2[key]){
        flag="Not equal";
        break;
        
    }
   }
 console.log("Two objects are : ",flag);
 