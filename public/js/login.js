const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(response)

    if (response.ok) {
      document.location.replace('/add_child');
    } else {
      alert('Failed to log in');
    }
  }
};


const signupFormHandler = async (event) => {
  event.preventDefault();


  const first_name = document.querySelector('#firstname-signup').value.trim();
  const last_name = document.querySelector('#lastname-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (first_name && last_name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ first_name, last_name, email, password }),

      headers: { 'Content-Type': 'application/json' },
    });

    

    if (response.ok) {
      document.location.replace('/add_child');
      console.log('success!')
    } else {
      console.log('error');
      alert(response.statusText);
    }
  }
};


document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);



  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);

  // const login = async () => {
  //   const response = await fetch('/login', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  
  //   if (response.ok) {
  //     document.location.replace('/login');
  //   } else {
  //     alert(response.statusText);
  //   }
  // };
  
  // document.querySelector('#login').addEventListener('click', login);