import type { Symptom } from "@/utils/types"

interface SymptomListProps {
  resource: {
    read: () => Symptom[]
  }
}

export default function SymptomsList({ resource }: SymptomListProps) {
  const symptoms = resource.read()

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {symptoms.map((symptom) => (
        <div
          key={symptom.id}
          className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors"
        >
          <h3 className="text-lg font-semibold text-foreground mb-2">{symptom.name}</h3>
          <p className="text-sm text-foreground/70 mb-3">{symptom.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-foreground/60">Severity:</span>
            <span
              className={`text-xs font-bold px-2 py-1 rounded ${
                symptom.severity === "High"
                  ? "bg-red-100 text-red-800"
                  : symptom.severity === "Medium"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
              }`}
            >
              {symptom.severity}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
