import type { Diagnosis } from "@/utils/types"

interface DiagnosesListProps {
  resource: {
    read: () => Diagnosis[]
  }
}

export default function DiagnosesList({ resource }: DiagnosesListProps) {
  const diagnoses = resource.read()

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {diagnoses.map((diagnosis) => (
        <div
          key={diagnosis.id}
          className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors"
        >
          <h3 className="text-lg font-semibold text-foreground mb-2">{diagnosis.name}</h3>
          <p className="text-sm text-foreground/70 mb-3">{diagnosis.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-foreground/60">Severity:</span>
            <span
              className={`text-xs font-bold px-2 py-1 rounded ${
                diagnosis.severity === "High"
                  ? "bg-red-100 text-red-800"
                  : diagnosis.severity === "Medium"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
              }`}
            >
              {diagnosis.severity}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
