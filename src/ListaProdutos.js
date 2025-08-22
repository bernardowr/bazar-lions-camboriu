import React from 'react';
import produtos from './produtos';
import './ListaProdutos.css';

const ListaProdutos = () => (
    <div className="lista-produtos-container">
        <h2 className="lista-produtos-titulo">Lista de Produtos</h2>
        <div className="lista-produtos-grid">
            {produtos.map((produto, idx) => (
                <div key={idx} className="produto-card">
                    <div className="produto-imagem-container">
                        <img
                            src={produto.imagem}
                            alt={produto.descricao}
                            className="produto-imagem"
                        />
                    </div>
                    <div className="produto-descricao">{produto.descricao}</div>
                    <div className="produto-info">Quantidade: {produto.quantidade}</div>
                    <div className="produto-info">Valor: R$ {produto.valor.toFixed(2)}</div>
                </div>
            ))}
        </div>
    </div>
);

export default ListaProdutos; 