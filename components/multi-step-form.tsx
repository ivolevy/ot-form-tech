"use client"

import { useState } from "react"
import { useRef } from "react"
import { EventStep } from "./steps/event-step"
import { AdvancedStep } from "./steps/advanced-step"
import { OperationalStep } from "./steps/operational-step"
import { ConfirmationStep } from "./steps/confirmation-step"
import { StepIndicator } from "./step-indicator"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { defaultSecurityPlan } from "@/lib/default-data"

// Define the form data structure
export interface FormData {
  // Event data
  eventType: string
  eventName: string
  eventDate: string
  startTime: string
  endTime: string
  venue: string
  address: string

  // Advanced data
  preMatch: {
    enabled: boolean
    operatorsCount: number
    meetingTime: string
    operationStartTime: string
    operationEndTime: string
    meetingLocation: string
    distribution: {
      salles: { time: string; count: number }
      innovationPark: { time: string; count: number }
      serviceReinforcement: { time: string; count: number }
    }
  }
  postMatch: {
    enabled: boolean
    meetingLocation: string
    times: string
    operatorsCount: number
  }

  // Operational data
  operationalMeetingTime: string
  operationalMeetingPoint: string

  // Security plan data
  securityPlan: typeof defaultSecurityPlan
}

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    // Event data
    eventType: "Partido Liga Argentina",
    eventName: "CLUB ATLÉTICO RIVER PLATE VS CLUB ATLÉTICO TALLERES",
    eventDate: "2025-05-20",
    startTime: "20:00",
    endTime: "22:00",
    venue: "Estadio Santiago Bernabéu",
    address: "Av. Figueroa Alcorta 7597, Buenos Aires",

    // Advanced data
    preMatch: {
      enabled: false,
      operatorsCount: 650,
      meetingTime: "15:00",
      operationStartTime: "16:00",
      operationEndTime: "23:00",
      meetingLocation: "Entrada Principal del Estadio",
      distribution: {
        salles: { time: "15:30", count: 15 },
        innovationPark: { time: "15:30", count: 10 },
        serviceReinforcement: { time: "15:30", count: 25 },
      },
    },
    postMatch: {
      enabled: false,
      meetingLocation: "Sector Refuerzo de Servicio",
      times: "22:00",
      operatorsCount: 50,
    },

    // Operational data
    operationalMeetingTime: "15:00",
    operationalMeetingPoint: "Entrada Principal del Estadio",

    // Security plan data
    securityPlan: defaultSecurityPlan,
  })

  const [acceptCheckedStep2, setAcceptCheckedStep2] = useState(false)
  const [acceptCheckedStep3, setAcceptCheckedStep3] = useState(false)
  const [acceptDisclaimer, setAcceptDisclaimer] = useState(false)

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const goToStep = (step: number) => {
    setCurrentStep(step)
  }

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1)
      window.scrollTo(0, 0)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    alert("Formulario enviado con éxito!")
  }

  return (
    <div className="w-[95%] mx-auto rounded-lg border bg-white p-6 shadow-md pb-4">
      <StepIndicator currentStep={currentStep} totalSteps={4} />

      <div className="mt-8">
        {currentStep === 1 && (
          <div className="mb-16">
            <EventStep formData={formData} updateFormData={updateFormData} />
          </div>
        )}
        {currentStep === 2 && <AdvancedStep formData={formData} updateFormData={updateFormData} />}
        {currentStep === 3 && <OperationalStep formData={formData} updateFormData={updateFormData} />}
        {currentStep === 4 && (
          <ConfirmationStep
            formData={formData}
            goToStep={goToStep}
            acceptDisclaimer={acceptDisclaimer}
            setAcceptDisclaimer={setAcceptDisclaimer}
          />
        )}
      </div>

      <div className="mt-8 flex justify-between">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center gap-2 border-gray-300"
        >
          <ChevronLeft size={16} /> Anterior
        </Button>

        {currentStep === 2 ? (
          <div className="flex items-center">
            <div className="flex items-center gap-2 mr-6">
              <input
                type="checkbox"
                id="accept-continue-step2"
                checked={acceptCheckedStep2}
                onChange={e => setAcceptCheckedStep2(e.target.checked)}
                className="accent-red-600 w-4 h-4"
              />
              <label htmlFor="accept-continue-step2" className="text-sm select-none cursor-pointer">
                Aceptar y continuar
              </label>
            </div>
            <Button
              onClick={nextStep}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700"
              disabled={!acceptCheckedStep2}
            >
              Siguiente <ChevronRight size={16} />
            </Button>
          </div>
        ) : currentStep === 3 ? (
          <div className="flex items-center">
            <div className="flex items-center gap-2 mr-6">
              <input
                type="checkbox"
                id="accept-continue-step3"
                checked={acceptCheckedStep3}
                onChange={e => setAcceptCheckedStep3(e.target.checked)}
                className="accent-red-600 w-4 h-4"
              />
              <label htmlFor="accept-continue-step3" className="text-sm select-none cursor-pointer">
                Aceptar y continuar
              </label>
            </div>
            <Button
              onClick={nextStep}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700"
              disabled={!acceptCheckedStep3}
            >
              Siguiente <ChevronRight size={16} />
            </Button>
          </div>
        ) : currentStep === 1 ? (
          <Button onClick={nextStep} className="flex items-center gap-2 bg-red-600 hover:bg-red-700">
            Siguiente <ChevronRight size={16} />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            className="bg-red-600 hover:bg-red-700"
            disabled={!acceptDisclaimer}
          >
            Enviar Formulario
          </Button>
        )}
      </div>
    </div>
  )
}
