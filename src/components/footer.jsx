import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold">Pizza Delights</h3>
            <p className="mt-4 text-gray-400">
              Serving delicious pizzas since 2010. Made with love and the finest ingredients.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Contact Us</h3>
            <address className="mt-4 not-italic text-gray-400">
              <p>123 Pizza Street</p>
              <p>New York, NY 10001</p>
              <p className="mt-2">Phone: (555) 123-4567</p>
              <p>Email: info@pizzadelights.com</p>
            </address>
          </div>
          <div>
            <h3 className="text-xl font-bold">Opening Hours</h3>
            <div className="mt-4 text-gray-400">
              <p>Monday - Thursday: 11am - 10pm</p>
              <p>Friday - Saturday: 11am - 12am</p>
              <p>Sunday: 12pm - 9pm</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-400">
              © {new Date().getFullYear()} Pizza Delights. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
