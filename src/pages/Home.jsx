import { useState, useEffect } from "react";
import { getLures } from "../lib/lure.requests";
import { ItemListContainer } from "../components";

export const Home = () => {
  
  const [products, setProducts] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    getLures()
    .then(res => {
      setIsLoading(false);
      setProducts(res)}
      ) 
  }, []);

  return (
    <div>
      <div className="container">
        <ItemListContainer products={products} />
      </div>
    </div>
  );
};
