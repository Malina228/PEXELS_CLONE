let initialState = {
  /*  dialogs: [
     { id: 1, name: 'Dimych' },
     { id: 2, name: 'Andrew' },
     { id: 3, name: 'Sveta' },
     { id: 4, name: 'Sasha' },
     { id: 5, name: 'Viktor' },
     { id: 6, name: 'Valera' }
   ],
   messages: [
     { id: 1, message: 'Hi' },
     { id: 2, message: 'How is your it-kamasutra?' },
     { id: 3, message: 'Yo' },
     { id: 4, message: 'Yo' },
     { id: 5, message: 'Yo' } 
   ]*/

  zalupa : [
    {id: 1, name: "forest"},
    {id: 2, name: "brooklyn"},
    {id: 3, name: "nature"},
    {id: 4, name: "flowers"},
    {id: 5, name: "sea"},
    {id: 6, name: "outdoors"},
    {id: 7, name: "san francisco"},
    {id: 8, name: "urban"},
    {id: 9, name: "statue of liberty"},
    {id: 10, name: "new york"}
  ],

  suggestions : [
    "forest",
    "brooklyn",
    "nature",
    "flowers",
    "sea",
    "outdoors",
    "san francisco",
    "urban",
    "statue of liberty",
    "new york",
    "street",
    "Cat",
    "Dogs",
    "Animal",
    "Dog And Cat",
    "Horse",
    "Pet",
    "Bird",
    "People",
    "Woman",
    "Golden Retriever",
    "Husky",
    "mountain",
    "Architecture",
    "Audi",
    "Automotive",
    "Car",
    "Daylight",
    "Fast",
    "Glass",
    "Luxury",
    "Parked",
    "Pavement",
    "Photography",
    "Red",
    "Road",
    "Street",
    "Transportation System",
    "Travel",
    "Vehicle",
    "Wheel"
  ] 

};



const mainReducer = (state = initialState, action) => {


  return state;
}

export default mainReducer;