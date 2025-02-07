function calculateAge() {
  // Get the date of birth from the input field
  const dobInput = document.getElementById('dob').value;

  // Check if a date is selected
  if (!dobInput) {
    alert('Please select your date of birth.');
    return;
  }

  // Convert the input to a Date object
  const dob = new Date(dobInput);
  const today = new Date();

  // Calculate the difference in years
  let age = today.getFullYear() - dob.getFullYear();

  // Adjust age if birthday hasn't occurred yet this year
  const monthDifference = today.getMonth() - dob.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  // Display the result
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Your age is ${age} years.`;
}