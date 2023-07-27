import React from "react";
import Card from "../../components/Card";
import AppContext from "../../context";
import "./styled.scss";

function Favorites() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);

  return (
    <div className="favorites">
      <div className="favorites__block">
        <img width={34} height={34} src="img/go-back-arrow.svg" alt="Закладки" />
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorites.map((item, index) => (
          <Card key={index} favorited={true} onFavorite={onAddToFavorite} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
