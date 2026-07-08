function pass(kind:string | number){
    if(typeof kind==='string' ){  //giving the proof that it is string = type Narrrowing
        return `password ${kind}`;
    }
    return `password: ${kind}`;
}

function gotPass(msg?:string){  //truthiness Narrowing: actually it means : msg:string|undefined
if(msg){
        return `Available pass ${msg}`;
    }
    return `Did not got yet`;
}

function passLevel(type:"easy" | "medium" | "hard"   //literal narrowing
    | number){
        if(type==="easy"){
            return `Password is easy`;
        }
        if(type==="medium" || type==="hard"){
            return `Will work`;
        }
        return `only numbers in password`;
    }
  //instanceof Narrowing
class insta{
    pswrd(){
        return `instgram password`;
    }
}
class facebook{
    pswrd(){
        return `facebook password`;
    }
}

function pswrd(platform: insta | facebook){
    if(platform instanceof insta){
        return platform.pswrd();
    }
    
}

//khud se type bnana(User Defined Type Guard)
type pass={
    type:string;
    length:number;
}

function anyPass(obj:any):obj is pass{   //obj is pass means-obejct is defines of type pass
    return (
        typeof obj==="object" &&
        obj!==null &&
        typeof obj.type==="string" &&
        typeof obj.length==="number"
    )
}

function getPass(item:pass | string){
    if(anyPass(item)){
        return `Got password ${item.type} with ${item.length}`;
    }
    return `Random pass: ${item}`;
}


//example
type instaPass={type:"insta"; story:"reel"};
type wpPass={type:"wp"; status:"quotes"};
type fbPass={type:"fb"; post:"pic"};

type platform=instaPass | wpPass | fbPass;  //all the three object have common prop: type : called Discriminant

function accessPass(handle:platform){
    switch(handle.type){
        case "insta":
            return "Insta pass"
            break;
        case "wp":
            return "whatsapp pass"
            break;
        case "fb":
            return "facebook pass"
            break;
    }
}

//operator narrowing
function getEx(platform: instaPass | wpPass){
    if("status" in platform){
        // belongs to whatsapp
    }
}


function isStringArray(arr:unknown):arr is string[]{
    //unknown means avi k liye pta nhi h but agr aage kvi array 
    // k prop use kre toh phle define kr de type 
}