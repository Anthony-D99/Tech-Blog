document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.post-create').addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const username = req.params.session.username
      const title = document.querySelector('.race-create').value.trim();
      const content = document.querySelector('.class-create').value.trim();
      
  
      if (username && title && content) {
        try {
          const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ username, title, content}),
            headers: { 'Content-Type': 'application/json' },
          });
  
          if (response.ok) {
            const newPost = await response.json();
            console.log(newPost);
            document.location.replace('/');
          } else {
            alert('Failed to create post.');
          }
        } catch (error) {
          console.log('Error creating post:', error);
          alert('Failed to create post. Please check the console for more details.');
        }
      }
    });
  });

  
  