import React from 'react';
import './App.css';
import ListaProdutos from './ListaProdutos';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src="/Logo_Lions_Camboriú.png" alt="Lions Clube Camboriú" className="logo" />
        <h1>Bazar Solidário</h1>
        <h2>Lions Clube Camboriú</h2>
      </header>
      <section className="banner">
        <h3>Produtos doados pela Receita Federal</h3>
        <p>Participe do nosso bazar e contribua com nossas ações solidárias!</p>
      </section>
      <section className="produtos">
        <ListaProdutos />
      </section>
      <section className="sobre">
        <h3>Sobre o Lions Clube Camboriú</h3>
        <p> O Lions Clube Camboriú é um grupo de voluntários dedicados que faz parte do Lions Clube International,
           a maior organização de clubes de serviço do mundo. Nossos membros estão comprometidos em servir a nossa comunidade, 
           focando em áreas como saúde ocular, meio ambiente e alívio da fome. Através de diversas ações e projetos, buscamos
            fazer a diferença na vida das pessoas, guiados pelo lema "Nós Servimos".</p>
      </section>
      <footer className="rodape">
        <p style={{ fontWeight: 'bold', fontSize: 18 }}>Contato</p>
        <p>Telefone: (47) 98834-8979</p>
        <p>Email: lionsclubecamboriu@gmail.com</p>
        <p>Instagram: <a href="https://instagram.com/lionscamboriu" target="_blank" rel="noopener noreferrer" style={{ color: '#ffb81c' }}>@lionscamboriu</a></p>
        <p>Facebook: <a href="https://facebook.com/lionscamboriu" target="_blank" rel="noopener noreferrer" style={{ color: '#ffb81c' }}>facebook.com/lionscamboriu</a></p>
      </footer>
    </div>
  );
}

export default App;
