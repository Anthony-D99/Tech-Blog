document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.comment-create').addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const content = document.querySelector('.comment-content').value.trim();
      
  
      if (content) {
        try {
          const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({content}),
            headers: { 'Content-Type': 'application/json' },
          });
  
          if (response.ok) {
            const newComment = await response.json();
            console.log(newComment);
            document.location.replace('/');
          } else {
            alert('Failed to create comment.');
          }
        } catch (error) {
          console.log('Error creating comment:', error);
          alert('Failed to create comment. Please check the console for more details.');
        }
      }
    });
  });

  document.querySelector(".new-comment").addEventListener('click', async (event) => {
    event.preventDefault(); 
    const createComment = document.querySelector(".comment-create")
    const newComment = document.querySelector(".new-comment")
    createComment.classList.remove("hide")
    newComment.classList.add("hide")
  })