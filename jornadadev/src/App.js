import "./App.css";
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
         likes={111}
         messages={222}
         shares={333} 
         name="LIMINHA"
         description="Gato top"
         music="musica épica"
         url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
         />

        <Video
         likes={444}
         messages={555}
         shares={777}
         name="LIMINHA 2"
         description="Gato top 2"
         music="musica épica 2"
         url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"        
         />
      </div>
    </div>
  );
}

export default App;
