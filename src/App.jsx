import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent.jsx';
import TemplateExpressions from './components/TemplateExpressions.jsx';
import MyComponent from './components/MyComponent.jsx';

import velha from './assets/velhaV.jpg'
import OutroComponent from './components/OutroComponent.jsx';
import ComponentORemake from './components/ComponentORemake.jsx';

function App() {
  const n = 15
  const classDiferente = false
  return (
    <div className="App">
      {/* <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/> */}
      
      <ComponentORemake/>

      <h1>olha só um texto aqui</h1>

      {/* css no propio modulo */}

      <OutroComponent/>
      {/* CssInline */}
      <p style={{color:"blue", padding:"25px", background:"black", fontSize:"40px"}}>Este parágrafo é do app.jsx</p>

        {/* css com if ternário */}
      <h3 style={n > 10 ? ({color:"green", background:"black"}) : ({color:"red", background:"black"}) }>Aqui tem um texto com o primeiro estilo</h3>

      <h3 style={n < 10 ? ({color:"green", background:"white"}) : ({color:"red", background:"black"}) }>Aqui tem um texto com o segundo estilo</h3>

      {/* class diferente de acordo com a verificação  */}
      <h2 className={classDiferente ? "red-title" : "normal-title"}>TEXTO COM CLASS DIFERENTE 1</h2>
      

      {/* Importação pela pasta public */}
      <img src="./velhaCaindo.jpg" alt="Velha caindo do ceu" width={900} height={400} />

      <img src= {velha} alt="velha caindo" 
      width={900} height={400} />
    </div>
  );
}

export default App;
