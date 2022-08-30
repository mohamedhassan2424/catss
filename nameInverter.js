const nameInverter = function(name) {
    name=name.trim()
   
    const nameSpilts=name.split(' ');
    //['Dr.']
    if(name===undefined){
        return 'throw Error'
    }
    if (!name) {
        return "";
      }
    
      if(nameSpilts.length===1 && nameSpilts[0]==='Dr.'){
        return "";
      };
      
      if(nameSpilts.length===2 && nameSpilts[0]==='Dr.' ){
        return name;
      };
      if(nameSpilts.length===3 && nameSpilts[0]==='Dr.' ){
        return `${nameSpilts[0]} ${nameSpilts[2]}, ${nameSpilts[1]}`;
      };

    if(nameSpilts.length === 1){
        return name;
     }
     
     if(nameSpilts.length >=2){
        
        return nameSpilts.reverse().join(", ");
     };
     
      //name=name.spilt();
      //console.log(name)
    };
//console.log()
module.exports=nameInverter;
