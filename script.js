//! 1) return a new array that contains two arrays:
//*     the first contains adult females
//*     the second contains adult males

const persons = [
    {name:"Mary", age: 32, sex:"female"},
    {name:"Tony", age: 36, sex:"male"},
    {name:"John", age: 12, sex:"male"},
    {name:"Jane", age: 6, sex:"female"},
    {name:"Carl", age: 37, sex:"male"},
    {name:"Homer", age: 45, sex:"male"},
    {name:"Lenny", age: 39, sex:"male"},
    {name:"Lisa", age: 11, sex:"female"},
    {name:"Bart", age: 12, sex:"male"},
    {name:"Marge", age: 44, sex:"female"},
]

//! 2) DOM manipulation

//* use a value from a prompt and apply it
const newColor = prompt("What is the new color?")

const getBackgroundColor = document.querySelectorAll(".grey-bg")

//! don't do this
// getBackgroundColor.style.backgroundColor = newColor

//! using for loop
for(let i = 0; i < getBackgroundColor.length; i++){
    getBackgroundColor[i].style.backgroundColor = newColor
}

//! using forEach
// getBackgroundColor.forEach(element => element.style.backgroundColor=newColor)

///! convert nodeList to an Array and using map
// const bgArray = Array.from(getBackgroundColor)

// bgArray.map(element => element.style.backgroundColor=newColor)

//* use an array and add/change text on html
const olPosts = document.querySelectorAll(".posts li")
console.log(olPosts)

const titlePosts = ["Week 1 - Integration", "Week 2 - Project 1", "Week 3 - Checkpoint", "Week 4 - Project 2"]
console.log(titlePosts)

//! don't do this
//olPosts.innerHTML = "Title"

//! using for loop
for(let i = 0; i < olPosts.length ;i++){
    olPosts[i].innerHTML = titlePosts[i]
}

//! using map to get title from array and use forEach to use elements of NodeList
// titlePosts.map(title => {
//     olPosts.forEach(element => element.innerHTML = title)
// })

