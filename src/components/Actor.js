import React from "react";
import "../styles/Actor.scss";
const Actor = (props) => {
  const { actor, onClickActor } = props;

  return (
    <div className="actor" onClick={onClickActor} style={{background:"white", padding:"40px 20px", borderRadius:"20px", boxShadow:"4px 8px 16px gray"}}>
      <img
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
            : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
        }
        alt="profile" 
        style={{width:"250px", height:"250px",borderRadius:"50%"}}
      />
      <div className="actorContainer">
        <ul style={{listStyleType:"none"}}>
          <li className="actorName" style={{fontSize:"30px", color:"#26273E"}}>{actor.original_name}</li>
        </ul>
      </div>
    </div>
  );
};

export default Actor;
