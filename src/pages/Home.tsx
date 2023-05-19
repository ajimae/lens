import { IonContent, IonHeader, IonPage, IonSearchbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { Keyboard } from '@capacitor/keyboard'
import './Home.css';

const Home: React.FC = () => {
  // Keyboard.addListener('keyboardWillShow', (e) => {
  //   // setTimeout(Keyboard.show, 1000)
  // })

  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <ExploreContainer />
      </IonContent>
      {/* -- */}
      <div className="search-container">
        <IonSearchbar animated={true} placeholder="Search for a word"></IonSearchbar>
      </div>
      {/* -- */}
    </IonPage>
  );
};

export default Home;
