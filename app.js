function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email") ? document.getElementById("email").value : "";
  const phone = document.getElementById("phone") ? document.getElementById("phone").value : "";
  const gender = document.getElementById("gender") ? document.getElementById("gender").value : "";
  const language = document.getElementById("language") ? document.getElementById("language").value : "";
  const camera = document.getElementById("camera") ? document.getElementById("camera").value : "";
  let experience, age, steps;
  age = parseInt(document.getElementById('age').value);
  
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "";
  
  
  let passType = "";
  if (age < 12) passType = "Not Eligible";
  else if (age >= 12 && age <= 20) passType = "Student Pass";
  else if (age >= 21 && age <= 40) passType = "General Pass";
  else passType = "Premium Pass";
        
  

  const table = `
    <table>
      <tr><td><strong>Name</strong></td><td>${name}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
      <tr><td><strong>Age</strong></td><td>${age}</td></tr>
      <tr><td><strong>Pass Type</strong></td><td>${passType}</td></tr>
    </table>`;
  
  outputDiv.innerHTML = table;
  document.getElementById("form").reset();
}