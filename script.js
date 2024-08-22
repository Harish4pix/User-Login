document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    alert(`Username: ${username}\nPassword: ${password}`);
    
    // If you want to proceed with the form submission to Netlify:
    event.target.submit();
});
