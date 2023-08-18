import { useState, useEffect } from "react";
import { getGames } from "../lib/game.requests";
import { Loader } from "../components/Loader/Loader"
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { ContentWrap } from "../components/ContentWrap/ContentWrap"

export const Home = () => {

  const [games, setGames] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{

    getGames()
    .then(res=>{
      setIsLoading(false)
      setGames(res)
    })
  }, [])

  if (isLoading) return <Loader />

  return (
      <ContentWrap>
        <ItemListContainer products={games} />
      </ContentWrap> 
  )
}