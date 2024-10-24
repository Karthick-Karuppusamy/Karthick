  const School = {
    Name : "SNS",
    Location : "Coimbatore",
    StudentsDetails : {
      StudentId1 : {
        Name : "John",
        Grade : "A"
      },
      StudentId2 : {
        Name : "Jacky",
        Grade : "B+",
      },
      StudentId3 : {
        Name : "Arnold",
        Grade : "B"
      }
    }
  };

  for (let i in School.StudentsDetails){
    console.log("Name :", School.StudentsDetails[i].Name,"\n",
                "Grade :", School.StudentsDetails[i].Grade);
  }

const Inventory = [
  Store1 ={
    ItemName : "Rice",
    Quantity : "10 KG",
    Price :  800
  },
  Store2 = {
    ItemName : "Sugar",
    Quantity : "2 KG",
    Price :  50
  },
  Store3 = {
    ItemName : "Atta",
    Quantity : "5 KG",
    Price :  250
  }
];

for(let i in Inventory)
{
  console.log("Grocery Item :", Inventory[i].ItemName, "\n Current availability :", Inventory[i].Quantity)
}

const BookDetails = [
  Book1 = {
    Title : "The Psychology of Money",
    Author : "Morgan Housel",
    YearofPublished : 2020
  },
  Book2 = {
    Title : "The Richest Man In Babylon",
    Author : "George Samuel Clason",
    YearofPublished : 1926
  },
  Book3 = {
    Title : "Rich Dad Poor Dad",
    Author : "Robert Kiyosaki",
    YearofPublished : 1997,
  }
];

for (let i = 0; i < BookDetails.length; i++) {
  console.log("Title :", BookDetails[i].Title,"\n Year of published :", BookDetails[i].YearofPublished); 
  }
 