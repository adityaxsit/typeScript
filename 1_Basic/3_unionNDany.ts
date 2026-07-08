//union
let cost:string|number=1000 //'1k' can be string or number
let apiRequest:'pending'|'success'|'failure'="pending"  //it can be only one of the three;;
 // error :  apiRequest="done"  ;cz done is not there 



 //any
const orders=['23','32','45','89']
let currentOrder1; //any 
let currentOrder:string | undefined;

for(let order of orders){
    if(order==='23'){
        currentOrder=order;
    }
}
console.log(currentOrder);
