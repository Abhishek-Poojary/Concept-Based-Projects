import { lazy, Suspense } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { useFetch } from "@/hooks/useFetch"
import LoaderSpinner from "@/components/loader-spinner"

const SymptomsList = lazy(() => import("@/components/symptoms-list"))

export default function Symptoms() {
  const { createResource } = useFetch()
  const resource = createResource()

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-card">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-foreground mb-8">Symptoms</h1>

        <Suspense fallback={<LoaderSpinner />}>
          <SymptomsList resource={resource.symptoms} />
        </Suspense>
      </div>
    </main>
  )
}
