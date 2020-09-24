import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let lista = [
  {id : 1, nome: 'Carolina', prato: 'Churrasco'},
  {id : 2, nome: 'Anderson', prato: 'angu com jiló'},
  {id : 3, nome: 'Leonardo', prato: 'Omelete'},
  {id : 4, nome: 'Luciane', prato: 'Batata'},
  {id : 5, nome: 'Douglas Araujo', prato: 'Churrasco'},
  {id : 6, nome: 'Claudio', prato: 'Churrasco'},
  {id : 7, nome: 'Jonas', prato: 'Escondidinho'},
  {id : 8, nome: 'Cleber', prato: 'Sushi'},
  {id : 9, nome: 'Kallebe', prato: 'Paella'},
  {id : 10, nome: 'Douglas Brian', prato: 'bife a parmegiana'},
  {id : 11, nome: 'Marcela', prato: 'Strogonoff de frango'},
  {id : 12, nome: 'Renan', prato: 'Japones'},
  {id : 13, nome: 'Isabella', prato: 'Japones '},
  {id : 14, nome: 'Gabriel', prato: 'Lasanha'},
  {id : 15, nome: 'Raphael Medeiros', prato: 'Sorvete'},
  {id : 16, nome: 'Leticia', prato: 'Lasanha'},
  {id : 17, nome: 'Lanai', prato: 'Churrasco'},
  {id : 18, nome: 'Raquel', prato: 'Empadão'},
  {id : 19, nome: 'Pedro', prato: 'Risoto'},
  {id : 20, nome: 'Edgar', prato: 'Carbonara'},
  {id : 21, nome: 'Raphael Fernandes', prato: 'Batata'}
  ]


const showChurrasco = objs => {
  let newLista = lista.filter(obj => obj.prato === 'Churrasco').map(({nome, prato}) => <Pratos nome={nome} prato={prato} />)
  objs.setState({lt : newLista})

}

const deleteItem = (jObj, idlist) => {
  lista = lista.filter(o => o.id !== idlist)
  let newLista = lista.map(({id, nome, prato}) => <Pratos state={jObj} id={id} nome={nome} prato={prato} />)
  jObj.setState({lt : newLista})

}

const Pratos = ({state, id, nome, prato,}) => {
  return (
      <tr key={id}>
        <td>{nome}</td>
        <td>{prato}</td>
        <td>
          <button className="btn btn-primary" onClick={() => deleteItem(state, id)}>Excluir</button>
        </td>
      </tr>
    )
}
class Table extends Component{

  constructor(props){
    super(props)
    this.state = {lt : lista.map(({id, nome, prato}) => <Pratos state={this} id={id} nome={nome} prato={prato} />)}
    
  }

  render(){
    return(
      <>
      <button className="btn btn-primary" onClick={() => showChurrasco(this)}>Show Churrasco</button>
      <table className="table table-striped">
        <thead>
            <tr>
            <th scope="col">Nomes</th>
            <th scope="col">Pratos</th>
          </tr>
        </thead>
        <tbody>
          {this.state.lt}
        </tbody>
      </table>
      </>
    )
  }
}



ReactDOM.render(
    <Table />,
  document.getElementById('root')
);
