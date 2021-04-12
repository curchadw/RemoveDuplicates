
let array = [1,1,2,3,4,5,5,6,5,6,7]

const removeDups = array =>{
  let newArr = []
  //loop through array that was passed into function
  for (let i = 0; i < array.length; i++){
    //this is checking to see the element exit in the new array
    if (!newArr.includes(array[i])){
      //if the element doesnt exist, the element is pushed into new array
      newArr.push(array[i])
    }
  } 
  //new array is returned
  return newArr
}


console.log(removeDups(array))

//or 

//this is more destuctive than the first method.
const removeDups2 = array =>{
  let newArr = []
  //loop through array that was passed into function
  for (let i = 0; i < array.length; i++){
    //this is checking to see the element exit in the new array
    
      //if the element doesnt exit, the element is pushed into new array
      newArr.includes(array[i]) ? newArr.splice(i,1) : newArr.push(array[i])
   
  } 
  //new array is returned
  return newArr
}


console.log(removeDups2(array))