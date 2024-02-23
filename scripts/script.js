let d = 
    [
        {
        "Role": "Customer Service Manager",
        "Department": "IT",
        "Location": "Hyderabad",
        "TotalEmployees": "+43"
        },
        {
        "Role": "UX Designer",
        "Department": "Product Engg.",
        "Location": "Mumbai",
        "TotalEmployees": "+40"
        },
        {
        "Role": "Assistant Backend Developer",
        "Department": "UIUX",
        "Location": "Delhi",
        "TotalEmployees": "+41"
        },
        {
        "Role": "Backend Developer",
        "Department": "IT",
        "Location": "Delhi",
        "TotalEmployees": "+41"
        },
        {
        "Role": "Front End Developer",
        "Department": "Product Engg.",
        "Location": "Mumbai",
        "TotalEmployees": "+40"
        },
        {
        "Role": "Senior Developer",
        "Department": "UIUX",
        "Location": "Delhi",
        "TotalEmployees": "+41"
        }
];

let tabledata=[
  {
    "USER": "Edgar Jones",
    "LOCATION": "Hyderabad",
    "DEPARTMENT": "Product Engg",
    "ROLE": "Full-stack Developer",
    "EMPNO": "TZ002341",
    "STATUS": "Active",
    "JOINDT": "12/03/2023",
    "EMAIL": "edgar.jones@example.com"
  },
  {
    "USER": "John Doe",
    "LOCATION": "Mumbai",
    "DEPARTMENT": "UIUX",
    "ROLE": "UI/UX Designer",
    "EMPNO": "TZ002342",
    "STATUS": "Inactive",
    "JOINDT": "15/05/2022",
    "EMAIL": "john.doe@example.com"
  },
  {
    "USER": "Alice Smith",
    "LOCATION": "Delhi",
    "DEPARTMENT": "IT",
    "ROLE": "Systems Analyst",
    "EMPNO": "TZ002343",
    "STATUS": "Active",
    "JOINDT": "08/11/2021",
    "EMAIL": "alice.smith@example.com"
  },
  {
    "USER": "Bob Johnson",
    "LOCATION": "Hyderabad",
    "DEPARTMENT": "Product Engg",
    "ROLE": "Backend Developer",
    "EMPNO": "TZ002344",
    "STATUS": "Inactive",
    "JOINDT": "22/09/2020",
    "EMAIL": "bob.johnson@example.com"
  },
  {
    "USER": "Sara White",
    "LOCATION": "Mumbai",
    "DEPARTMENT": "UIUX",
    "ROLE": "Frontend Developer",
    "EMPNO": "TZ002345",
    "STATUS": "Active",
    "JOINDT": "03/07/2022",
    "EMAIL": "sara.white@example.com"
  },
  {
    "USER": "David Brown",
    "LOCATION": "Delhi",
    "DEPARTMENT": "IT",
    "ROLE": "Network Engineer",
    "EMPNO": "TZ002346",
    "STATUS": "Inactive",
    "JOINDT": "19/04/2021",
    "EMAIL": "david.brown@example.com"
  },
  {
    "USER": "Emily Davis",
    "LOCATION": "Hyderabad",
    "DEPARTMENT": "Product Engg",
    "ROLE": "UI Designer",
    "EMPNO": "TZ002347",
    "STATUS": "Active",
    "JOINDT": "14/12/2022",
    "EMAIL": "emily.davis@example.com"
  },
  {
    "USER": "Tom Wilson",
    "LOCATION": "Mumbai",
    "DEPARTMENT": "UIUX",
    "ROLE": "Frontend Developer",
    "EMPNO": "TZ002348",
    "STATUS": "Inactive",
    "JOINDT": "26/08/2020",
    "EMAIL": "tom.wilson@example.com"
  },
  {
    "USER": "Eva Green",
    "LOCATION": "Delhi",
    "DEPARTMENT": "IT",
    "ROLE": "Database Administrator",
    "EMPNO": "TZ002349",
    "STATUS": "Active",
    "JOINDT": "10/02/2023",
    "EMAIL": "eva.green@example.com"
  },
  {
    "USER": "Michael Taylor",
    "LOCATION": "Hyderabad",
    "DEPARTMENT": "Product Engg",
    "ROLE": "DevOps Engineer",
    "EMPNO": "TZ002350",
    "STATUS": "Inactive",
    "JOINDT": "05/06/2021",
    "EMAIL": "michael.taylor@example.com"
  }
]

  
function FilterSection(){
    const open = document.querySelector(".filter-option");
    if(open.style.display == "none"){
        open.style.display = "flex";
    }
    else{
        open.style.display = "none";
    }
}
function ShowSidebar(){
    const sd = document.querySelector(".sidebar");
    const menu = document.querySelector(".menu");
    const hd = document.querySelector(".navbar");
    const hs = document.querySelector(".header-searchbar");
    sd.style.display = "flex";
    menu.style.display = "none";
    hd.style.marginLeft="12rem";
    hs.style.marginLeft="1rem";
}
function HideSidebar(){
    const sd = document.querySelector(".sidebar");
    const menu = document.querySelector(".menu");
    const navbar=document.querySelector(".navbar");
    const hd = document.querySelector(".header-searchbar");
    sd.style.display = "none";
    menu.style.display="block";
    hd.style.marginLeft="-1rem";
    navbar.style.marginLeft="1rem"
}
function HideSidebar2(){
    const sd = document.querySelector(".sidebar");
    const menu = document.querySelector(".menu");
    const navbar=document.querySelector(".navbar");
    const hd = document.querySelector(".header-searchbar");
    sd.style.display = "none";
    menu.style.display="block";
    hd.style.marginLeft="10rem";
    navbar.style.marginLeft="1rem"
}
function HideSidebar3(){
    const sd = document.querySelector(".sidebar");
    const menu = document.querySelector(".menu");
    const navbar=document.querySelector(".navbar");
    const hd = document.querySelector(".header-searchbar");
    sd.style.display = "none";
    menu.style.display="block";
    hd.style.marginLeft="10rem";
    navbar.style.marginLeft="1rem"
}
/*
document.querySelector(".arrow-item").addEventListener("click",function(){
    window.location.href = "index2.html";
});
*/

