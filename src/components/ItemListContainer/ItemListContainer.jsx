import { Item } from "../Item/Item"


export const ItemListContainer = ({ products }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6  gap-12 mx-auto cursor-pointer">
      {products.map(game => {
        return <Item key={game.id} id={game.id} title={game.title} category={game.category} price={game.price} img={game.img} />
      })}
    </section>
  )
}
