import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getLures } from "../lib/lure.requests";
import { ItemListContainer } from "../components";

export const Category = () => {
    const {id} = useParams();
    const [products, setProducts] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
  
     getLures(id) 
      .then(res => {
        setIsLoading(false); 
        setProducts(res)}
        ) 
    }, [id]);
  
    return (
      <div>
        <div className="container">
          <ItemListContainer products={products} />
        </div>
      </div>
    );

}