import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import Card from "../../components/Card";
import AppContext from "../../context";

import "./styled.scss";

function Orders() {
  const { onAddToFavorite, onAddToCart } = useContext(AppContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          "https://64c1da41fa35860baea0e309.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        // alert("Ошибка при запросе заказов");
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="orders">
      <div className="order__block d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>

      <div className=" orders-card d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card key={index} loading={isLoading} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
