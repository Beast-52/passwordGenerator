document.getElementById('btn').addEventListener('click', generatePassword);

function generatePassword() {
    const length = document.getElementById('total-char').value;
    const includeUppercase = document.getElementById('upper-case').checked;
    const includeLowercase = document.getElementById('lower-case').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let charSet = '';
    if (includeUppercase) charSet += uppercaseChars;
    if (includeLowercase) charSet += lowercaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;
    
    if (charSet === '') {
        alert('Please select at least one character set.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    const passBox = document.getElementById('pass-box');
    passBox.textContent = password;
    window.navigator.clipboard.writeText(password)
    passBox.classList.add('active');
    setTimeout(() => {
        passBox.classList.remove('active');
    }, 300);
}
