//array declaration
const chaiFlavours:string[]=["adrak","masala"]

const rating:Array<number>=[3,4,5]


//array of object
type chai={
    name:string;
    price:number;
}

const orders:Array<chai>=[
    {name:"masla",price:10},
    {name:"lemon",price:10}
]


//readonly array --cannot be modified
const cities:readonly string[]=["banglore","hyderabad"]

//cities.push("Pune") //error dega

//multidimensionl array

const table:number[][]=[
    [],
    []
]

//tuples
let chaiTuple:[string,number];
chaiTuple=["abc",20];

let userInfo:[string,number,boolean?]
userInfo=["aditya",20]
userInfo=["aditya",20,true]

const location:readonly [number,number]=[20,32];

//named  tuple

const chaiItems:[name:string,price:number]=["Maasla",25];

//enum  --user ko restrict krna

enum cupSizes{
    SMALL,
    MEDIUM,
    LARGE
}
const size=cupSizes.SMALL;

enum status{ 
    pending=100,
    served, //101
    cancelled //102
}
///agr ek ko value dia to saare ko individually dena pdega
// else auto inrement by 1

enum ChaiType{
    MASALA="masala",
    GINGER="ginger"
}

function makeChai(type:ChaiType){
    console.log(`Making ${type}`);
    
}

makeChai(ChaiType.GINGER) //auto suggestion on .

//heterogenous
//genrally ham same data type ko group krte h enum me
enum Random{
    ID=1,
    NAME="chai"
}

//const enum
const enum Sugars{
    LOW=1,
    MEDIUM=2,
    HIGH=3
}


//ex
let t:[string,number]=["abc",10]
t.push("xtra"); //we can push in tuples


