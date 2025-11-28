import React, { type ReactNode } from "react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-background">
          <div className="flex flex-col items-center gap-4 p-6 max-w-md">
            <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
              <span className="text-destructive text-xl">⚠</span>
            </div>
            <h2 className="text-xl font-semibold text-foreground">Error Loading Data</h2>
            <p className="text-foreground/70 text-center">
              {this.state.error?.message || "An error occurred while loading data"}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
            >
              Try Again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
