"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Smartphone,
  Gamepad2,
  Code,
  Mail,
  Phone,
  MapPin,
  Star,
  Palette,
  Cpu,
  Rocket,
  ArrowRight,
  Play,
  Globe,
  Briefcase,
  Target,
  Shield,
  Clock,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import HomePage from "@/components/Home"
import logo from "@/assets/techSpring.png";
import Footer from "@/components/Footer"
import app from "@/assets/5467426_1720.jpg"
import game from "@/assets/11667595_20945449.jpg";
import Navbar from "@/components/Navbar"

// Custom hook for intersection observer
function useInView(options = {}) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return [ref, isInView] as const
}

export default function TechspringWebsite() {
  const [heroRef, heroInView] = useInView()
  const [servicesRef, servicesInView] = useInView()
  const [workRef, workInView] = useInView()
  const [statsRef, statsInView] = useInView()
  const [contactRef, contactInView] = useInView()
  const [industriesRef, industriesInView] = useInView()
  const [processRef, processInView] = useInView()

  return (
    <div className="min-h-screen bg-gray-50">
     <Navbar/>

      <HomePage />

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container px-6 md:px-8 max-w-6xl mx-auto">
          <div ref={statsRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
            <div
              className={`space-y-4 transition-all duration-1000 ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="text-4xl md:text-6xl font-bold text-blue-600">150+</div>
              <div className="text-xl font-medium text-gray-900">Projects Delivered</div>
              <div className="text-lg text-gray-600">Successfully completed across various industries</div>
            </div>
            <div
              className={`space-y-4 transition-all duration-1000 ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="text-4xl md:text-6xl font-bold text-blue-600">98%</div>
              <div className="text-xl font-medium text-gray-900">Client Satisfaction</div>
              <div className="text-lg text-gray-600">Consistently exceeding client expectations</div>
            </div>
            <div
              className={`space-y-4 transition-all duration-1000 ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="text-4xl md:text-6xl font-bold text-blue-600">5M+</div>
              <div className="text-xl font-medium text-gray-900">App Downloads</div>
              <div className="text-lg text-gray-600">Combined downloads across all our apps</div>
            </div>
            <div
              className={`space-y-4 transition-all duration-1000 ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div className="text-4xl md:text-6xl font-bold text-blue-600">24/7</div>
              <div className="text-xl font-medium text-gray-900">Support Available</div>
              <div className="text-lg text-gray-600">Round-the-clock technical support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 ">
        <div className="container max-w-7xl px-6 md:px-8 mx-auto">
          {/* Header */}
          <div
            ref={servicesRef}
            className={`text-center space-y-4 mb-16 transition-all duration-1000 ${servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Services We Offer
            </h2>
            <p className="text-lg md:text-xl  max-w-2xl mx-auto leading-relaxed">
              From powerful mobile apps to immersive games, we craft digital experiences that inspire and deliver real results.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {/* Mobile App Development */}
            <div
              className={`transition-all duration-1000 ${servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: "200ms" }}
            >
              <Card className="relative overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl group h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="animate-float">
                      <Image
                        src={app}
                        alt="Mobile Development"
                        width={380}
                        height={380}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#2d3725] mb-4">Mobile App Development</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    We build powerful, user-friendly mobile applications tailored to your goals across iOS, Android, and cross-platform environments.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Native iOS & Android Apps",
                      "React Native & Flutter Development",
                      "UI/UX Design and Interactive Prototypes",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Game Development */}
            <div
              className={`transition-all duration-1000 ${servicesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: "400ms" }}
            >
              <Card className="relative overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl group h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="animate-float-delayed">
                      <Image
                        src={game}
                        alt="Game Development"
                        width={380}
                        height={380}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#2d3725] mb-4">Game Development</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    From casual games to complex multiplayer experiences, we design engaging worlds and seamless gameplay that players love.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Unity and Unreal Engine Development",
                      "2D, 3D, AR, VR, and Multiplayer Game Builds",
                      "Custom Game Design with Immersive UX",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <span className="inline-block w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 md:py-32 bg-gray-50">
        <div className="container px-6 md:px-8 max-w-6xl mx-auto">
          <div
            ref={industriesRef}
            className={`text-center space-y-4 mb-16 transition-all duration-1000 ${industriesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {/* <Badge className="bg-blue-100 text-blue-700">Industries We Serve</Badge> */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Diverse Industry Experience</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've successfully delivered projects across various industries, understanding unique challenges and
              requirements of each sector.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Healthcare", icon: "🏥", desc: "Medical apps, telemedicine, health tracking" },
              { name: "E-commerce", icon: "🛒", desc: "Online stores, marketplaces, payment systems" },
              { name: "Education", icon: "📚", desc: "E-learning platforms, educational games" },
              { name: "Finance", icon: "💰", desc: "Fintech apps, banking solutions, crypto" },
              { name: "Entertainment", icon: "🎮", desc: "Gaming, streaming, social platforms" },
              { name: "Real Estate", icon: "🏠", desc: "Property apps, virtual tours, CRM" },
              { name: "Food & Beverage", icon: "🍕", desc: "Food delivery, restaurant apps" },
              { name: "Travel", icon: "✈️", desc: "Booking platforms, travel guides" },
            ].map((industry, index) => (
              <div
                key={industry.name}
                className={`transition-all duration-1000 ${industriesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl text-center p-6 h-full">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-sm text-gray-600">{industry.desc}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-20 md:py-32 bg-white">
        <div className="container px-6 md:px-8 max-w-6xl mx-auto">
          <div
            ref={workRef}
            className={`text-center space-y-4 mb-16 transition-all duration-1000 ${workInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            {/* <Badge className="bg-blue-100 text-blue-700">Our Portfolio</Badge> */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our latest work and successful digital solutions that have transformed businesses
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <div
              className={`transition-all duration-1000 ${workInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: "200ms" }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl group">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=FitTracker+Pro+App+Interface"
                    alt="FitTracker Pro"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Mobile App
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">FitTracker Pro</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    A comprehensive fitness tracking application with AI-powered workout recommendations, social
                    features, and seamless wearable device integration.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        React Native
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        AI/ML
                      </Badge>
                    </div>
                    <span className="text-xs text-gray-500">4.8★ App Store</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">50K+ Downloads</span>
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700">
                      View Case Study <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Project 2 */}
            <div
              className={`transition-all duration-1000 ${workInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: "400ms" }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl group">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=MindBender+3D+Game+Screenshot"
                    alt="MindBender Game"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    3D Game
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">MindBender</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    An addictive 3D puzzle game featuring over 500 unique levels, multiplayer challenges, and stunning
                    graphics built with Unity 3D.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        Unity 3D
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Multiplayer
                      </Badge>
                    </div>
                    <span className="text-xs text-gray-500">4.9★ Google Play</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">1M+ Downloads</span>
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700">
                      View Case Study <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Project 3 */}
            <div
              className={`transition-all duration-1000 ${workInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: "600ms" }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl group">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400&text=ShopEasy+E-commerce+Platform"
                    alt="ShopEasy App"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    E-commerce
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">ShopEasy</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Modern e-commerce platform with AR try-on features, seamless payment integration, and personalized
                    shopping experiences powered by machine learning.
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <Badge variant="secondary" className="text-xs">
                        React Native
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        AR
                      </Badge>
                    </div>
                    <span className="text-xs text-gray-500">Featured by Apple</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">$2M+ Revenue</span>
                    <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700">
                      View Case Study <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 md:py-32 bg-gray-50">
        <div className="container px-6 md:px-8 max-w-6xl mx-auto">
          <div
            ref={processRef}
            className={`text-center space-y-4 mb-16 transition-all duration-1000 ${processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">How We Work</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proven development process ensures successful project delivery from concept to launch
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                desc: "We analyze your requirements, research your market, and create a detailed project roadmap.",
                image: "/graphics/discovery.png",
              },
              {
                step: "02",
                title: "Design & Prototype",
                desc: "Our designers create wireframes, mockups, and interactive prototypes for validation.",
                image: "/graphics/design.png",
              },
              {
                step: "03",
                title: "Development & Testing",
                desc: "Agile development with continuous testing to ensure quality and performance.",
                image: "/graphics/development.png",
              },
              {
                step: "04",
                title: "Launch & Support",
                desc: "Deployment, app store submission, and ongoing maintenance and support.",
                image: "/graphics/launch.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${processInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Card className="h-full flex flex-col border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white rounded-2xl p-8 text-center">
                  <div className="flex flex-col items-center min-h-[180px]">
                    <div className="w-20 h-20 mb-4 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-inner">
                      <img src={item.image} alt={item.title} className="w-12 h-12 object-contain" />
                    </div>
                    <div className="text-2xl font-bold text-gray-500 mb-1">{item.step}</div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mt-auto">{item.desc}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Stats Section */}
      {/* <section className="py-20 md:py-32 bg-white">
        <div className="container px-6 md:px-8 max-w-6xl mx-auto">
          <div ref={statsRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
            <div
              className={`space-y-4 transition-all duration-1000 ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600">150+</div>
              <div className="text-lg font-medium text-gray-900">Projects Delivered</div>
              <div className="text-sm text-gray-600">Successfully completed across various industries</div>
            </div>
            <div
              className={`space-y-4 transition-all duration-1000 ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600">98%</div>
              <div className="text-lg font-medium text-gray-900">Client Satisfaction</div>
              <div className="text-sm text-gray-600">Consistently exceeding client expectations</div>
            </div>
            <div
              className={`space-y-4 transition-all duration-1000 ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600">5M+</div>
              <div className="text-lg font-medium text-gray-900">App Downloads</div>
              <div className="text-sm text-gray-600">Combined downloads across all our apps</div>
            </div>
            <div
              className={`space-y-4 transition-all duration-1000 ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600">24/7</div>
              <div className="text-lg font-medium text-gray-900">Support Available</div>
              <div className="text-sm text-gray-600">Round-the-clock technical support</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container px-6 md:px-8 max-w-6xl mx-auto">
          <div
            ref={contactRef}
            className={`text-center space-y-8 mb-16 transition-all duration-1000 ${contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold">Let's Work Together</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Ready to transform your ideas into powerful digital solutions? Our team is here to help you succeed.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email Us</h3>
                    <p className="text-blue-100">hello@techspring.com</p>
                    <p className="text-blue-100">business@techspring.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Call Us</h3>
                    <p className="text-blue-100">+1 (555) 123-4567</p>
                    <p className="text-blue-100">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Visit Us</h3>
                    <p className="text-blue-100">
                      123 Tech Street, Suite 456
                      <br />
                      Innovation City, IC 12345
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Business Hours</h3>
                    <p className="text-blue-100">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-blue-100">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 ${contactInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: "400ms" }}
            >
              <Card className="border-0 shadow-2xl bg-white rounded-2xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Your Project</h3>
                  <form className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          placeholder="+1 (555) 123-4567"
                          className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          placeholder="Your Company"
                          className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Select a service</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="game-dev">Game Development</option>
                        <option value="web-dev">Web Development</option>
                        <option value="ui-ux">UI/UX Design</option>
                        <option value="consulting">Tech Consulting</option>
                        <option value="qa">Quality Assurance</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Budget
                      </label>
                      <select
                        id="budget"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                      >
                        <option value="">Select budget range</option>
                        <option value="10k-25k">$10K - $25K</option>
                        <option value="25k-50k">$25K - $50K</option>
                        <option value="50k-100k">$50K - $100K</option>
                        <option value="100k+">$100K+</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project requirements, goals, and timeline..."
                        rows={4}
                        className="border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg"
                      />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3">
                      Send Project Inquiry
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </div>
  )
}