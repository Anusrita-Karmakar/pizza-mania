import React from "react"
import Button from "./ui/button"

export function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[500px] w-full overflow-hidden">
        <img
          src="/placeholder.svg?height=500&width=1200"
          alt="Delicious Pizza Banner"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white md:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Hot & Fresh Pizza Delivered Fast
          </h1>
          <p className="mt-4 max-w-md text-lg text-white/90">
            Handcrafted with premium ingredients and delivered to your doorstep in minutes.
          </p>
          <Button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-full">
            Start Your Order
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 h-16 w-full bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
