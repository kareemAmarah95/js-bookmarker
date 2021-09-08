var siteNameInp = document.getElementById("siteName");
var siteUrlInp = document.getElementById("siteUrl");
var tbody = document.getElementById("tbody");
var links = [];

if(localStorage.getItem("allLinks") == null){
  // user awl mra yft7 el project
  var links = [];

} else {
  var links = JSON.parse(localStorage.getItem("allLinks"));
}

displaySites();

function addSite(){
  
  
  var sites = {
    siteName: siteNameInp.value,
    siteURL: siteUrlInp.value
  }
  
  
  localStorage.setItem("allLinks", JSON.stringify(links));
  
  if(sites.siteName == "" && sites.siteURL == ""){
    alert("please insert a valid input");
   
  }  else {
    links.push(sites);
  }
  clearForm();
  displaySites();
  
}

function clearForm(){
  siteNameInp.value = "";
  siteUrlInp.value = "";
}

function displaySites(){
  var div = "";
  for(var i = 0 ; i < links.length ; i++){
    
      div += `<br>
      <tr class="bg-lightgray py-5 my-5">
      
      <td class="fw-bold fs-4" id="letterBgColor">${links[i].siteName}</td>
      
      <td>
        <button class="btn btn-secondary" onclick="visitLink(${i})" id="demo">
          visit
         
        </button>
      </td>
      <td>
        <button class="btn btn-danger" onclick="deleteSite(${i})">
  
          delete
        </button>
      </td>
     
    </tr>
    <br>
      `;
    
    
    
  }
  tbody.innerHTML = div;
    var x = siteNameInp.value;
}


function deleteSite(i){
  links.splice(i , 1);
  localStorage.setItem("allLinks", JSON.stringify(links));
  console.log("deleted");
  displaySites();  
 }

 function visitLink(i) {
  var x = links[i].siteURL;
  console.log(x);
  location.href = window.open(x,'_blank');
}

// function visitLink(i){
//   var siteURL = "";
//   for(var i = 0 ; i < siteURL.length; i++){
//       var x =links[i].siteURL.value;
//      }
//   location.href = `www.${x}.com`;
 

 
// document.getElementById("demo").onclick = function () {
//  for(var i = 0 ; i < siteURL.length; i++){
//   var x =links[i].siteURL.value;
//  }
//   location.href = `https://www.${x}.com`;
 
// };
// }

// [{siteName: "facebook", siteURL: "facebook.com"}]
// 0: {siteName: "facebook", siteURL: "facebook.com"}


//       <td>
//         <button class="btn btn-secondary" onclick="visitLink(${i})" id="demo">
//           visit
         
//         </button>
//       </td>

// function visitLink(i){
//   var siteURL = "";
//   for(var i = 0 ; i < siteURL.length; i++){
//       var x =links[i].siteURL.value;
//      }
//   location.href = `www.${x}.com`;
 
//     }
