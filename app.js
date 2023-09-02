let a=10;
function test(){
   // console.log("6",a);
    let a=50;
    console.log("1",a);
    {
        let a=60;
        console.log("2",a);
    }
    console.log("3",a);
}
test()
console.log("4",a);
let square1 = a =>{
    return a*a;
}
let b=square1(a);
console.log(b);
//function square(a){
 //   return a*a
//}

