// TODO: Create a variable that selects the form element
const form = document.querySelector('form');
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log('Form submission handler triggered.');

    // Grab the form data
    const username = document.querySelector('#username').value.trim();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const errorElement = document.querySelector('#error');
   console.log('Error element:', errorElement);


    // Check for missing data
    if (!username || !title || !content) {
        console.log('Missing data detected.');
      errorElement.textContent = 'Please complete the form.';
      errorElement.style.color = 'red';
      return;
    }
  
    // Store form data in local storage
    const formData = { username, title, content };
    localStorage.setItem('formData', JSON.stringify(formData));
  
    // Redirect to the blog page
    redirectToBlog();
  }
  
  // Example redirectPage function (you can replace this with your actual implementation)
  function redirectToBlog() {
    window.location.href = './blog.html'; // Redirect to the blog page
  }
  
  // Add an event listener to the form on submit
  form.addEventListener('submit', handleFormSubmission);
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