function CreateCard(data){
    let infocard = document.createElement("div");
    infocard.setAttribute("class", "info-card");

    //row1
    let inforow = document.createElement("div");
    var imgelmnt = document.createElement("img");
    var h = document.createElement("h5");

    inforow.setAttribute("class", "info-row");

    h.innerHTML = data.Role;
    imgelmnt.src="./svg/blueeditbox.svg";
    imgelmnt.alt='BlueEditBox symbol';

    inforow.appendChild(h);
    inforow.appendChild(imgelmnt);
    infocard.appendChild(inforow);

    //row2
    let inforow1 = document.createElement("div");
    let spanins=document.createElement('span');
    var imgelmnt1 = document.createElement("img");
    var span=document.createElement("span");
    let infocarditems=document.createElement("div");

    inforow1.setAttribute("class", "info-row");
    infocarditems.setAttribute("class","infocard-items");

    imgelmnt1.src="./svg/group.svg";
    imgelmnt1.alt="Group symbol";
    span.innerText="Department";
    spanins.innerText=data.Department;

    inforow1.appendChild(infocarditems);
    infocarditems.appendChild(imgelmnt1);
    infocarditems.appendChild(span);
    inforow1.appendChild(spanins);
    infocard.appendChild(inforow1);

    //row3
    let inforow2 = document.createElement("div");
    var spaninside=document.createElement("span");
    var imgelmnt2 = document.createElement("img");
    var span2=document.createElement("span");
    let infocarditems2=document.createElement("div");

    inforow2.setAttribute("class", "info-row");
    infocarditems2.setAttribute("class","infocard-items");

    imgelmnt2.src="./svg/location.svg";
    imgelmnt2.alt="Location symbol";
    span2.innerText="Location";
    spaninside.innerText=data.Location;

    infocarditems2.appendChild(imgelmnt2);
    infocarditems2.appendChild(span2);
    inforow2.appendChild(infocarditems2);
    inforow2.appendChild(spaninside);
    infocard.appendChild(inforow2);

    //row4
    let inforow3=document.createElement('div');
    let span3=document.createElement('span');
    let span3ins=document.createElement('span');
    let div1=document.createElement('div');
    let div2=document.createElement('div');
    let div3=document.createElement('div');
    let div4=document.createElement('div');
    let div5=document.createElement('div');
    let img1=document.createElement('img');
    let img2=document.createElement('img');
    let img3=document.createElement('img');

    inforow3.setAttribute('class','info-row');
    div1.setAttribute('class','profiles-many');
    div2.setAttribute('class','img1');
    div3.setAttribute('class','img2');
    div4.setAttribute('class','img3');
    div5.setAttribute('class','employee-count');

    span3.innerText="Total Employees";
    img1.src="./images/avatar.png";
    img2.src="./images/avatar.png";
    img3.src="./images/gamer.png";
    span3ins.innerText=data.TotalEmployees;

    inforow3.appendChild(span3);
    div2.appendChild(img1);
    div3.appendChild(img2);
    div4.appendChild(img3);
    div5.appendChild(span3ins);
    div1.appendChild(div2);
    div1.appendChild(div3);
    div1.appendChild(div4);
    div1.appendChild(div5);
    inforow3.appendChild(div1);
    infocard.appendChild(inforow3);

    //row5
    let inforow4=document.createElement('div');
    inforow4.setAttribute('class','arrow-item');
    let span4=document.createElement('span');
    let img4=document.createElement('img');
    let div6=document.createElement('div');

    span4.innerText="View all Employees";
    img4.src="./svg/arrow.svg";

    div6.appendChild(span4);
    div6.appendChild(img4);
    inforow4.appendChild(div6);
    infocard.appendChild(inforow4);

    return infocard;
}

