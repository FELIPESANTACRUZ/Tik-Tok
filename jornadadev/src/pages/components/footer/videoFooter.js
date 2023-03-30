import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function videoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__Text">
        <h3>@Liminha</h3>
        <p>Descrição do Vídeo</p>
        <div className="videoFooter__music">
          < MusicNoteIcon className="videoFooter__icon"/>
          <div className="videoMusicFooter__text">
          <p>Título da musica</p>
          </div>  
        </div>
      </div>
      <img 
      className="videoFooter__record"
      alt="Imagem de um vinil girando"
      src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default videoFooter;
