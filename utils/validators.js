const validateName = (name) => {
    const nameRegex = new RegExp(/[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/);
    return nameRegex.test(name);
  };
  
  const validateEmail = (email) => {
    const emailRegex = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    return emailRegex.test(email);
  };
  
  const validatePassword = (password) => {
    const passwordRegex = new RegExp(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
    return passwordRegex.test(password);
  };
  
  // console.log(
  //   validateName("Naeem Ghadai"),
  //   validateEmail("sm47@gmail.com"),
  //   validatePassword("HelloWorld@6")
  // );
  
  module.exports = { validateName, validateEmail, validatePassword };