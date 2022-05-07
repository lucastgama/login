document.querySelector("#form-login").addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;


  if (email !='' && password !='') {
    let json = {
      email,
      password,
    };
    console.log(json)
  }else{
    console.log("preencha os caompos")
  }
});
