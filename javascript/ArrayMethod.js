function reverseString()
{
    let word = "Hello";
    let splitWord = word.split("");
    let reverseWord = splitWord.reverse();
    let joinWord = reverseWord.join("");
    console.log("Original String :", word);
    console.log("Reverse String :", joinWord);
}
reverseString();



function palindrome()
{
    let car = "racecar";
    let SplitName = car.split("");
    let reverseName = SplitName.reverse();
    let joinName = reverseName.join("");
    console.log("Original String :",car);
    console.log("Reverse String :",joinName);
    if(car === joinName)
    {
        console.log("True");
    }
    else
    {
        console.log("False");
    }
}
palindrome();


function countVowels(str) 
{
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}
  console.log(countVowels("hello world"));



function duplicateChar(remo)
  {
  let addName = " ";
  for(let i=0; i<remo.length;i++)
  {
   if(addName.indexOf(remo[i])== -1)
     {
      addName += remo[i];
     }
  }
  return addName
  }
  console.log(duplicateChar("hellooo"));

  
function removeDuplicates(array)
  {
    return array.filter((value, index) => array.indexOf(value) === index);
  }
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4]))

  

function nestedArray()
{
    let ArrayNum = [ 1, [2,3], [4,[5]]];
    let nestArray = ArrayNum.flat();
    console.log("Original Array :",ArrayNum);
    console.log("Nested Array :",nestArray);
}
nestedArray();



function findCommonElements(arr1, arr2) 
{
    return arr1.filter(element => arr2.includes(element));
}
  console.log(findCommonElements([1, 2, 3], [2, 3, 4]));

function chunkArray(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
}
  console.log(chunkArray([1, 2, 3, 4, 5], 2));

  const Num = [1,5,3];
  let Maximum = Math.max(...Num);
  let Minimum = Math.min(...Num);
  console.log("Math.Max Values:", Maximum);
  console.log("Math.Min Values:", Minimum);
 

  




