import React from "react"
import  Button  from "./ui/button"

export function PizzaCard({ pizza }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
      <div className="aspect-square overflow-hidden">
        <img
          src={pizza.image || "/placeholder.svg"}
          alt={pizza.name}
          width={300}
          height={300}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{pizza.name}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{pizza.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-red-600">${pizza.price.toFixed(2)}</span>
          <Button className="bg-red-600 hover:bg-red-700">Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}
