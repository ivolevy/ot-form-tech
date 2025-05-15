interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  const steps = [
    { number: 1, name: "Evento" },
    { number: 2, name: "Avanzada" },
    { number: 3, name: "Operativo" },
    { number: 4, name: "Confirmación" },
  ]

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-200"></div>
      <div
        className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-red-600 transition-all duration-300"
        style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
      ></div>
      <div className="relative flex justify-between">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            <div
              className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                step.number === currentStep
                  ? "border-red-600 bg-red-600 text-white"
                  : step.number < currentStep
                    ? "border-red-600 bg-red-600 text-white"
                    : "border-gray-300 bg-white text-gray-500"
              }`}
            >
              {step.number}
            </div>
            <div className={`mt-2 text-sm font-medium ${step.number <= currentStep ? "text-black" : "text-gray-400"}`}>
              {step.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
