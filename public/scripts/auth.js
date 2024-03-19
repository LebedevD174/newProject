const formIn = document.querySelector('.inForm');
const formUp = document.querySelector('.upForm');

if (formIn) {
  formIn.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { login, password } = e.target;
    try {
      const res = await fetch('api/sign-in', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ login: login.value, password: password.value }),
      });
      const data = await res.json();
      if (data.message === 'success') {
        window.location.assign('/');
      } else {
        alert(data.message);
      }
    } catch ({ message }) {
      console.log(message);
    }
  });
}

if (formUp) {
  formUp.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      login, password, name, email,
    } = e.target;
    console.log(login.value);
    try {
      const res = await fetch('api/sign-up', {
        method: 'POST',
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
      const data = await res.json();
      if (data.message === 'success') {
        window.location.assign('/');
      } else {
        alert(data.message);
      }
    } catch ({ message }) {
      console.log(message);
    }
  });
}
