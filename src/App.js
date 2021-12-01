import React from 'react';
import { Home } from './pages/Home';


// let produtos = [
//   {name: "Capacete de Astronalta", price:200, info: "Capacete de Astronalta"},
//   {name: "Foguete", price:200, info: "Foguete"}, 
//   {name: "Roupa de Astronalta", price:200, info: "Roupa de Astronalta"}, 
//   {name: "Bota de Astronalta", price:200, info: "Bota de Astronalta"},
//   {name: "Arma de Astronalta", price:200, info: "Arma de Astronalta"}, 
//   {name: "Luva de Astronalta ", price:200, info: "Arma de Astronalta"}, 
// ]
// class Produto extends React.Component {
//     constructor(props){
//       super (props);
//       this.state = {
//         qty: 0
//       };


//       this.add = this.add.bind (this);
//       this.remover = this.remover.bind(this);
//     }
//     add (){
//       this.setState (
//         {
//           qty: this.state.qty +1
//         }
//       );
//     }
//     remover (){
//       this.setState (
//         {
//           qty: this.state.qty -1
//         }
//       );
// }

// render () {
//   return (
//     <div>
//       <div className="row form-group">
//         <div className="col-sm-10">
//           <h4>{this.props.name} : R$ {this.props.price}</h4> 
//         </div>
//         <div className="col-sm-2 text-right"></div>
//         Quantidade: {this.props.qty}
//       </div>
//     </div>
//   )
// }


function App() {
  return (
    <div >
      <Home />
    </div>
  );
 }

export default App;
