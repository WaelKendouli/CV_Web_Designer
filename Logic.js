const InputsUI = {

     fullName : document.getElementById('fullName'),
 position : document.getElementById('position'),
 email : document.getElementById('email'),
 phone : document.getElementById('phone'),
 linkedin : document.getElementById('linkedin'),
 github : document.getElementById('github'),
 photo : document.getElementById('photo'),
 AboutMe : document.getElementById('InpAboutMe'),
 Profile : document.getElementById('InpProfile'),
 Skills : document.getElementById('InpSkills'),
 TechTools : document.getElementById('InpTechTools')
}


const UIElements = {

 profileImage : document.getElementById('profileImage'),
 userName : document.getElementById('userName'),
 userPosition : document.getElementById('userPosition'),
 emailText : document.getElementById('emailText'),
 phoneText : document.getElementById('phoneText'),
 linkedinText : document.getElementById('linkedinText'),
 githubText : document.getElementById('githubText'),
 elAboutMe : document.getElementById('elAboutMe'),
    elProfile : document.getElementById('elProfile'),
    elLanguages : document.getElementById('languagesList'),
elTechTools : document.getElementById('elTechToolsList'),
elSkills : document.getElementById('elSkillsList'),

}

const Buttons = {
    btnaddSkill : document.getElementById('btnAddSkill'),
    btnaddLanguage : document.getElementById('btnAddLanguage'),
    btnaddTechTool : document.getElementById('btnAddTechTool')
}

function Update_UI(element , input)
{
element.innerHTML = input.value;
}

function HandleAddingLink(element , input)
{
    element.innerHTML = `<a href="${input.value}" target="_blank">your link was selected</a>`;
}

function HandleImageUpload(input, imageElement) {
    const file = input.files[0];
    
    if (file) {
        if (!file.type.startsWith('image/')) {
            alert('Please select an image file');
            input.value = '';
            return;
        }

        const reader = new FileReader();
        
        reader.onload = function(e) {
            imageElement.src = e.target.result;
            imageElement.alt = 'Profile Picture';
        };
        
        reader.onerror = function() {
            alert('Error reading file');
        };
        
        reader.readAsDataURL(file);
    } else {
        imageElement.src = 'icon.jpg';
        imageElement.alt = 'Profile Picture';
    }
}

function AddNewItemToList(listElement, inputElement) {
if (inputElement.value.trim() === '') {
    return;
}

let item = document.createElement('li');
item.textContent = inputElement.value;
listElement.appendChild(item);
}


InputsUI.fullName.addEventListener('input' , () => {
    Update_UI(UIElements.userName, InputsUI.fullName);
});
InputsUI.position.addEventListener('input' , () => {
    Update_UI(UIElements.userPosition, InputsUI.position);
});
InputsUI.email.addEventListener('input' , () => {
    Update_UI(UIElements.emailText, InputsUI.email);
});
InputsUI.phone.addEventListener('input' , () => {
    Update_UI(UIElements.phoneText, InputsUI.phone);
});
InputsUI.linkedin.addEventListener('input' , () => {
    HandleAddingLink(UIElements.linkedinText, InputsUI.linkedin);
});
InputsUI.github.addEventListener('input' , () => {
    HandleAddingLink(UIElements.githubText, InputsUI.github);
});
InputsUI.photo.addEventListener('change', () => {
    HandleImageUpload(InputsUI.photo, UIElements.profileImage);
});
InputsUI.AboutMe.addEventListener('input' , () => {
    Update_UI(UIElements.elAboutMe, InputsUI.AboutMe);
});
InputsUI.Profile.addEventListener('input' , () => {
    Update_UI(UIElements.elProfile, InputsUI.Profile);
});
Buttons.btnaddSkill.addEventListener('click', () => {
    AddNewItemToList(UIElements.elSkills, InputsUI.Skills);
});
Buttons.btnaddTechTool.addEventListener('click', () => {
    AddNewItemToList(UIElements.elTechTools, InputsUI.TechTools);
});