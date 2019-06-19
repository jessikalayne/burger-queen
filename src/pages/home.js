import React from 'react';

const produtos = [
    {
        nome: "Camiseta",
        preco: 30.50
    },
    {
        nome: "Sapato",
        preco: 100.99
    },
    {
        nome: "Calca",
        preco: 80.78
    }
];

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comprar: []
        };
    }

    cliqueDaCompra = (item) => {
        const itemIndex = this.state.comprar.findIndex((produto) => {
            return produto.nome === item.nome;
        });
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantidade: 1 
            };
            this.setState({
                comprar: this.state.comprar.concat(newItem)
            });
        } else {
            let newComprar = this.state.comprar
            newComprar[itemIndex].quantidade += 1;
            this.setState({
                comprar: newComprar
            });
        }
    }

    render() {
        const valorTotal = this.state.comprar.reduce((acc, cur) => {
            return acc + (cur.quantidade * cur.preco) 
        }, 0);
        console.log(valorTotal);
        return (
            <div>
                {
                    produtos.map((produto, i) => {
                        return <button key={i}
                            onClick={() => this.cliqueDaCompra(produto)}>
                            {produto.nome}</button>
                    })
                }
                <hr></hr>
                <h1>Itens Comprados</h1>
                {
                    this.state.comprar.map((produto, i) => {
                        return <p key= { i }>{produto.nome} - {produto.preco * produto.quantidade} - {produto.quantidade}</p>
                    })
                }
                <hr></hr>
                <h1>Total</h1>
                <p>Valor Total : {valorTotal}</p>
            </div>
        );
    }
}

export default Home;
