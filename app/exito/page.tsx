import React from "react"

export default function ExitoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 shadow-md flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2l4 -4" />
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        <h2 className="text-2xl font-bold text-green-800 mb-2">Formulario enviado con éxito</h2>
        <p className="text-green-700 text-lg">La orden de trabajo fue creada correctamente.</p>
      </div>
    </div>
  )
} 