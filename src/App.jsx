import { Navbar } from "./components/navbar"
import { Hero } from "./components/hero"
import { PopularPizzas } from "./components/popular-pizzas"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PopularPizzas />
      </main>
      <Footer />
    </div>
  )
}
