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
 TechTools : document.getElementById('InpTechTools'),
 ddLanguageLevel : document.getElementById('Leveldropdown'),
 Language : document.getElementById('InpLanguage'),

 jobTitle: document.getElementById('jobTitle'),
  company: document.getElementById('company'),
  location: document.getElementById('location'),
  startDate: document.getElementById('startDate'),
  endDate: document.getElementById('endDate'),
jobDetails : document.getElementById('jobDetails'),

eduDegree: document.getElementById('eduDegree'),
    eduUniversity: document.getElementById('eduUniversity'),
    eduLocation: document.getElementById('eduLocation'),
    eduStartDate: document.getElementById('eduStartDate'),
    eduEndDate: document.getElementById('eduEndDate'),
    eduDetails: document.getElementById('eduDetails'),

    certName: document.getElementById('certName'),
    certPlatform: document.getElementById('certPlatform'),
    certDate: document.getElementById('certDate')
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
elLanguages : document.getElementById('languagesList'),
LangProtoText : document.getElementById('elProtoMessage')

}

const Buttons = {
    btnaddSkill : document.getElementById('btnAddSkill'),
    btnaddLanguage : document.getElementById('btnAddLanguage'),
    btnaddTechTool : document.getElementById('btnAddTechTool'),
    addExperienceBtn : document.getElementById('addExperienceBtn'),
    addDetailJobBtn : document.getElementById('addDetailBtn'),
    addEduDetailBtn: document.getElementById('addEduDetailBtn'),
    addEducationBtn: document.getElementById('addEducationBtn'),
    addCertificationBtn: document.getElementById('addCertificationBtn')


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
inputElement.value = '';
}

function AddLanguage(listLanguage, inputElement , dropdownElement) {
if (inputElement.value.trim() === '') {
    return;
}
UIElements.LangProtoText.style.display = 'none';
let item = document.createElement('li');
item.textContent = inputElement.value + ' - ' + dropdownElement.value;
listLanguage.appendChild(item);
inputElement.value = '';
}


function AddExceperience()
{
     const jobTitle = InputsUI.jobTitle.value.trim();
  const company = InputsUI.company.value.trim();
  const location = InputsUI.location.value.trim();
  const startDate = InputsUI.startDate.value.trim();
  const endDate = InputsUI.endDate.value.trim();
    const ExecperienceSect = document.getElementById('experienceContainer');

  const experienceDiv = document.createElement('div');
experienceDiv.className = 'Section';
const TitleSect = document.createElement('div');
TitleSect.className = 'SectionTitle';
const Title = document.createElement('p');
Title.textContent = jobTitle;
const spnInfos = document.createElement('span');
spnInfos.className = 'Muted';
const Company = document.createElement('p');
Company.textContent = company;
const Location = document.createElement('p');
Location.textContent = location;
const Period = document.createElement('p');
Period.textContent = `from ${startDate} to ${endDate}`;
spnInfos.appendChild(Company);
spnInfos.appendChild(Location);
spnInfos.appendChild(Period);

TitleSect.appendChild(Title);
TitleSect.appendChild(spnInfos);

experienceDiv.appendChild(TitleSect);

/*InputsUI.jobTitle.value = '';
InputsUI.company.value = '';
InputsUI.location.value = '';*/

const JobDetails = document.querySelectorAll('.JobDetail');
const ul = document.createElement('ul');
JobDetails.forEach((li) => {
    let item = document.createElement('li');
    item.textContent = li.textContent;
    ul.appendChild(item);
});
experienceDiv.appendChild(ul);
ExecperienceSect.appendChild(experienceDiv);

JobDetails.forEach((li) => {
    li.remove();
});

}

function AddDetalisList(Ul_id , Li_class , value)
{
    const ul = document.getElementById(Ul_id);
    const li = document.createElement('li');
        li.addEventListener('click' , function(){ this.remove()});

li.className = Li_class;
li.textContent = value;
ul.appendChild(li);
}


