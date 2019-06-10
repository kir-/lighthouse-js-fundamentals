const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var x = ingredients.length;
var y = 0;
while(y<x){
  console.log(ingredients[y]);
  y++;
}
// Write a for loop that prints out the contents of ingredients:
for (var z = 0; z < x; z++){
  console.log(ingredients[z]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
while(x>=0){
  console.log(ingredients[x]);
  x--;
}