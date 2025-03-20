// TODO: Create a variable that selects the main element, and a variable that selects the back button element

// TODO: Create a function that builds an element and appends it to the DOM

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

document.getElementById('back').addEventListener('click', function () {
    // Redirect to the index.html page
    window.location.href = './index.html';
  });

  // Function to display blog posts from local storage
function displayBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
  
    // Retrieve blog posts from local storage
    const formData = JSON.parse(localStorage.getItem('formData'));
  
    // Check if there are any posts
    if (!formData) {
      blogPostsContainer.innerHTML = '<p>No Blog posts yet...</p>';
      return;
    }
  
    // Create a blog post element
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post');
  
    postElement.innerHTML = `
      <h2>${formData.title}</h2>
      <p><strong>By:</strong> ${formData.username}</p>
      <p>${formData.content}</p>
    `;
  
    // Append the post to the container
    blogPostsContainer.appendChild(postElement);
  }
  
  // Call the function to display blog posts
  displayBlogPosts();