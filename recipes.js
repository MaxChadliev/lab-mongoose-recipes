const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const data = require('./data.js')

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('hay girl hayyyyy!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

  //iteration 1
  const recipeSchema = new Schema ({
    title: {type: String, required:true, unique: true},
    level: {type: String,  enum: ["Easy Peasy" , "Amateur Chef" , "UltraPro Chef"]},
    ingredients:[],
    cousine: {type: String, required: true},
    dishType: {type: String, enum: ["Breakfast" , "Dish" , "Snack" , "Drink" , "Dessert" , "Other"]},
    image: {type: String, default: 'https://images.media-allrecipes.com/images/75131.jpg'},
    duration: {type: Number, min: 0},
    creator: String,
    created: {type: Date, default: Date.now}
  })

var Recipe = mongoose.model('Recipe', recipeSchema);


// iteration 2
// Recipe.create({
//   title:"Cheeseburger",
//   level: "Easy Peasy",
//   ingredients:["ground beef", "cheese", "bun", "pickles", "ketchup"],
//   cousine: "American",
//   dishType: ['Dish'],
//   image: "https://www.redrobin.com/content/dam/web/menu/gourmet-burgers/gourmet-cheeseburger-1100.jpg",
//   duration: 20,
//   creator: "Chef Curry",
//   created: 1969

// })
// .then((res) => { console.log(res.title)})
// .catch((err) => { console.log(err)});

//iteration 3

// Recipe.insertMany(data)
//   .then((res) => {
//     res.forEach((Recipe) => {
//       console.log(Recipe.title)
//     });
//   })
//   .catch((err) => { console.log(err)});

  // iteration 4

  // Recipe.updateOne({ title: "Rigatoni alla Genovese"}, { duration: 100 })
  // .then((res) => {console.log("success bitch!",res)})
  // .catch((err) => {console.log(err)});  


  //iteration 5

  // Recipe.deleteOne({title: "Carrot Cake"})
  // .then((res) => {console.log("success bitch!",res)})
  // .catch((err) => {console.log(err)}); 

  // Iteration 6
setTimeout(()=>{
  mongoose.disconnect()
  .then(()=>{console.log("byeeee")})
},1000)
