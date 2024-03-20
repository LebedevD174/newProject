const upForm = document.querySelector('.upForm');
const inForm = document.querySelector('.inForm');

if (upForm) {
  upForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      login, password, name, email,
    } = e.target;
    const user = await fetch('/auth/api/sign-up', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        login: login.value,
        password: password.value,
        name: name.value,
        email: email.value,
      }),
    });
    const data = await user.json();
    // console.log(data.message);
    if (data.message === 'success') {
      window.location.assign('/');
    } else {
      alert(data.message);
    }
  });
}

if (inForm) {
  inForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      login, password,
    } = e.target;
    const user = await fetch('/auth/api/sign-in', {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        login: login.value,
        password: password.value,
      }),
    });
    const data = await user.json();
    console.log(data.message, '+++++++++++++++++++++++++++++++');
    if (data.message === 'success') {
      
      // window.location.assign('/');
    } else {
      alert(data.message);
    }
  });
}
