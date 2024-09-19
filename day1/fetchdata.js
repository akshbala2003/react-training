/*var checkUserById =   (id) => {
    
    return fetch("https://65abad15fcd1c9dcffc6d0f3.mockapi.io/api/getUsers/user")
    .then(res => {      
        if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
}
)
    .then(data => {
        const user = data.find(result => result.id == id)
        return user? user.name : `user with id ${id} not found`
        
    })
    .catch(error => console.log(error))

}

checkUserById(8).then(result => console.log(result))  */



const checkUserById = async (id) => {
  try {

    const response = await fetch("https://65abad15fcd1c9dcffc6d0f3.mockapi.io/api/getUsers/user");
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const user = data.find(result => result.id == id);
    return user ? user.name : `User with ID ${id} not found`;
    
  } catch (error) {
    return `Error fetching data: ${error.message}`;
  }
};

checkUserById(8).then(result => {
  console.log(result); 
});




