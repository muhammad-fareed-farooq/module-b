//  function name (num){
//        num = "String"
//        return num
//  }

//  let h = 7 
//  let result = name(h)
 
//  console.log(h);
//  console.log(result);

    
// let obj = {
//     name:"your name",
//     city : "your city"
// }

//  let newuser = obj 
 
//   obj.name = "fareed"
//   obj.city = "karachi"

// const {name,city} = newuser

// console.log(obj.name ,obj.city);
// console.log("name",name ,"city", city);


//  let obj = {
//     name:"fareed",
//     city : "karachi"
// }

// const {name:myname, city:mycity } = obj

// console.log("name :", myname,"  ," ,"city :" ,mycity);

// initializing new variable

// const newobj = {
//     name: "fareed",
//     city :"karachi"
// }

// assigning referance variable to another one

// const user = newobj


// changing values of user reference object


// user.name ='user 0003'
// user.city = 'karachi'

// console.log(newobj );
// console.log(user);


// // destractureing the obj - user 

// const {name,city} = user

// console.log('name',name,"city",city);

// /// assigment value to new variable while estructuing

// const {name:user_name , city:user_city} =user


// console.log(user_name);
// console.log(user_city);



// function hj(x){
//     return `hello ${x}`

// }
// console.log(hj("shan!"));


const data_obj = {
    title:"Product Title",
    description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image_url:'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8='
}

const

const card = document.getElementById("inner_html")

card.innerHTML = `<div class="card" style="width: 18rem;">
<img src="${card_img_url}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${card_title}</h5>
  <p class="card-text">${card_description}</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>` 
