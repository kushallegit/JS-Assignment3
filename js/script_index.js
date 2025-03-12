/*
Home/Index Page JavaScript
*/
document.getElementById('send-btn').addEventListener('click', getUserInfo);
document.getElementById('main-form').addEventListener('reset', clearOutput);

function getUserInfo() {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const province = document.getElementById('province').value;
  const membership = document.querySelector('input[name="membership"]:checked').value;

  const fullName = firstName + " " + lastName;

  if (!firstName || !lastName || !email || !address || !city || !province || !membership) {
    alert("Please fill out all fields.");
    return; // Stop if any field is empty
  }

  const output = `
    <h2>User Information</h2>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>City:</strong> ${city}</p>
    <p><strong>Province:</strong> ${province}</p>
    <p><strong>Membership:</strong> ${membership}</p>
  `;

  document.getElementById('output').innerHTML = output;
}

function clearOutput() {
  // Clear the output when the form is reset
  document.getElementById('output').innerHTML = '';
}

function changeColor(color) {
    const wrapperDiv = document.getElementById("wrapper");

    if (color === 1) {
        wrapperDiv.className = "blue-theme";
    } else {
        wrapperDiv.className = "red-theme";
    }
}

