import './ExploreContainer.css';
import { IonIcon, IonButton, IonSearchbar } from '@ionic/react'
import { volumeHigh } from 'ionicons/icons'

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <>
      <div className="container">
        <div>
          <strong>Hello</strong>
          <div className="word-phonetics">
            <p>
              <strong>/həˈləʊ/</strong>
            </p>
            <IonButton fill="clear">
              <IonIcon icon={volumeHigh} className="volume-icon" color="primary"></IonIcon>
            </IonButton>
          </div>

          {/* -- */}
          <p style={{ fontSize: '14px' }}>
            origin: “early 19th century: variant of earlier hollo; related to holla."
          </p>
          <div className="definition-container" style={{}}>
            <div className="definition-number">1.</div>
            <div>
              <div className="definition-text">
                {/* <span>(Interjection) This is the definition of the word adding some gibberish to see what it show now.</span> */}
                <span>(exclamation) used as a greeting or to begin a phone conversation.</span>
                <div className="word-meta">
                  <div className="example">sentence: “hello there, Katie!"</div>
                  <div className="synonym">Synonyms: “"</div>
                </div>
              </div>
            </div>
          </div>
          {/* -- */}

        </div>
      </div>

      {/* -- */}
      {/* <div className="search-container">
        Thattttttttttttttttttt
        <IonSearchbar animated={true} placeholder="Animated"></IonSearchbar>
      </div> */}
      {/* -- */}
    </>
  );
};

export default ExploreContainer;
