import { useEffect, useState } from "react";

const useFood = () => {
  const [food, setFood] = useState([]);
  const [loading , setLoading] = useState(true);

  useEffect(() => {
    fetch("foods.json")
      .then((res) => res.json())
      .then((data) => {
        setFood(data)
        setLoading(false)
    });
  }, []);
  return [food,loading];
};
export default useFood;