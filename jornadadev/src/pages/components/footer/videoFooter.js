import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function videoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__Text">
        <h3>@{name}</h3>
        <p>{description}</p>
        <div className="videoFooter__music">
          < MusicNoteIcon className="videoFooter__icon"/>
          <div className="videoMusicFooter__text">
          <p>{music}</p>
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
