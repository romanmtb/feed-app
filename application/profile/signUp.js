import {clearField} from './registration'
let array = [];
let signUpBtn = document.getElementById('signUp');
let logOutBtn = document.getElementById('logout_btn');
let setUrlBtn = document.getElementById('setUrl');
let hideCont = document.getElementById('profilereg');
let showProfileInfo = document.getElementById('profWrap');
let signUpEmail = document.getElementById('signUp_email');

let signUpPass = document.getElementById('signUp_password');
let profileAvaUrl = document.querySelectorAll('.profile_Avatar');
let cancelChangeBtn = document.createElement('button');
let acceptChangeBtn = document.createElement('button');
    cancelChangeBtn.id = 'cancelChanges';
    acceptChangeBtn.id = 'acceptChanges';
let showProf = (item) => {
    let sesStor = JSON.stringify(item);
    let profile_Name = document.getElementById('profile_Name');
    let profile_Last = document.getElementById('profile_Last');
    let profile_Email = document.getElementById('profile_Email');

    localStorage.setItem('SigUpUser', sesStor);
    profile_Name.innerHTML = ` Name: ${item.name}`;
    if(item.last !== undefined) {

        profile_Last.innerHTML = ` Last: ${item.last}`;
    }else {
        profile_Last.innerHTML = null;
    }
    profile_Email.innerHTML = ` Email: ${item.mail}`;

    hideCont.classList.remove('show');
    hideCont.classList.add('hide');
    showProfileInfo.classList.remove('hide');
    showProfileInfo.classList.add('show');

    Array.from(profileAvaUrl).map(url=>{
        url.src = item.avatarUrl;
    })

};
let login = (e) => {
    e.preventDefault();
    let dataStorage = localStorage.getItem('newUser');
    let loggedStatus = localStorage.setItem('loggedStatus', 'true');
    let storageObject = JSON.parse(dataStorage);
        storageObject.map(item=>{
            let sesStor = JSON.stringify(item);
            localStorage.setItem('SigUpUser', sesStor);

            if(item.mail === signUpEmail.value && item.password === signUpPass.value) {
                if(localStorage.getItem('SigUpUser')) {
                    showProf(item)
                  location.reload();
                }
            }else {
                let errorOut = document.querySelector('.signUp_error');
                errorOut.innerText = 'Incorrect password';
                clearField(errorOut);
            }

        });
    }
//
let saveInfo = () => {
    if(localStorage.getItem('logUpUser')== null) {
       if(localStorage.getItem('loggedStatus') === 'true') {
           let user = JSON.parse(localStorage.getItem('SigUpUser'));
           showProf(user);
       }
    }
};


function logOut(e) {
    e.preventDefault();

    localStorage.setItem('loggedStatus', 'false');
    localStorage.removeItem('SigUpUser');

    if(localStorage.setItem('loggedStatus', 'false')) {

        hideCont.classList.add('show');
        hideCont.classList.remove('hide');
        showProfileInfo.classList.add('hide');
        showProfileInfo.classList.remove('show');

        Array.from(profileAvaUrl).map(url=> {
            if(url.dataset.id === '4') {
                url.src = 'https://cdn3.iconfinder.com/data/icons/watchify-v1-0-32px/32/lock-512.png';
            }
        })
    }
    location.reload();



}
let oldUsers = JSON.parse(localStorage.getItem("newUser"));
function setUrlInProfile(e) {
    e.preventDefault();
    let dataStorage = localStorage.getItem('SigUpUser');
    let storageObject = JSON.parse(dataStorage);
    let arr = [];
    arr.push(storageObject);
    arr.map(item => {
        item.avatarUrl;
        let inpAvatarProfile = document.getElementById('setAvatar');
        let errorAvatar = document.getElementById('errorAvatarUrl');

            if (!(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/gi).test(inpAvatarProfile.value) || inpAvatarProfile.value === ''){
                errorAvatar.innerHTML = 'Incorrect URL';
                clearField(errorAvatar);

            }else {
                let data = [];
                if(oldUsers !== null) {
                    data = [...oldUsers, item];
                    array = data.sort((a,b)=>{
                        if(a.mail === b.mail) {return -1;} else{return 1}})
                        .reduce(function(arr, el){
                            if(!arr.length || arr[arr.length - 1].mail != el.mail) {
                                arr.push(el);
                            }
                            return arr;

                        }, []);
                    data = [...array];
                }else {
                    data = [item];
                }

                item.avatarUrl = inpAvatarProfile.value;
                Array.from(profileAvaUrl).map(url => {
                    url.src = inpAvatarProfile.value;
                });

                localStorage.setItem('newUser', JSON.stringify(data));
                localStorage.setItem('SigUpUser', JSON.stringify(item));
            }
    });

}

setUrlBtn.addEventListener('click', setUrlInProfile);
signUpBtn.addEventListener('click', login);
logOutBtn.addEventListener('click', logOut);
saveInfo();

export  {saveInfo};
export default showProf;

