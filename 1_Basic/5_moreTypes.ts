let response:any="42";
//still no type is confirmed for respomse
let numericLength:number=(response as string).length;//forecefull type converson


//ex
type Book={  //definning type
    name:string;
}

let bookString='{"name":"The secret"}';  //store object in string
let bookObject = JSON.parse(bookString) as Book; //first the string bookString was string in local 
//so we convert it into object by json.parse
//then forcefully make it as Book data type;i.e called Type assertion

console.log(bookObject);

//type assertion
const inputElement=document.getElementById("username") as HTMLInputElement

//unknown vs any

let value:any
value="abc"
value=[2,4,6]
value=2.5
value.toUpperCase();  //it wont show any error but in unknown

let val:unknown
val="abc"
val=[2,4,6]
val=2.5
val.toUpperCase(); //show error so we will have to guard it 
if(typeof val==="string"){  //type guarding
    val.toUpperCase();
}

//unknown ko btana pdta h
const data:unknown="abc"
const newData:string=data //error,rather btao konsa data h ye
const newData2:string=data as string;

//try catch block

try {
    
} catch (error) {
    console.log(error.message) //.message nhi kr skte qki pta nhi qki error ka data type nhi pta
}

//for time being we can use any for safe
try {
    
} catch (error:any) {
    console.log(error.message);
    
}

//agr any v htana h toh GUARD CHECK krenge

try {
    
} catch (error) {
    if(error instanceof Error){  //guard check
        console.log(error.message);
    }
    console.log("Error: ",error);
    
}

//never 
type Role="admin" | "user";
function redirectRole(role:Role):void{
    if(role==="admin"){
        console.log("admin redirect");
        return;
        
    }
    if(role==="user"){
        console.log("admin redirect");
        return;
    }

    role; //there are only two role so if  we hover here i will show never
    //but agr yha koi v role chhut rha hota to hover krne pe dikhta
}

function neverReturn():never{
    while(true){}   //return nothing infinite run
}