
const pass = document.getElementById("registration-password");
const cpass = document.getElementById("registration-confirm-password");
function passValidate() {
    const perror = document.getElementById("pass-message");
    const cperror = document.getElementById("cpass-message");
    if(pass.value.length < 8) {
        perror.innerHTML = "Password cannot be less than 8 characters";
        cperror.innerHTML = "";
    }
    else if(pass.value != cpass.value && cpass.value != '') {
        perror.innerHTML = "";
        cperror.innerHTML = "Please check your password";
    }
    else {
        perror.innerHTML = "";
        cperror.innerHTML = "";
    }
}

const rName = document.getElementById('user-reg-fullname')
const rEmail = document.getElementById('user-reg-email');
const rMobile = document.getElementById('user-reg-mobile');
const rDOB = document.getElementById('user-reg-dob');
const rGender = document.getElementsByName('gender');
const rUniversity = document.getElementById('user-reg-university');
const rCollege = document.getElementById('user-reg-college');
const rCourse = document.getElementById('user-reg-course');
const rBranch = document.getElementById('user-reg-branch');
const rSemester = document.getElementById('user-reg-semester');
const rSubmit = document.getElementById('user-registration-form');
const uniInput = document.getElementById('uni-other-in');
const branchInput = document.getElementById('branch-other-in');


rUniversity.onchange = () => {
    const uni = document.getElementById('university-other');
    if(rUniversity.value == 'other') {
        uni.classList.add('active');
    }
    else uni.classList.remove('active');
}

rBranch.onchange = () => {
    const branch = document.getElementById('branch-other');
    if(rBranch.value == 'other') {
        branch.classList.add('active');
    }
    else branch.classList.remove('active');
}

rMobile.oninput = () => {
    if (rMobile.value.length > rMobile.maxLength) {
        rMobile.value = rMobile.value.slice(0, rMobile.maxLength);
    }
}

const namePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
// const mailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const mailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const numberPattern = /^\+(?:[0-9] ?){6,14}[0-9]$/;
const numberPattern = /^[6-9]\d{9}$/;

function setError(id) {
    document.getElementById(`registration-${id}`).style.display = 'block';
}

function setSuccess(id) {
    document.getElementById(`registration-${id}`).style.display = 'none';
}

rSubmit.addEventListener('submit', e => {
    e.preventDefault();
    validate(e);
});

function validate(e) {
    const nameVal = rName.value.trim();
    const emailVal = rEmail.value.trim();
    const numberVal = rMobile.value.trim();
    let genderVal = false;
    let success = 0;
    
    if(!namePattern.test(nameVal) || nameVal=="") {
        setError('name');
    }
    else {
        setSuccess('name');
        success++;
    }

    if(emailVal=="" || !mailPattern.test(emailVal)) {
        setError('email')
    }
    else {
        setSuccess('email');
        success++;
    }

    if(numberVal=="" || !numberPattern.test(numberVal)) {
        setError('mobile')
    }
    else {
        setSuccess('mobile');
        success++;
    }

    if(rDOB.value == '') {
        setError('dob');
    }
    else {
        setSuccess('dob');
        success++;
    }

    for(let i = 0; i < rGender.length; i++) {
        if(rGender[i].checked) {
            genderVal = true;
            break;
        }
    }
    if(!genderVal) setError('gender');
    else {
        setSuccess('gender');
        success++;
    }

    if(rUniversity.value == '') setError('university');
    else if(rUniversity.value == 'other' && uniInput.value == '') setError('university');
    else {
        setSuccess('university');
        success++;
    }

    if(rCollege.value == '') setError('college');
    else {
        setSuccess('college');
        success++;
    }

    if(rCourse.value == '') setError('course');
    else {
        setSuccess('course');
        success++;
    }

    if(rBranch.value == '') setError('branch');
    else if(rBranch.value == 'other' && branchInput.value == '') setError('branch');
    else {
        setSuccess('branch');
        success++;
    }

    if(rSemester.value == '') setError('semester');
    else {
        setSuccess('semester');
        success++;
    }

    if(pass.value == '') setErrorPass('pass', 'Please enter your password', 'pass-message');
    else {
        setSuccess('pass');
        success++;
    }

    if(cpass.value == '') setErrorPass('cpass', 'Please confirm your password', 'cpass-message');
    else {
        setSuccess('cpass');
        success++;
    }

    if(success == 12) {
        document.getElementById('user-registration-submit-btn').style.display = 'none';
        document.getElementById('user-registration-submit-gif').style.display = 'block';
        e.target.submit();
    }

}

function setErrorPass(id, message, msgid) {
    document.getElementById(`registration-${id}`).style.display = 'block';
    document.getElementById(`${msgid}`).innerHTML = `${message}`;
}