function ShowAllCards()
{
    let infolist = document.querySelector(".info-cards-list");
    infolist.innerHTML="";
    for(var i in d){
        var res = CreateCard(d[i]);
        infolist.appendChild(res);
    }
}

function Filter()
{
    var sl=document.getElementById("location");
    var sd=document.getElementById("departments");
    console.log(sl.value);
    var infolist=document.querySelector(".info-cards-list");
    infolist.innerHTML="";
    for(let i in d){
        var doc=d[i];
        if(doc.Department == sd.value && doc.Location == sl.value)
        {
            var res=CreateCard(doc);
            infolist.appendChild(res);
        }
    }

    console.log(infolist);
}

function ShowDropDown()
{
    var arrow=document.querySelector(".arrow");
    var dropdown=document.querySelector(".userstatus-menu");
    arrow.src="./svg/arrowdownorange.svg";
    if(dropdown.style.display == "none"){
        dropdown.style.display="block";
    }
    else if(dropdown.style.display="block"){
        arrow.src="./svg/arrowforwardorange.svg"
        dropdown.style.display="none";
    }
}


function CreateUserRow(data)
{
var tableRow = document.createElement('tr');
var radioCell = document.createElement('td');
var radioInput = document.createElement('input');
radioInput.setAttribute('type', 'radio');
radioInput.setAttribute('name', 'checkbox4');
radioInput.setAttribute('id', 'checkbox4');
var labelForRadio = document.createElement('label');
labelForRadio.setAttribute('for', 'sample');
radioCell.appendChild(radioInput);
radioCell.appendChild(labelForRadio);
tableRow.appendChild(radioCell);

// Create user profile cell
var userProfileCell = document.createElement('td');
userProfileCell.classList.add('user-profile-box');

// Create user avatar image
var avatarImage = document.createElement('img');
avatarImage.setAttribute('src', './images/man.jpg');
avatarImage.setAttribute('alt', 'Human Avatar');
userProfileCell.appendChild(avatarImage);

// Create user details span
var userDetailsSpan = document.createElement('span');
userDetailsSpan.classList.add('span-outside-userprofilebox');

// Add user name and email to details span
userDetailsSpan.innerHTML = `${data.USER}<br><span class="span-inside-userprofilebox">${data.EMAIL}</span>`;
userProfileCell.appendChild(userDetailsSpan);

// Add user profile cell to the table row
tableRow.appendChild(userProfileCell);

// Create and add other cells to the table row
var locationCell = document.createElement('td');
locationCell.textContent = data.LOCATION;
tableRow.appendChild(locationCell);

var departmentCell = document.createElement('td');
departmentCell.textContent = data.DEPARTMENT;
tableRow.appendChild(departmentCell);

var roleCell = document.createElement('td');
roleCell.textContent = data.ROLE;
tableRow.appendChild(roleCell);

var empNoCell = document.createElement('td');
empNoCell.textContent = data.EMPNO;
tableRow.appendChild(empNoCell);

var statusCell = document.createElement('td');
var activeButton = document.createElement('div');
activeButton.classList.add('active-button');
activeButton.innerHTML = `<span>${data.STATUS}</span>`;
statusCell.appendChild(activeButton);
tableRow.appendChild(statusCell);

var joinDateCell = document.createElement('td');
joinDateCell.textContent = data.JOINDT;
tableRow.appendChild(joinDateCell);

var dotsCell = document.createElement('td');
var dotsImage = document.createElement('img');
dotsImage.setAttribute('src', './svg/threedots.svg');
dotsImage.setAttribute('alt', 'Threedots symbol');
dotsCell.appendChild(dotsImage);
tableRow.appendChild(dotsCell);

return tableRow;
}

