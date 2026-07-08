type ChaiOrder={
    type:string; 
    sugar: number; 
    strong: boolean
};
function makeChai(order: ChaiOrder){
    console.log(order);
}
    

function serveChai(order: ChaiOrder){
    console.log(order);
}
    
type teaReceipe={
    water:number;
    mikl:number;
}

class masalaChai implements teaReceipe{
    water=100;  //without value give error (can  take type/interface)
    mikl=50;
}

type cupSize="small" | "large";
//=> convert type to interface
class chai implements cupSize{
//error dega type k liye
}
interface cupSizee{
    size:"small" | "large";
}

class chaii implements cupSizee{
    size:"small"|"large"="large";  //no error
}

//**idea;; class implemnt k liye interface bna k implements kro not by type
    
//another issue

type response={ok: true}|{ok:false}
class myRes implements response{
    ok:boolean=true; //error (imterface bnna k kro)
}

//union and intersection

type tType="abc"|"bcd"|"xyz"  //union

function orderT(t:tType){
    console.log(t);
}

type normalT={teaLeaves:number}
type masala={ingredient:string}

type masalaTea= normalT & masala;       //intersetion of two type
    
const cup:masalaTea={
    teaLeaves:2,
    ingredient:"masala"
}

//optional value

type user={
    username:string
    bio?:string //optional: value do ya na do
}

const u1:user={username:"Aditya"}
const u2:user={username:"Aditya",bio:"PPP"} //both accept


//readOnly:one time value asign(wont change later)

type Config={
    readonly appName:string
    version:number
}

const cfg:Config={
    appName:"choro",
    version:1
}
cfg.appName="Change mhi kr skte"
