/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


const findUserByUsername = ( usersArr, username ) => {
  return usersArr.find( ( user ) => {
    return user.username === username;
  });
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

const removeUser = ( usersArr, username ) => {
  let index = usersArr.findIndex( ( user ) => {
    return user.username === username;
  })
  if( index === -1 ) return; 

  return usersArr.splice( index, 1 )[ 0 ];
}