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

  
const objectKeys = Object.keys(user);


  for (const objectKey of objectKeys) {
      console.log(`${objectKey}: ${user[objectKey]}`);  
    }