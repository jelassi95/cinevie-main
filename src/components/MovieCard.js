import "../styles/moviecard.scss";
import {Link}  from "react-router-dom";
import {useNavigate} from 'react-router-dom';

//style={{background:`url(${img})`, backgroundRepeat: "no-repeat!important",backgroundSize: "contain!important"} }
const MovieCard =  ({title,vues,likes, description="",img,id}) => {
  const navigate = useNavigate();  
  return(
    <div class="car-item" style={{position:"relative", }}>
      <div style={{position:"absolute", maxWidth:"100%"}}>
        <img src={img}  style={{ width:"100%"}} />
      </div>
  
      <div class="details">
      <div className="filter"></div>
      <div className="details-text">
        <h3>{title}</h3>
        <div>👀 {vues} K &nbsp;&nbsp; 👍 {likes} K</div>
        <p>
          {description?.length==0?"": description.split(" ").filter((_,index)=>index<=25).join(" ")  }.
        </p>
        <div onClick={() =>
                      navigate(`/ficheFilms`, { state:{id:id} })
                    } class="car-item-link">View film</div>
        <a class="car-item-link" href="#">Credits</a>
        </div>
      </div>
    </div>
    )
} 

export default MovieCard ;