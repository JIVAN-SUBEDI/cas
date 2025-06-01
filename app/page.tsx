"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Coins, CreditCard, Gift, Users, Calendar, Star, Zap, Clock } from "lucide-react"

export default function VegasCityOnline() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null)

  const games = [
    { name: "Juwa", popular: true ,link:"https://dl.juwa777.com/"},
    { name: "Game Vault", popular: true ,link:"https://download.gamevault999.com/"},
    { name: "Cash Machine", popular: true , link:"https://www.cashmachine777.com/"},
    { name: "Fire Kirin", popular: true , link:"https://firekirin.com/download-fire-kirin-app.html" },
    { name: "Cash Frenzy", popular: false ,link:"https://www.cashfrenzy777.com/"},
    { name: "Milky Way", popular: true, link:"https://milkywayapp.xyz/" },
    { name: "Orion Stars", popular: true ,link:"http://start.orionstars.vip:8580/"},
    { name: "Ultra Panda", popular: false , link:"https://www.ultrapanda.mobi/" },
    { name: "Las Vegas Sweeps", popular: false, link:"https://vegassweeps.app/" },
  ]

  const paymentMethods = [
    { name: "Cash App", icon: "💰" },
    { name: "Chime", icon: "🏦" },
    { name: "PayPal", icon: "💳" },
  ]

  const bonuses = [
    { icon: <Users className="w-5 h-5" />, title: "Referral Bonus", desc: "Referrer: 30%, Referred: 50%" },
    { icon: <Gift className="w-5 h-5" />, title: "Signup Bonus", desc: "+30% on first deposit" },
    { icon: <Calendar className="w-5 h-5" />, title: "Daily Bonus", desc: "+10% for regular players" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-900 border-b-4 border-yellow-500 shadow-2xl">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center gap-4">
            {/* Logo */}
            <div className="w-16 h-16 md:w-20 md:h-20  rounded-full flex items-center justify-center text-3xl md:text-4xl">
              🎰
            </div>
            <div className="text-center">
              <h1 className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-2">
                Vegas City Online
              </h1>
              <p className="text-gray-300 text-lg">The Ultimate Gaming Experience</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="relative z-10 container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Welcome to the Ultimate Online Casino Experience
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Play top games like Juwa, Fire Kirin, Milky Way, and more. 💸 Instant payouts. 24/7 access. Fast, friendly
            support. 📲
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black font-bold"
              onClick={() => window.open("https://www.facebook.com/profile.php?id=61575702160413", "_blank")}
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Playing Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
              onClick={() => window.open("https://www.facebook.com/profile.php?id=61575702160413", "_blank")}
            >
              <Gift className="w-5 h-5 mr-2" />
              Claim Bonus
            </Button>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            🎮 Popular Games
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {games.map((game, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-yellow-500 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  selectedGame === game.name ? "border-yellow-500 ring-2 ring-yellow-500/50" : ""
                }`}
                onClick={() => setSelectedGame(selectedGame === game.name ? null : game.name)}
              >
                <CardContent className="p-4 text-center">
                  <div className="mb-2">
                    {game.popular && (
                      <Badge className="bg-yellow-500 text-black mb-2">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                  <h4 className="font-semibold text-white">{game.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Links Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            📱 Download Games
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.map((game, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-yellow-500 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-lg text-white">{game.name}</h4>
                    {game.popular && (
                      <Badge className="bg-yellow-500 text-black">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-3">
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => window.open(game.link, "_blank")}
                    >
                      📱 Android APK
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-300 mb-4">Need help with installation? Contact us on Facebook!</p>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => window.open("https://www.facebook.com/profile.php?id=61575702160413", "_blank")}
            >
              <Users className="w-4 h-4 mr-2" />
              Get Download Help
            </Button>
          </div>
        </div>
      </section>

      {/* Bonus Features */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
                <CardContent className="p-6 text-center">
                  <div className="text-yellow-500 mb-4 flex justify-center">{bonus.icon}</div>
                  <h4 className="font-bold text-lg mb-2 text-yellow-400">{bonus.title}</h4>
                  <p className="text-gray-300">{bonus.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cashout Policy */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                <Coins className="w-8 h-8 inline mr-2" />
                Cashout & Bonus Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <h4 className="font-bold text-yellow-400 mb-2">Deposit $5–$10</h4>
                    <p className="text-white">Min Cashout = $40 | Max = Deposit ×10</p>
                  </div>
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                    <h4 className="font-bold text-yellow-400 mb-2">Deposit $11+</h4>
                    <p className="text-white">Min = Deposit ×4 | Max = Deposit ×10</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-4 bg-red-900/20 rounded-lg border border-red-700">
                    <p className="text-red-300">⚠️ Points beyond max will be voided</p>
                  </div>
                  <div className="p-4 bg-blue-900/20 rounded-lg border border-blue-700">
                    <p className="text-blue-300">🚫 No bonus on Free Play earnings</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                <CreditCard className="w-8 h-8 inline mr-2" />
                Accepted Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 text-center hover:border-yellow-500 transition-colors"
                  >
                    <div className="text-4xl mb-2">{method.icon}</div>
                    <h4 className="font-semibold text-white">{method.name}</h4>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                <Clock className="w-8 h-8 inline mr-2" />
                24/7 Access & Support
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-300 mb-6">
                We're here for you anytime, anywhere. Fast and friendly support to make your experience smooth and
                secure.
              </p>
              <div className="flex justify-center">
                <Button
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open("https://www.facebook.com/profile.php?id=61575702160413", "_blank")}
                >
                  <Users className="w-4 h-4 mr-2" />
                  Join Us on Facebook
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-black border-t border-gray-800 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2025 Vegas City Online. All rights reserved.</p>
          <p className="text-sm text-gray-500 mt-2">Play responsibly. Must be 18+ to participate.</p>
        </div>
      </footer>
    </div>
  )
}
