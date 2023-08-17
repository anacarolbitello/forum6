import React, { useState } from 'react';
import './App.css';

function App() {
  const [authorName, setAuthorName] = useState('');
  const [postContent, setPostContent] = useState('');
  const [posts, setPosts] = useState([]);

 

  const createPost = () => {
    if (postContent.trim() !== '') {
      const newPost = {
        author: authorName,
        content: postContent,
        liked: false
      };

      setPosts([...posts, newPost]);
      setAuthorName('');
      setPostContent('');
    }
  };

  const toggleLike = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].liked = !updatedPosts[index].liked;
    setPosts(updatedPosts);
  };

  return (
      <div className="App">
          <header>
              <div>Forum Chat</div>
                  <nav>
                    <a href="qs.html">Quem Somos</a>
                    <a href="login.html">Login</a>
                    <a href="cadastro.html">Cadastro</a>
                  </nav>
          </header>
      <main>
          <div className="title">
            <h1>Classes Sociais Marginalizadas no Mundo do Trabalho</h1>
          </div>
          <div id="forum-section" className="forum-section">
              <div className="post-form">
                <h2>Adicionar Nova Postagem</h2>
          <input
              type="text"
              className="author-input"
              placeholder="Seu nome"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
            />
          <textarea
              placeholder="Digite sua postagem aqui"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
          <button onClick={createPost}>Postar</button>
          </div>
              <div className="post-list">
                {posts.map((post, index) => (
              <div key={index} className="post">
                <p className="author">Por: {post.author}</p>
                  <p>{post.content}</p>
          <span
                  className={`like-button ${post.liked ? 'liked' : ''}`}
                  onClick={() => toggleLike(index)}>
                  Like
          </span>
      </div>
            ))}
     </div>
   </div>
 </main>
</div>
  );
}

 

export default App;
