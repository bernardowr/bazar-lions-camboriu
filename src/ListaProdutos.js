import React from 'react';
import produtos from './produtos';

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 20,
    padding: 0,
};

const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #eee',
    borderRadius: 8,
    padding: 16,
    background: '#fff',
    minHeight: 220,
};

const ListaProdutos = () => (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
        <h2 style={{ textAlign: 'center' }}>Lista de Produtos</h2>
        <div style={gridStyle}>
            {produtos.map((produto, idx) => (
                <div key={idx} style={cardStyle}>
                    <img src={produto.imagem} alt={produto.descricao} style={{ width: 80, height: 80, objectFit: 'cover', marginBottom: 12, borderRadius: 8 }} />
                    <div style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 8 }}>{produto.descricao}</div>
                    <div>Quantidade: {produto.quantidade}</div>
                    <div>Valor: R$ {produto.valor.toFixed(2)}</div>
                </div>
            ))}
        </div>
    </div>
);

export default ListaProdutos; 