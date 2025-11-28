import { wrapPromise } from "@/utils/promise-wrapper"
import { fetchSymptoms, fetchDiagnoses } from "@/lib/services/api"

export const useFetch = () => {
  const createResource = () => {
    return {
      symptoms: wrapPromise(fetchSymptoms()),
      diagnoses: wrapPromise(fetchDiagnoses()),
    }
  }
  return { createResource }
}
