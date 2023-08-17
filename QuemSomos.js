import React from 'react';
import './QuemSomos.css'; // Importe o arquivo CSS correspondente

 

function QuemSomos() {
  const profiles = [
    { name: 'Alessandra Rost', image: 'ale.jpeg' },
    { name: 'Ana Carolina', image: 'anac.jpeg' },
    { name: 'Mariana Ferri', image: 'mari.jpeg' },
    { name: 'Vitor Camusso', image: 'vitor.jpeg' }
  ];

    return (
        <div className="quem-somos">
            <header>
                <div>Forum Chat</div>
                    <nav>
                        <a href="forum.html">Forum</a>
                        <a href="login.html">Login</a>
                        <a href="cadastro.html">Cadastro</a>
                    </nav>
            </header>
        <main>
            <div className="title">
                <h1>Quem Somos</h1>
            </div>
                <div className="image-grid">
                    {profiles.map((profile, index) => (
                <div key={index} className="profile-container">
                <div
                    className={`profile profile${index}`}
                    style={{ backgroundImage: `url(${profile.image})` }}>
                </div>
            <div className="profile-name">{profile.name}</div>
            </div>
          ))}
    </div>
  </main>
</div>
  );
}

 

export default QuemSomos;