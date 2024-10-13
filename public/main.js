document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/posts')
      .then(response => response.json())
      .then(posts => {
        const postsDiv = document.getElementById('posts');
        posts.forEach(post => {
          const postElement = document.createElement('div');
          postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
          postsDiv.appendChild(postElement);
        });
      });
  });
  