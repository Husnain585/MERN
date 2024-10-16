// const obj = {
//     name : "husnain",
//     age: 2002,
//     course: "Mern",
//     code:{
//         name: "023",
//         code: Number
//     },
//     array: [1,2,234,5,]
// }

// console.log(typeof obj.code.code);

// const car = {
//     userId : (()=> {
//         return Math.random();
//     })(),
//     name: "honda",
//     model: "honda",
//     year: 2020,
//     color: "red",
//     doors: 4,
// }
// console.log(typeof car);
// obj.age = 20;
// obj.hint = "funciton type obj";
// console.log(obj);
// obj.code.hint = "funciton type obj";
// console.log(obj);

// const array = [1,2,3,,4,5];
// const b = array[0];
// console.log(b);
// const [e, c,d,r,t,y,q,u,z] = array;
// console.log(e, c,d,r,t,y,q,u,z);

// let destruct = function({name}){
//     console.log(name);
// }
// console.log(destruct(car));

// const {name, year} = car;
// console.log(name);
// console.log(year);


// spread operator
// let newarr = [1,2,3,4,5];
// const b = [...newarr];
// console.log(b);

const main = (a,b)=> {
    console.log(a);
    console.log(b);
}
let arrray = [1,2,3,4,5];

main(...arrray);

const userId = (nmae,age)=> {
    console.log(a);
    console.log(b);
}

userId(obj);

// let {name, age} = obj;