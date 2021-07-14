import React, {useState} from "react";
import * as S from "./styled";
import axios from "axios";


function App(props) {
  const [usuario, setUsuario] = useState('')
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data))
  }
  return ( 
    <S.Container>
    <S.Input  className="usuario" placeholder="usuario" value={usuario} onChange={e => setUsuario(e.target.value)}/>
    <S.Button type="button" onClick={handlePesquisa} >Pesquisar</S.Button>
    </S.Container>
  );
}

export default App;

//return do useState vai ser =  [usuario, setUsuario]
// O STATE TEM QUE SER A ÚNICA FONTE DE VERDADE DA APLICAÇÃO.