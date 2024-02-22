import React from 'react'

function Card(){
  return (
    <div className="card">
      <div className="image">
        <img src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1" alt="car" />
        <div className="infos">
          <div className="pics-numb"><i class="fa-solid fa-camera"></i>&nbsp;&nbsp;3</div>
          <div className="temps">Il y'a 3 min</div>
        </div>
      </div>
      <div className="card-infos">
        <div className="prix">3000 DHS</div>
        <div className="panier" title="Ajouter au panier"><i class="fa-solid fa-cart-shopping"></i></div>
      </div>
    </div>
  )
}

export default function Container() {
  return (
    <div className='container'>
      <div className="ann-wrapper">
        <div className="title">
          <h2>Les categories les plus demandes</h2>
          <small><a href="./categories">Voir Plus</a></small>
        </div>
        <div className="categories">
        {
          [
            {titre: "Automobile", fontAwsomeIcon: "fa-solid fa-car", bgColor: "#565E8C"}, 
            {titre: "Immobilier", fontAwsomeIcon: "fa-solid fa-house", bgColor: "#F26B1D"},
            {titre: "Electronique", fontAwsomeIcon: "fa-solid fa-mobile", bgColor: "#3D7345"},
            {titre: "Emploi", fontAwsomeIcon: "fa-solid fa-handshake", bgColor: "#7883BF"},
            {titre: "Maison et Jardin", fontAwsomeIcon: "fa-solid fa-shirt", bgColor: "#7CA67B"},
            {titre: "Sports et Fitness", fontAwsomeIcon: "fa-solid fa-heart", bgColor: "#D97E4A"},
            {titre: "Education", fontAwsomeIcon: "fa-solid fa-school", bgColor: "#BCBF5A"},
          ].map(cat => {
            return(
              <a href={`./cat=${cat.titre.toLowerCase()}`} className="categorie" style={{backgroundColor: cat.bgColor}}>
                <p className='cat-logo'><i class={cat.fontAwsomeIcon}></i></p>
                <p className='cat-titre'>{cat.titre}</p>
              </a>
            )
          })
        }
        </div>
      </div>

      <div className="ann-wrapper">
        <div className="title">
          <h2>Nouvelles annonces de Voitures</h2>
          <small><a href="./voitures">Voir Plus</a></small>
        </div>
        <div className="nouvelles-annonces" style={{gridTemplateColumns: "300px ".repeat(5)}}>
          {Array.from({length: 5}, (it, ind) => <Card length={20}/>)}
        </div>
        
      </div>
        
    </div>
  )
}
