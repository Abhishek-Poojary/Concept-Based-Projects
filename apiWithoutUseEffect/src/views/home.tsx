import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-card">
      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-bold text-foreground mb-4 text-center">Medical Data Explorer</h1>
        <p className="text-xl text-foreground/70 mb-12 text-center max-w-2xl">
          Explore comprehensive information about symptoms and diagnoses using React Suspense for efficient data
          fetching without useEffect.
        </p>

        <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl">
          <Link
            to="/symptoms"
            className="p-8 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-3 flex items-center gap-2">
              Symptoms <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </h2>
            <p className="text-foreground/70">Browse and explore all available medical symptoms in our database.</p>
          </Link>

          <Link
            to="/diagnoses"
            className="p-8 bg-card border border-border rounded-lg hover:border-primary transition-colors group"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-3 flex items-center gap-2">
              Diagnoses <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </h2>
            <p className="text-foreground/70">View detailed diagnoses with severity levels and descriptions.</p>
          </Link>
        </div>
      </div>
    </main>
  )
}
