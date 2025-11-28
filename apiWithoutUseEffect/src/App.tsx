import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoaderSpinner from "@/components/loader-spinner"
import {ErrorBoundary} from "@/components/error-boundary"

const Home = lazy(() => import("./views/home"))
const Symptoms = lazy(() => import("./views/symptoms"))
const Diagnoses = lazy(() => import("./views/diagnoses"))

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/symptoms"
            element={
              <Suspense fallback={<LoaderSpinner />}>
                <Symptoms />
              </Suspense>
            }
          />
          <Route
            path="/diagnoses"
            element={
              <Suspense fallback={<LoaderSpinner />}>
                <Diagnoses />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  )
}
