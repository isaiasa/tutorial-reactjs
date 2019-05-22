import React from 'react';

class MeuComponente extends React.Component {

    render() {

        return (
            <div>Este é o meu componente! O nome é {this.props.nome} </div>
        );
    }
}

export default MeuComponente;