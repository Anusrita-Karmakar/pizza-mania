import { PizzaCard } from "./pizza-card"

const popularPizzas = [
  {
    id: 1,
    name: "Pepperoni Passion",
    description: "Classic pepperoni with extra cheese on our signature crust",
    price: 14.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Veggie Supreme",
    description: "Bell peppers, mushrooms, onions, olives, and tomatoes",
    price: 13.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Meat Lovers",
    description: "Pepperoni, sausage, bacon, ham, and ground beef",
    price: 16.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "BBQ Chicken",
    description: "Grilled chicken, bacon, onions with tangy BBQ sauce",
    price: 15.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 5,
    name: "Hawaiian",
    description: "Ham, pineapple, and extra cheese on a thin crust",
    price: 13.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 6,
    name: "Buffalo Chicken",
    description: "Spicy buffalo chicken with blue cheese and ranch",
    price: 15.99,
    image: "/placeholder.svg?height=200&width=200",
  },
]

export function PopularPizzas() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Most Popular Pizzas</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Try our customer favorites, crafted with premium ingredients and baked to perfection.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularPizzas.map((pizza) => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    </section>
  )
}
