'use strict'

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  user.mood = 'happy';
  user.hobby = 'javascript';
  user.premium = false;

  
const objectElements = Object.entries(user);

  for (let objectElement of objectElements) {
      const key = objectElement[0];
      const value = objectElement[1];
      console.log(`${key}: ${value}`);  
    }