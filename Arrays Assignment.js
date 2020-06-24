//var originalFlavors = ["Banana Nut Fudge",
"Black Walnut",
"Burgundy Cherry",
"Butterscotch Ribbon",
"Cherry Macaron",
"Chocolate",
"Chocolate Almond",
"Chocolate Chip",
"Chocolate Fudge",
"Chocolate Mint",
"Chocolate Ribbon",
"Coffee",
"Coffee Candy",
"Date Nut",
"Eggnog",
"French Vanilla",
"Green Mint Stick",
"Lemon Crisp",
"Lemon Custard",
"Lemon Sherbet",
"Maple Nut",
"Orange Sherbet",
"Peach",
"Peppermint Fudge Ribbon",
"Peppermint Stick",
"Pineapple Sherbet",
"Raspberry Sherbet",
"Rocky Road",
"Strawberry",
"Vanilla",
"Vanilla Burnt Almond"]

Task 1: 
function is31Flavors(countFlavors){

console.log (is31Flavors)

}

Task 2: 
function addFlavor(){
    flavors[0] = 'Rainbow Sherbert';

console.log (addFlavor)

}


Task 3: 
function removeLastFlavor(){

console.log (flavors[flavors.length - 1])

}

/* Task 4: Write a function that returns a flavor at a given index in the array.
Your function should accept:
(1) an array 
(2) an index
For example, getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully. */

function getFlavorByIndex(arrayProvided, num){

console.log (arrayProvided[nun]);

}

getFlavorByIndex(originalFlavors, 1)

/* Task 5: As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that flavor from the array. 
Your function should accept: 
(1) an array
(2) a string (flavor)
For example, removeFlavorByName(originalFlavors, "Vanilla") would return an array with the length 30 including all of the flavors except Vanilla. 
Hint: You can use .splice() for this
*/

function removeFlavorByName(array, flav){
for (i = 0; i < array.length; i++){
if (flav === array[1]){
    array.splice(i, 1)
}
}
    return array; 
}



