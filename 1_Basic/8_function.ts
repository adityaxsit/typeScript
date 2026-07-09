function makeChai(type:string,qty:number){  //data type of parameters
    console.log(`Making ${qty} cup of ${type}`);
}

makeChai("Lemon",2);

function getChaiPrice():number{  //retrun type
    return 25;
}

//logger function

function logChai():void{
    console.log(`abc`);
    
}


//optional pararemter
function orderChai(type?:string){

}

//default parametr  (optional)
function OrderChai(type:string="Masala"){

}
//optional functin wle ko end me likhte h generally

//ex
function createChai(order:{
    type:string;
    sugar:number;
    size:"small"|"large"
}):number{
    return 4;
}




    