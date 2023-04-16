// Get elements from the DOM
const editButton = document.querySelector(".edit-button");
const saveButton = document.querySelector(".save-button");
const inputs = document.querySelectorAll("input[type='text'], input[type='number'], textarea");
const profilePicture = document.querySelector(".profile-picture img");
const profilePictureUpload = document.querySelector("#profile-picture-upload");

// Add event listeners to the buttons
editButton.addEventListener("click", enableEditing);
saveButton.addEventListener("click", saveChanges);
profilePictureUpload.addEventListener("change", uploadProfilePicture);

// Enable editing of the inputs
function enableEditing() {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = false;
    inputs[i].classList.add("editable");
  }
}

// Save changes to the profile
function saveChanges() {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
    inputs[i].classList.remove("editable");
  }
  // Send data to the server to save changes
  // ...
}

// Upload a new profile picture
function uploadProfilePicture() {
  const file = profilePictureUpload.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      profilePicture.src = event.target.result;
    }
    reader.readAsDataURL(file);
  }
}