function AddEducation() {
    const degree = InputsUI.eduDegree.value.trim();
    const university = InputsUI.eduUniversity.value.trim();
    const location = InputsUI.eduLocation.value.trim();
    const startDate = InputsUI.eduStartDate.value.trim();
    const endDate = InputsUI.eduEndDate.value.trim();
    const educationContainer = document.getElementById('educationContainer');

    const educationDiv = document.createElement('div');
    educationDiv.className = 'Section';
    
    const TitleSect = document.createElement('div');
    TitleSect.className = 'SectionTitle';
    
    const Title = document.createElement('p');
    Title.textContent = degree || 'Education';
    
    const spnInfos = document.createElement('span');
    spnInfos.className = 'Muted';
    
    const University = document.createElement('p');
    University.textContent = university;
    const Location = document.createElement('p');
    Location.textContent = location;
    const Period = document.createElement('p');
    Period.textContent = `from ${startDate} to ${endDate}`;
    
    spnInfos.appendChild(University);
    spnInfos.appendChild(Location);
    spnInfos.appendChild(Period);
    
    TitleSect.appendChild(Title);
    TitleSect.appendChild(spnInfos);
    educationDiv.appendChild(TitleSect);

    const eduDetails = document.querySelectorAll('.EduDetail');
    const ul = document.createElement('ul');
    eduDetails.forEach((li) => {
        let item = document.createElement('li');
        item.textContent = li.textContent;
        ul.appendChild(item);
    });
    educationDiv.appendChild(ul);
    educationContainer.appendChild(educationDiv);

    eduDetails.forEach((li) => {
        li.remove();
    });

    // Clear inputs
    InputsUI.eduDegree.value = '';
    InputsUI.eduUniversity.value = '';
    InputsUI.eduLocation.value = '';
    InputsUI.eduStartDate.value = '';
    InputsUI.eduEndDate.value = '';
}

function AddCertification() {
    const certName = InputsUI.certName.value.trim();
    const platform = InputsUI.certPlatform.value.trim();
    const date = InputsUI.certDate.value.trim();
    const certContainer = document.getElementById('certificationContainer');

    const certDiv = document.createElement('div');
    certDiv.className = 'Section';
    
    const TitleSect = document.createElement('div');
    TitleSect.className = 'SectionTitle';
    
    const Title = document.createElement('p');
    Title.textContent = certName || 'Certification';
    
    const spnInfos = document.createElement('span');
    spnInfos.className = 'Muted';
    
    const Platform = document.createElement('p');
    Platform.textContent = platform;
    const Date = document.createElement('p');
    Date.textContent = date;
    
    spnInfos.appendChild(Platform);
    spnInfos.appendChild(Date);
    
    TitleSect.appendChild(Title);
    TitleSect.appendChild(spnInfos);
    certDiv.appendChild(TitleSect);
    certContainer.appendChild(certDiv);

    // Clear inputs
    InputsUI.certName.value = '';
    InputsUI.certPlatform.value = '';
    InputsUI.certDate.value = '';
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
Buttons.btnaddLanguage.addEventListener('click', () => {
    AddLanguage(UIElements.elLanguages, InputsUI.Language, InputsUI.ddLanguageLevel);
});
Buttons.addExperienceBtn.addEventListener('click' , () => {
AddExceperience();
});
Buttons.addDetailJobBtn.addEventListener('click',() => {
    AddDetalisList('ulJobDetailsList' , 'JobDetail', InputsUI.jobDetails.value.trim());
});
Buttons.addEducationBtn.addEventListener('click', AddEducation);

Buttons.addEduDetailBtn.addEventListener('click',() => {
    AddDetalisList('ulEduDetailsList' , 'EduDetail', InputsUI.eduDetails.value.trim());
});
Buttons.addCertificationBtn.addEventListener('click' , AddCertification);