function clearFields() {
    document.querySelectorAll('input[type="text"], input[type="password"], input[type="email"]').forEach(input => input.value = '');
    document.querySelector('input[name="remember"]').checked = false;
}