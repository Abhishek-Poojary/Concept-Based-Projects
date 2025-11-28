import type { Diagnosis, Symptom } from "@/utils/types"

const BASE_URL = "https://api.example.com"

export const metadata = {
  title: "Symptoms",
  description: "View all available symptoms",
}


export const fetchSymptoms = async (): Promise<Symptom[]> => {
  const response = await fetch(`${BASE_URL}/symptoms`)
  if (!response.ok) {
    throw new Error("Failed to fetch symptoms")
  }
  return response.json()
}

export const fetchDiagnoses = async (): Promise<Diagnosis[]> => {
  const response = await fetch(`${BASE_URL}/diagnoses`)
  if (!response.ok) {
    throw new Error("Failed to fetch diagnoses")
  }
  return response.json()
}
