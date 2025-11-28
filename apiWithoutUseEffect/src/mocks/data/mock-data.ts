import type { Diagnosis, Symptom } from "@/utils/types"


export const mockSymptoms: Symptom[] = [
  {
    id: "1",
    name: "Headache",
    description: "Persistent throbbing pain in the head",
    severity: ""
  },
  {
    id: "2",
    name: "Fever",
    description: "Elevated body temperature above 38°C",
    severity: ""
  },
  {
    id: "3",
    name: "Cough",
    description: "Dry or productive cough lasting more than a week",
    severity: ""
  },
  {
    id: "4",
    name: "Sore Throat",
    description: "Pain or irritation in the throat when swallowing",
    severity: ""
  },
  {
    id: "5",
    name: "Fatigue",
    description: "Extreme tiredness and weakness",
    severity: ""
  },
]

export const mockDiagnoses: Diagnosis[] = [
  {
    id: "d1",
    name: "Common Cold",
    description: "Viral infection causing mild respiratory symptoms",
    severity: "mild",
  },
  {
    id: "d2",
    name: "Influenza",
    description: "Viral infection causing severe respiratory and systemic symptoms",
    severity: "moderate",
  },
  {
    id: "d3",
    name: "Bronchitis",
    description: "Inflammation of the bronchial tubes in the lungs",
    severity: "moderate",
  },
  {
    id: "d4",
    name: "Pneumonia",
    description: "Serious infection causing inflammation of air sacs in lungs",
    severity: "severe",
  },
  {
    id: "d5",
    name: "Strep Throat",
    description: "Bacterial infection of the throat requiring antibiotics",
    severity: "moderate",
  },
]