function ShowTableRows()
{
  var table = document.getElementById('myTable');
  var data=localStorage.getItem("EmployeeData");
  var dataarray=JSON.parse(data);
  console.log(dataarray);
  /*
  for(let i in tabledata)
  {
    let doc=CreateUserRow(tabledata[i]);
    table.querySelector('tbody').appendChild(doc);
  }*/
  for(let i in dataarray)
  {
    let doc=CreateUserRow(dataarray[i]);
    table.querySelector('tbody').appendChild(doc);
  }
}

function FilterTableRows()
{
  var table = document.getElementById('myTable');
  var st=document.getElementById('status');
  var lc=document.getElementById('location');
  var dp=document.getElementById('departments');
  console.log(st.value);
  console.log(lc.value);
  console.log(dp.value);
  var table = document.getElementById('myTable');
  var data=localStorage.getItem("EmployeeData");
  var dataarray=JSON.parse(data);
  var uniqueset=new Set();

  console.log(table.querySelector('tbody'));
  for(let i in dataarray){
    var doc=dataarray[i];
    if(lc.value == doc.LOCATION && dp.value == doc.DEPARTMENT && st.value == doc.STATUS)
    {
     uniqueset.add(doc);
    }
    else {
      console.log("Conditions not met. Skipping row.");
    }
  }
  //
  var uniqueRowsArray = Array.from(uniqueset);

  setTimeout(function () {
    table.querySelector('tbody').innerHTML = "";
    console.log(table.querySelector('tbody'));

    uniqueRowsArray.forEach(function (row) {
      let res = CreateUserRow(row);
      table.querySelector('tbody').appendChild(res);
    });
  }, 10); 
}

function ShowActiveUsers()
{
  var table = document.getElementById('myTable');
  table.querySelector('tbody').innerHTML="";
  var table = document.getElementById('myTable');
  var data=localStorage.getItem("EmployeeData");
  var dataarray=JSON.parse(data);
  for(let i in dataarray){
    var doc=dataarray[i];
    if("Active" == doc.STATUS)
    {
      let res=CreateUserRow(doc);
      
      table.querySelector('tbody').appendChild(res);
    }
  }
}

function ShowInActiveUsers()
{
  var table = document.getElementById('myTable');
  table.querySelector('tbody').innerHTML="";
  var table = document.getElementById('myTable');
  var data=localStorage.getItem("EmployeeData");
  var dataarray=JSON.parse(data);
  for(let i in dataarray){
    var doc=dataarray[i];
    if("Inactive" == doc.STATUS)
    {
      let res=CreateUserRow(doc);
      
      table.querySelector('tbody').appendChild(res);
    }
  }
}

function ShowFieldDropdown()
{
  var list = document.querySelector(".checkbox-dropdownlist");
  var checkboxes = document.getElementsByName("dp-empdetails");
  var placeholder = document.getElementById("searchPlaceholder");
  var searchinp=document.getElementById("searchemp");

  if (list.style.display === "none") {
      list.style.display = "flex";
  } else {
      list.style.display = "none";
  }

  for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
          placeholder.textContent = checkboxes[i].value;
          break;  
      }
      else{
        placeholder.innerText=searchinp.value;
      }
  }

}

