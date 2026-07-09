//object
const Chai={
    name:"Masala chai",
    price:20,
    isHot:true
}

//define a tea type

let tea:{
    name:string;
    price:number;
    isHot:boolean
}

//object
tea={
    name:"abc",
    price:25,
    isHot:true
}

type Tea={
    name:string;
    price:number;
    ingredients:string[]
}

const AdrakChai:Tea={
    name:"adrak",
    price:25,
    ingredients:["ginger"]
}

type Cup={size:string};
let smallCup:Cup={size:"200ml"}
let largeCup={size:"500ml",material:"steel"}

smallCup=largeCup;

type brew={brewTime:number}
const coffee={brewTime:5,brean:"Arabica"}
const chaiBrew:brew=coffee

//**use multipple data types in one
type Item={name:string,quantity:number}
type Address={street:string ,pin:number}

type Order={
    id:number;
    items:Item[];
    address:Address
}

//use in diffrent way
type Chai={
    name:string;
    price:number;
    isHot:boolean
}
//partial--properties optional kr deta hai..sare prop hone jruri nhi h
const updateChai=(updates:Partial<Chai>)  =>{
    console.log("updating chai with",updates);
}

updateChai({price:25})
updateChai({isHot:false})
updateChai({})

//required
type ChaiOrder={
    name:string;
    price:number;
}

const placeOrder=(order:Required<ChaiOrder>)=>{
    console.log(order);
}

placeOrder({
    name:"Masla",
    price:20,//dono hi prop deni pdegi
    
})

type chaiOrder={
    name:string;
    price:number;
    isHot:boolean;
    ingre:string[]
}

//pick --jo jo prop need h usse pick krna
type basicInfo=Pick<chaiOrder,"name" | "price">
const chaiInfo:basicInfo={
    name:"abc",
    price:20  //hamne bs inhe pick kra tha
}

//omit--chupana
type NewChaiOrder={
    name:string;
    price:number;
    isHot:boolean;
    SecretIngre:string[]
};

type PublicChai=Omit<NewChaiOrder,"SecretIngre">;





    