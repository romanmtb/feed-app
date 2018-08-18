import showProf from "./signUp";

let newArr = [];

let registrBtn = document.getElementById("registr");
let inpName = document.getElementById("login");
let inpLast = document.getElementById("last");
let inpEmail = document.getElementById("email");
let inpPass = document.getElementById("pass");
let inpConfirmPass = document.getElementById("confirm_pass");
let errorOut = document.getElementById("error_form");
let succesOut = document.getElementById("succesRegistr");

let array = [];

let arrUsers = [];

let clearField = el => {
  setInterval(() => {
    el.innerText = "";
  }, 3000);
};
let clearInp = input => {
  setInterval(() => {
    input.classList.remove("error_input");
  }, 3000);
};

class Registration {
  constructor(name, last, email, password) {
    this.name = name;
    this.last = last;
    this.mail = email;
    this.password = password;
    this.avatarUrl = "default";
    if (this.avatarUrl === "default") {
      this.setUrl();
    }
    this.loggedStatus = false;
    this.authorised = false;

    this.validation();
    if (this.validation() === true) {
      arrUsers.push(this);
      inpName.value = "";
      inpPass.value = "";
      inpConfirmPass.value = "";
    }
    if (arrUsers.length > 0) {
      newArr = arrUsers
        .sort((a, b) => {
          if (a.mail === b.mail) {
            return -1;
          } else {
            return 1;
          }
        })
        .reduce(function(arr, el) {
          if (!arr.length || arr[arr.length - 1].mail != el.mail) {
            arr.push(el);
          }
          return arr;
        }, []);
      // console.log(newArr)
    }
  }
  validation() {
    if (this.name === "" || this.name.length < 5) {
      inpName.classList.add("error_input");

      errorOut.innerHTML = `Incorrect name`;
      clearField(errorOut);
      clearInp(inpName);
      inpName.value = "";

      return false;
    } else if (!/(\b\w*)@(\w+\.\w+\b)/.test(this.mail)) {
      inpEmail.classList.add("error_input");
      errorOut.innerHTML = `Incorrect email`;
      clearField(errorOut);
      clearInp(inpEmail);
      inpEmail.value = "";
      return false;
    } else if (
      this.password.length < 5 ||
      this.password !== inpConfirmPass.value
    ) {
      inpPass.classList.add("error_input");
      inpConfirmPass.classList.add("error_input");
      errorOut.innerHTML = `Incorrect password`;
      clearField(errorOut);
      clearInp(inpPass);
      inpPass.value = "";
      inpConfirmPass.value = "";

      return false;
    } else {
      return true;
    }
  }

  setUrl() {
    this.avatarUrl =
      "https://cdn4.iconfinder.com/data/icons/essential-app-2/16/user-avatar-human-admin-login-512.png";
  }
}

let oldUsers = JSON.parse(localStorage.getItem("newUser"));
let data = [];
let uniqueUser = (arr1, arr2) => {
  if (oldUsers !== null) {
    data = [...arr1, ...arr2];
    array = data
      .sort((a, b) => {
        if (a.mail === b.mail) {
          return -1;
        } else {
          return 1;
        }
      })
      .reduce(function(arr, el) {
        if (!arr.length || arr[arr.length - 1].mail != el.mail) {
          arr.push(el);
        }
        return arr;
      }, []);
    data = [...array];
  } else {
    data = [...arr2];
  }
};

let createUser = e => {
  e.preventDefault();
  let usr = new Registration(
    inpName.value,
    inpLast.value,
    inpEmail.value,
    inpPass.value
  );
  uniqueUser(oldUsers, newArr);
  if (usr.authorised !== data[0].authorised) {
    errorOut.innerText = "This email is already registered";
    clearField(succesOut);
    inpEmail.value = "";
    clearField(errorOut);
  } else {
    localStorage.setItem("loggedStatus", "true");
    usr.authorised = true;
    showProf(usr);
    location.reload();
  }
  localStorage.setItem("newUser", JSON.stringify(data));
  data.map(item => {
    item.loggedStatus = true;
  });
};
// localStorage.setItem('loggedStatus', 'true');

registrBtn.addEventListener("click", createUser);
export { clearField };
