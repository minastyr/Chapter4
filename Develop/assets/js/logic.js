// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
// Select the toggle button
const toggleButton = document.getElementById('toggle');

// Add an event listener to the toggle button
toggleButton.addEventListener('click', () => {
  // Toggle the 'dark' class on the body element
  document.body.classList.toggle('dark');

  // Save the current theme to localStorage
  const isDarkMode = document.body.classList.contains('dark');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Apply the saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

