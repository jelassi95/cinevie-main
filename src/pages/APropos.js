import React from "react";
import Navigation from "../components/Navigation";
import CitiesSlider from "../components/Carousel"
import Footer from "../components/Footer"
import CategoriesMovies from "../components/Categories";
import "../styles/apropos.scss"

 
const APropos = () => {
    

  return (
    <>
      <Navigation />
      <div id="messages">
      <div>
			<div class="infos">
				<img src="/safa.png" alt="" title="by tresMunkeys" />
				<a href="https://twitter.com/webodream" class="sprite twitter">@webodream</a>
				<a href="https://www.facebook.com/groups/115089745169149" class="sprite facebook">depot.webdesigner</a>
				<a href="https://github.com/arbaoui-mehdi" class="sprite github">@arbaoui-mehdi</a>
			</div>
			<div className="content">
				<h3>
					Safa
					<b>Integration </b>
				</h3>
			<p>
      Je suis Safa Jelassi  j'ai été assignée à la partie intégration  web de notre application Web de films dans le cours projet intégration .
      </p>
			</div>
		  </div>
      <div>
			<div class="infos">
				<img src="/chantal.png" alt="" title="by tresMunkeys" />
				<a href="https://twitter.com/webodream" class="sprite twitter">@webodream</a>
				<a href="https://www.facebook.com/groups/115089745169149" class="sprite facebook">depot.webdesigner</a>
				<a href="https://github.com/arbaoui-mehdi" class="sprite github">@arbaoui-mehdi</a>
			</div>
			<div className="content">
				<h3>
					Chantal
					<b>Design UI/UX </b>
				</h3>
        <p>
        je suis Chantal De Rome, j'ai été assignée à la partie Design du cours Projet d'Intégration de l'application TMDB de films. Nous avons utilisé XD afin de produire(Moodboard, Maquettes de films, Infolettre) et Illustrator pour le logo.
        </p>
			</div>
		  </div>
      <div>
			<div class="infos">
				<img src="/yolande.png" alt="" title="by tresMunkeys" />
				<a href="https://twitter.com/webodream" class="sprite twitter">@webodream</a>
				<a href="https://www.facebook.com/groups/115089745169149" class="sprite facebook">depot.webdesigner</a>
				<a href="https://github.com/arbaoui-mehdi" class="sprite github">@arbaoui-mehdi</a>
			</div>
			<div className="content">
				<h3>
					Yolande
					<b>Programmation </b>
				</h3>
         <p>
         Je suis Yolande Nana étudiante en développement Web .Dans le cour de projet  d'intégration j'ai été assignée à la partie Programmation de notre application Web de films. Nous avons utilisé comme langage ReactJs, Api rest de TMDB.
         </p>
			</div>
		  </div>
      </div>
      <Footer />
    </>
  );
};
export default APropos;
