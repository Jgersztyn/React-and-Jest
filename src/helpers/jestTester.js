const functions = {
    // Simple function that takes two integers and returns the result of them added together
    add: (num1, num2) => num1 + num2,
    // Function that takes no parameter and returns a null
    isNull: () => null,
    // Function that returns the same value it is passed in through the one parameter
    checkValue: (x) => x,
    // Function to create an individual user object with first name and last name
    createUser: () => {
        const user = { firstName: 'Brad', lastName: 'Bateman' }
        // OR user['lastName'] = 'Bateman';
        return user;
    },
    // Function to return string
    getString: () => 'Yeah, man.'
  };
  
  //export default functions;
  module.exports = functions;