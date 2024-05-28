const persons = [
    { name: "John", city: "Boston", yearOfBirth: 2000 },
    { name: "Jane", city: "New York", yearOfBirth: 1995 },
    { name: "Mike", city: "Los Angeles", yearOfBirth: 1985 }
  ];
  
  function getUserData(userName) {
    const user = persons.find(person => person.name === userName);
    if (!user) {
      throw new Error('Unable to find user');
    }
    return user;
  }
  
  function showUserInfo(userName) {
    console.log('Loading');
    try {
      const user = getUserData(userName);
      console.log(user); 
      console.log('Loading finished');
    } catch (error) {
      console.log(error.message); 
      console.log('Loading finished');
    }
  }
  
  // Виклик функції для перевірки
  showUserInfo('John'); showUserInfo('Alice');
 