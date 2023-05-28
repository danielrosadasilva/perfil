import './App.css';
import Header from './componentes/Header';
import Section from './componentes/Section';
import ListItem from './componentes/ListItem';
import Instagram from './assets/instagram.png'
import { GameListData, ListCanalData, ListSocialData } from './Dados/GameListData';

function App() {
  return (
    <div className="App">
      {/*header*/}
      <Header/>

      {/*section*/}
      <main>
          <Section  className="games-list" title="Meus Jogos" subtitle="Os Gamers que mais Curto Jogar!">       

          { GameListData.map((item)=>{
            return( <ListItem url={item.url} imageUrl={item.imageUrl} alt={item.alt} />)
          })}

          </Section>
          <Section className="channel-list" title="Canais e Streams" subtitle="Lista de Canais e Transmissões que não Perco!" >

            {ListCanalData.map((item)=>{
              return(
                <ListItem url={item.Url} imageUrl={item.imgUrl} alt={item.alt} />
              )
            })}

          </Section>
          <Section className="social-list" title="Minhas Redes" subtitle="Se Conecte comigo agora mesmo.." >
        
            {ListSocialData.map((item)=>{
                return(
                  
                   < ListItem url={item.url} imageUrl='./assets/instagram.png' alt={item.alt} />
                   
                )
            })}



          </Section>

      </main>
    </div>
  );
}

export default App;
