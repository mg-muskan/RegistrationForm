const registerPassword = document.getElementById('registration-password');
const registerConfirmPassword = document.getElementById('registration-confirm-password');
const progressbar = document.getElementById('registration-password-bar');
const confirmProgressbar = document.getElementById('registration-confirm-password-bar');
const passwordStrength = document.getElementById('user-registration-password-progress');
const cPasswordStrength = document.getElementById('user-registration-confirm-password-progress');

registerPassword.addEventListener("input", () => {
    checkStrength(registerPassword.value, progressbar, passwordStrength);
});

registerConfirmPassword.addEventListener("input", () => {
    checkStrength(registerConfirmPassword.value, confirmProgressbar, cPasswordStrength);
});

function checkStrength(password, bar, strengthPassword) {
    let strength = 0;

    if(password.length != 0) {
        strengthPassword.style.display = 'block';
    }
    else {
        strengthPassword.style.display = 'none';
    }

    if(password.match(/(?=.*[A-Z])/)) strength++;
    if(password.match(/(?=.*[a-z])/)) strength++;
    if(password.match(/(?=.*[0-9])/)) strength++;
    if(password.match(/(?=.*['!@#$%^&*])/)) strength++;
    if(password.match(/(?=.{8,})/)) strength++;

    switch(strength) {
        case 0: bar.style.cssText = `width: ${(strength / 5) * 100}%; background-color: unset;`;
            break;
        case 1: bar.style.cssText = `width: ${(strength / 5) * 100}%; background-color: red;`;
            break;
        case 2: bar.style.cssText = `width: ${(strength / 5) * 100}%; background-color: orangered;`;
            break;
        case 3: bar.style.cssText = `width: ${(strength / 5) * 100}%; background-color: gold;`;
            break;
        case 4: bar.style.cssText = `width: ${(strength / 5) * 100}%; background-color: blue;`;
            break;
        case 5: bar.style.cssText = `width: ${(strength / 5) * 100}%; background-color: green;`;
            break;
    }
}
