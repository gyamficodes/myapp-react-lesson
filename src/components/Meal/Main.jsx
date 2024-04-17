import axios from "axios";
import { useState, useEffect } from "react";

const Main = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
         const response = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
         setItems(response.data.meals);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);

  const ListItems = items.map((item) => (
    <section  className=" w-full h-auto bg-slate-300" key={item.idMeal}>
      <img className=" rounded-[5px]" src={item.strMealThumb} alt={item.strMeal} />
      <div className=" flex items-center justify-between">
        <p>{item.strMeal}</p>
        <p>{item.idMeal}</p>
      </div>
    </section>
  ));

  return <>
  <div className="   w-full">
    <h1 className=" text-center"> Fetching meals using api project</h1>
  <div className=" w-full grid  grid-cols-3 gap-4">
  {ListItems}
  </div>
  </div>
  </>;
};

export default Main;
