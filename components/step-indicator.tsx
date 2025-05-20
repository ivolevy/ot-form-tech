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

  // Calcula el porcentaje de separación entre círculos
  const stepPercent = 100 / (totalSteps - 1)
  const rightPercent = stepPercent * (totalSteps - currentStep)
  // Ancho del círculo (w-10 = 2.5rem, la mitad es 1.25rem)
  const circleHalf = '1.25rem'
  // Padding visual para acortar la línea en ambos extremos
  const linePad = '0.75rem'

  // Calcula el right de la línea de progreso para que termine justo en el centro del último círculo, pero un poco más corta
  const progressRight = `calc(${rightPercent}% + ${circleHalf} + 0.5rem)`
  const bgRight = `calc(${circleHalf} + 0.5rem)`

  return (
    <div className="relative max-w-3xl mx-auto flex items-center" style={{ minHeight: 56 }}>
      {/* Línea de fondo */}
      <div className="absolute h-0.5 bg-gray-200" style={{ top: 'calc(50% - 10px)', left: linePad, right: bgRight, zIndex: 0 }}></div>
      {/* Línea de progreso */}
      <div
        className="absolute h-0.5 bg-red-600 transition-all duration-300"
        style={{
          left: linePad,
          right: progressRight,
          top: 'calc(50% - 10px)',
          zIndex: 1,
        }}
      ></div>
      {/* Los pasos */}
      <div className="relative flex justify-between w-full z-10">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            <div
              className={`relative flex h-10 w-10 items-center justify-center rounded-full border-2 transition-colors duration-200
                ${
                  step.number === currentStep
                    ? "border-red-600 bg-red-600 text-white"
                    : step.number < currentStep
                      ? "border-red-600 bg-red-600 text-white"
                      : "border-gray-300 bg-white text-gray-500"
                }
              `}
              style={{ zIndex: 2 }}
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
