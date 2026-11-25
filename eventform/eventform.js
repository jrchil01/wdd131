const form = document.querySelector("#eventForm");
const type = document.querySelector("#type");
const inputContainer = document.querySelector("#inputContainer");
const input = document.querySelector("#lastInput");
const inputLabel = document.querySelector("#inputLabel");
const output = document.querySelector("#output");

function updateInputField() {
    const value = type.value;

    if(value === 'student'){
        inputContainer.hidden = false;
        inputLabel.innerHTML = "Student I#";
    }else if(value === 'guest'){
        inputContainer.hidden = false;
        inputLabel.innerHTML = "Access Code";
    }else{
        inputContainer.hidden = true;
    }
}

type.addEventListener("change", updateInputField);
updateInputField();


function isPastDate(value) {
    const today = new Date();
    const chosen = new Date(value);
    return chosen < today;
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    output.textContent = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = form.type.value;
    const date = form.date.value;
    const input = form.lastInput.value.trim();

    if(type === 'student' && input.length != 9){
        output.textContent = "Student I# should be 9 digits";
        return;
    }

    if(type === 'guest' && input != "EVENT131"){
        output.textContent = "Access code is incorrect";
        return;
    }

    if(isPastDate(date)){
        output.textContent = "Please choose a later date";
        return;
    }

    output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${email}</p>
    <p>${type}</p>
    <p>${date}</p>
    `;

    form.reset();
    updateInputField();
});