import './App.css';
import Header from './components/Header'
import Ads from './components/Ads'
import Maincontent from './components/MainContent'


function App() {

  const sideBarNews = [
    {
      number: 1,
      news: 'Yhdysvalloilla on vakava ongelma: Koronavirus tappaa enemmän ihmisiä kuin muissa vauraissa maissa'
    },
    {
      number: 2,
      news: 'Jukka Jalosen kommentit ihmisoikeuksista tavoittivat kisajärjestäjät'
    },
    {
      number: 3,
      news: 'Koko Suomi tuntee Väinö Karjalaisen nimeltä vauvasta asti'
    },
    {
      number: 4,
      news: 'Maailman toiseksi suurin kalastusalus laski Ranskan rannikolla mereen yli 100 000 kuollutta kalaa'
    },
    {
      number: 5,
      news: 'Suomessa on niin jylhä kanjoni, ettei sellaista uskoisi löytyvän täältä'
    }
  ]
 
  
  return (
    <div className="App">
      <Header/>
      <Ads/>
      <Maincontent sideBarList={sideBarNews}/>
      
    </div>
  );
}

export default App;
