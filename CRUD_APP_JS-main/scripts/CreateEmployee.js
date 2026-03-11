// FORM
const employeeFormEle = document.getElementById("employee-form");

// NAME FIELDS
const firstNameEle = document.getElementById("firstname");
const middleNameEle = document.getElementById("middlename");
const lastNameEle = document.getElementById("lastname");

// PERSONAL INFO
const dobEle = document.getElementById("dob");
const emailEle = document.getElementById("email");
const maritalStatusEle = document.getElementById("maritalstatus");
const phoneNoEle = document.getElementById("phoneno");

// ADDRESS
const streetEle = document.getElementById("address");
const cityEle = document.getElementById("city");
const stateEle = document.getElementById("state");
const countryEle = document.getElementById("country");
const zipCodeEle = document.getElementById("zipcode");

employeeFormEle.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("Form Submitted");

  let newEmployeeData = {
    firstname: firstNameEle.value.trim(),
    middlename: middleNameEle.value.trim(),
    lastname: lastNameEle.value.trim(),
    dob: dobEle.value.trim(),
    email: emailEle.value.trim(),
    maritalstatus: maritalStatusEle.value,
    phoneno: phoneNoEle.value.trim(),
    address: {
      street: streetEle.value.trim(),
      city: cityEle.value.trim(),
      state: stateEle.value.trim(),
      country: countryEle.value.trim(),
      zipcode: zipCodeEle.value.trim(),
    },
  };
  // try {
  //   let resp = await fetch("http://localhost:5000/employees", {
  //     method: "POST",
  //     headers: {
  //       // headers means meta data, meta data means data about the data
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newEmployeeData),
  //   });
  //   console.log(resp);

  // } catch (error) {
  //   console.log(error);
  // }

  fetch("http://localhost:5000/employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEmployeeData),
  }).then((resp) => {
    console.log(resp);
  });
});
