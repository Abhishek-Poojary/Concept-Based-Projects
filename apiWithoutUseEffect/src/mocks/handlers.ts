import { http, HttpResponse } from "msw"
import { mockDiagnoses, mockSymptoms } from "./data/mock-data"

const BASE_URL = "https://api.example.com"

export const handlers = [
  http.get(`${BASE_URL}/symptoms`, () => {
    return HttpResponse.json(mockSymptoms)
  }),

  http.get(`${BASE_URL}/diagnoses`, () => {
    return HttpResponse.json(mockDiagnoses)
  }),
]