function ShowAddEmployeePage()
{
  var mainpage=document.querySelector(".sample-body");
  var emppage=document.querySelector(".addemployee-page");
  if(mainpage.style.display == "block")
  {
    mainpage.style.display="none";
    emppage.style.display="block";
  }
  else{
    mainpage.style.display="block";
    emppage.style.display="none";
  }
}

function ShowAddRolePage()
{
  var usertable=document.querySelector(".info-cards-list");
  var rolepage=document.querySelector(".addnewrole-page");
  if(usertable.style.display == "block"){
    usertable.style.display = "none";
    rolepage.style.display = "flex";
  }
  else{
    usertable.style.display = "block";
    rolepage.style.display = "none";
  }
}

// Adding data to localStorage
function AddEmployeeData()
{
  // Personal Information
  var empNumber = document.getElementById("emp-number").value;
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var dob = document.getElementById("dob").value;
  var emailId = document.getElementById("email-id").value;
  var mobileNo = document.getElementById("mobile-no").value;
  // Employment Information
  var joiningDate = document.getElementById("joining-date").value;
  var location = document.getElementById("add-select-loc").value;
  var jobTitle = document.getElementById("add-select-jobtitle").value;
  var department = document.getElementById("add-select-department").value;
  var assignManager = document.getElementById("managers").value;
  var assignProject = document.getElementById("projects").value;

  var EmpModel={
    USER: firstName + lastName,
    LOCATION: location,
    DEPARTMENT: department,
    ROLE: "",
    EMPNO: empNumber,
    STATUS: "Inactive",
    JOINDT: joiningDate,
    EMAIL: emailId,
    DOB:dob,
    MobileNumber:mobileNo,
    JobTitle:jobTitle,
    Manager:assignManager,
    Project:assignProject,
  };
  var NewEmpModel=[{
    USER: firstName + lastName,
    LOCATION: location,
    DEPARTMENT: department,
    ROLE: "",
    EMPNO: empNumber,
    STATUS: "Inactive",
    JOINDT: joiningDate,
    EMAIL: emailId,
    DOB:dob,
    MobileNumber:mobileNo,
    JobTitle:jobTitle,
    Manager:assignManager,
    Project:assignProject,
  }];
  console.log(EmpModel);
  var existingData = localStorage.getItem("EmployeeData");
  if(existingData!== null)
  {
    var dataarray=JSON.parse(existingData);
    dataarray.push(EmpModel);
    console.log(dataarray);

    var jsonString = JSON.stringify(dataarray);
    localStorage.setItem("EmployeeData",jsonString);
    console.log(localStorage);
  }
  else{
    var jsonString=JSON.stringify(NewEmpModel);
    localStorage.setItem("EmployeeData",jsonString);
    console.log(localStorage);
  }
}

// Adding role data to LocalStorage
function AddRoleData()
{

  var roleName = document.getElementById("role-rolename").value;
  var department = document.getElementById("role-selectdepartment").value;
  var description = document.getElementById("role-description").value;
  var location = document.getElementById("role-selectlocation").value;
  var empname=document.getElementById("searchPlaceholder").value;
 
  var RoleModel= 
  {
    Role: roleName,
    Department: department,
    Location: location,
    TotalEmployees: "+43",
    Description:description,
    EmpName:empname,
  };

  var NewRoleModel=[{
    Role: roleName,
    Department: department,
    Location: location,
    TotalEmployees: "+43",
    Description:description,
    EmpName:empname,
  }];
  var existingData = localStorage.getItem("RoleData");
  if(existingData!== null)
  {
    var dataarray=JSON.parse(existingData);
    dataarray.push(RoleModel);
    console.log(dataarray);

    var jsonString = JSON.stringify(dataarray);
    localStorage.setItem("RoleData",jsonString);
    console.log(localStorage);
  }
  else{
    var jsonString=JSON.stringify(NewRoleModel);
    localStorage.setItem("RoleData",jsonString);
    console.log(localStorage);
  }

  var existingempData = localStorage.getItem("EmployeeData");
  var empdataarray=JSON.parse(existingempData);

  for(let i in empdataarray)
  {
    let doc=empdataarray[i];
    if(doc.USER == empname && doc.ROLE == "")
    {
      doc.ROLE=roleName;
      var jsonstring=JSON.stringify(empdataarray);
      localStorage.setItem("EmployeeData",jsonstring);
    }
  }



}