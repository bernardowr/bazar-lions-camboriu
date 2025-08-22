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
        <h4>
          🗓 Data: 13/09/2025 |
          📍 Local: OAB Camboriú - Rua Dr. Acácio Bernardes, 7 |
          ⏰ Horário: Das 9h às 13h
        </h4>
      </section>
      <section className="produtos">
        <ListaProdutos />
      </section>
      <section className="sobre">
        <h3>Regras para Participação</h3>
        <p>Compras apenas presenciais – não será possível reservar ou comprar online. As mercadoria serão vendidas somente
          para pessoas físicas (CPF). Proibida revenda dos produtos adquiridos. Produtos sem garantia ou troca. Limite de
          compra por CPF: R$ 2.500,00 por CPF (ou limite de quantidade por categoria). É obrigatório apresentar CPF e RG no
          momento da compra. Entrada gratuita (haverá controle de acesso por ordem de chegada). Pagamento somente em dinheiro
          e PIX.</p>
        <p> Quantidade máxima para cada item: 👕 Vestuário: 12 unidades (3 unidades por tipo);  🧺 Artigos de bazar:
          15 unidades (3 unidades por tipo); 📱 Equipamentos eletrônicos: 2 unidades por tipo; ⌚ Relógios de pulso: 5
          unidades;💄 Perfumes e cosméticos: 5 unidades (3 unidades por tipo).</p>
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
