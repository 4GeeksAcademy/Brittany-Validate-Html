document.querySelector("#userForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Stop form from submitting

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const ageInput = document.getElementById("age");
  const errorContainer = document.getElementById("errorContainer");

  // Clear previous errors and styles
  errorContainer.innerHTML = "";
  errorContainer.style.display = "none";
  [nameInput, emailInput, ageInput].forEach(input => input.classList.remove("invalid"));

  const errors = [];

  // Validation rules
  if (nameInput.value.trim() === "") {
    errors.push("Name cannot be empty.");
    nameInput.classList.add("invalid");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    errors.push("Email is invalid.");
    emailInput.classList.add("invalid");
  }

  const age = parseInt(ageInput.value);
  if (isNaN(age) || age <= 0) {
    errors.push("Age must be a number greater than 0.");
    ageInput.classList.add("invalid");
  }

  // Show error messages
  if (errors.length > 0) {
    errorContainer.innerHTML = errors.join("<br>");
    errorContainer.style.display = "block";
  } else {
    alert("Form submitted successfully!");
    document.getElementById("userForm").reset();
  }
});
