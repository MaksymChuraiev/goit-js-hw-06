const form = document.querySelector('.login-form');

const handleSubmit = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('All fields must be filled');
  } else {
    const object = { email: email.value, password: password.value };
    console.log(object);

    form.reset();
  }
};

form.addEventListener('submit', handleSubmit);
