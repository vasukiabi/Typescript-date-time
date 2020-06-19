



interface Date1 {   
    date :Date
     
 }  
 interface Time1 extends  Date1 {   
    
     
    time1:Date
    }

 let empObject = <Time1>{};   

 

console.log("Time1 = "+empObject.date);  
