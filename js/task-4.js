const form = document.querySelector('.login-form');

form.addEventListener("submit", e => {
    e.preventDefault();
    if (form.elements.email.value.trim() === "" || form.elements.password.value.trim() === "") {
        return alert('All form fields must be filled in')
    }
    const formdate = {
        [form.elements.email.name]: form.elements.email.value.trim(),
        [form.elements.password.name]: form.elements.password.value.trim(),
    }
    console.log(formdate);
   form.reset() 
});
