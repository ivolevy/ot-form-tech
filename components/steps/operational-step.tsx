"use client"

import type { FormData } from "../multi-step-form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { SecurityPlanTable } from "./security-plan-table"
import { Clock, MapPin, Shield, ChevronDown } from "lucide-react"
import React, { useState } from "react"

interface OperationalStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}

export function OperationalStep({ formData, updateFormData }: OperationalStepProps) {
  // Calculate total agents for each section
  const exteriorAgents = formData.securityPlan.sections.exteriorPerimeter.totalAgents
  const tribunasAgents = formData.securityPlan.sections.stadiumStands.totalAgents
  const internoAgents = formData.securityPlan.sections.internalPerimeter.totalAgents
  const totalAgents = formData.securityPlan.sections.totalAgents

  // El límite debe ser el valor original del plan, no el actual (que puede variar si el usuario edita)
  const [initialMaxAgents] = useState(() => {
    // Buscar el total original sumando todos los agentes de todas las ubicaciones
    const plan = formData.securityPlan.sections
    const sumAll = (subsections: any[]) =>
      subsections.reduce((sum, sub) => sum + sub.locations.reduce((s, loc) => s + Number(loc.agents), 0), 0)
    return (
      sumAll(plan.stadiumStands.subsections) +
      sumAll(plan.exteriorPerimeter.subsections) +
      sumAll(plan.internalPerimeter.subsections)
    )
  })

  const [errorState, setErrorState] = useState<{ [key: string]: boolean }>({})
  const [errorMsg, setErrorMsg] = useState<string>("")

  // Calcula el total actual de agentes, reemplazando el valor editado por el nuevo valor propuesto
  function getNewTotal(section: string, sectionIdx: number, locationIdx: number, newValue: number) {
    const plan = formData.securityPlan.sections
    // Helper para sumar todos los agentes de todas las ubicaciones
    const sumAllWithChange = () => {
      let total = 0
      // Tribunas
      plan.stadiumStands.subsections.forEach((sub: any, i: number) => {
        sub.locations.forEach((loc: any, j: number) => {
          if (section === 'stadiumStands' && i === sectionIdx && j === locationIdx) {
            total += newValue
          } else {
            total += Number(loc.agents)
          }
        })
      })
      // Exterior
      plan.exteriorPerimeter.subsections.forEach((sub: any, i: number) => {
        sub.locations.forEach((loc: any, j: number) => {
          if (section === 'exteriorPerimeter' && i === sectionIdx && j === locationIdx) {
            total += newValue
          } else {
            total += Number(loc.agents)
          }
        })
      })
      // Interno
      plan.internalPerimeter.subsections.forEach((sub: any, i: number) => {
        sub.locations.forEach((loc: any, j: number) => {
          if (section === 'internalPerimeter' && i === sectionIdx && j === locationIdx) {
            total += newValue
          } else {
            total += Number(loc.agents)
          }
        })
      })
      return total
    }
    // También recalcula el subtotal de la sección editada
    const sumSection = (subsections: any[], sIdx: number, lIdx: number, val: number) =>
      subsections.reduce((sum: number, sub: any, i: number) =>
        sum + sub.locations.reduce((s: number, loc: any, j: number) =>
          s + (i === sIdx && j === lIdx ? val : Number(loc.agents)), 0), 0)
    const trib = section === 'stadiumStands'
      ? sumSection(plan.stadiumStands.subsections, sectionIdx, locationIdx, newValue)
      : plan.stadiumStands.totalAgents
    const ext = section === 'exteriorPerimeter'
      ? sumSection(plan.exteriorPerimeter.subsections, sectionIdx, locationIdx, newValue)
      : plan.exteriorPerimeter.totalAgents
    const int = section === 'internalPerimeter'
      ? sumSection(plan.internalPerimeter.subsections, sectionIdx, locationIdx, newValue)
      : plan.internalPerimeter.totalAgents
    const total = sumAllWithChange()
    return { trib, ext, int, total }
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-6 border-l-4 border-red-600 pl-3 text-xl font-bold">Información Operativa</h2>
      </div>

      <Card className="border-gray-200">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="operationalMeetingTime" className="flex items-center gap-2 text-base font-medium">
                <Clock size={18} className="text-red-600" />
                Horario de citación
              </Label>
              <Input
                id="operationalMeetingTime"
                type="time"
                value={formData.operationalMeetingTime}
                onChange={(e) => updateFormData({ operationalMeetingTime: e.target.value })}
                className="border-gray-300"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="operationalMeetingPoint" className="flex items-center gap-2 text-base font-medium">
                <MapPin size={18} className="text-red-600" />
                Punto de encuentro
              </Label>
              <Input
                id="operationalMeetingPoint"
                value={formData.operationalMeetingPoint}
                onChange={(e) => updateFormData({ operationalMeetingPoint: e.target.value })}
                placeholder="Ingresa el punto de encuentro"
                className="border-gray-300"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <h2 className="border-l-4 border-red-600 pl-3 text-xl font-bold">Plan Operativo de Seguridad</h2>
      </div>

      {/* Dashboard Summary */}
      <div className="mb-6 flex items-center justify-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <Shield size={24} className="text-red-600" />
          <span className="text-xl font-bold">TOTAL: {totalAgents} AGENTES</span>
        </div>
      </div>

      {/* Accordion for Tribunas */}
      <details className="group rounded-lg border border-gray-200 bg-white shadow-sm">
        <summary className="flex cursor-pointer items-center border-b border-gray-200 bg-gray-50 px-6 py-4 hover:bg-red-50">
          <div className="flex items-center justify-start w-full">
            <div className="h-8 w-1 rounded-full bg-red-500 mr-2"></div>
            <div className="w-full text-left">
              <h3 className="text-lg font-medium">Tribunas del Estadio</h3>
              <p className="text-sm text-gray-500">Distribución de agentes en las tribunas</p>
            </div>
              </div>
          <div className="flex items-center gap-3 ml-auto">
            <div className="rounded-full bg-red-50 px-4 py-1 text-sm font-medium text-red-700 min-w-[90px] flex justify-center whitespace-nowrap">
              {tribunasAgents} agentes
            </div>
            <div className="flex items-center gap-1 rounded-md bg-gray-200 px-3 py-1 text-sm font-medium text-red-700 min-w-[80px] justify-center whitespace-nowrap">
              <span>ver detalle</span>
              </div>
            </div>
          </summary>
          <div className="p-6">
          {formData.securityPlan.sections.stadiumStands.subsections.map((section, sectionIdx) => {
              const [open, setOpen] = useState(false)
              const handleAgentsChange = (locationIdx: number, value: number) => {
                const { total, trib } = getNewTotal('stadiumStands', sectionIdx, locationIdx, value)
                const errorKey = `trib-${sectionIdx}-${locationIdx}`
                if (total > initialMaxAgents) {
                  setErrorState({ [errorKey]: true })
                  setErrorMsg(`No puedes superar el total máximo de agentes (${initialMaxAgents})`)
                  return
                } else {
                  setErrorState({})
                  setErrorMsg("")
                }
                const updatedPlan = JSON.parse(JSON.stringify(formData.securityPlan))
                updatedPlan.sections.stadiumStands.subsections[sectionIdx].locations[locationIdx].agents = value
                updatedPlan.sections.stadiumStands.totalAgents = trib
                updatedPlan.sections.totalAgents = trib + updatedPlan.sections.exteriorPerimeter.totalAgents + updatedPlan.sections.internalPerimeter.totalAgents
                updateFormData({ securityPlan: updatedPlan })
              }
              return (
                <div key={sectionIdx} className="group mb-4 rounded-lg border border-gray-200">
                  <div
                  className="flex cursor-pointer items-center justify-between bg-gray-50 px-4 py-3 hover:bg-red-50"
                    onClick={() => setOpen((prev) => !prev)}
                  >
                  <div className="font-medium flex items-center gap-2">
                    <span>{section.title}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium">
                      {section.locations.reduce((sum, loc) => sum + loc.agents, 0)} agentes
                    </div>
                    <div className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-red-700">
                        <span>{open ? "Ocultar" : "ver detalle"}</span>
                      </div>
                    </div>
                  </div>
                  {open && (
                <div className="p-4">
                  <SecurityPlanTable
                    locations={section.locations}
                    onAgentsChange={(locationIdx, value) => handleAgentsChange(locationIdx, value)}
                    errorState={errorState}
                    errorMsg={errorMsg}
                    sectionKey="trib"
                    sectionIdx={sectionIdx}
                  />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </details>

      {/* Accordion for Perímetro Exterior */}
      <details className="group rounded-lg border border-gray-200 bg-white shadow-sm">
        <summary className="flex cursor-pointer items-center border-b border-gray-200 bg-gray-50 px-6 py-4 hover:bg-red-50">
          <div className="flex items-center justify-start w-full">
            <div className="h-8 w-1 rounded-full bg-red-500 mr-2"></div>
            <div className="w-full text-left">
              <h3 className="text-lg font-medium">Perímetro Exterior</h3>
              <p className="text-sm text-gray-500">Distribución de agentes en el perímetro exterior</p>
      </div>
              </div>
          <div className="flex items-center gap-3 ml-auto">
            <div className="rounded-full bg-red-50 px-4 py-1 text-sm font-medium text-red-700 min-w-[90px] flex justify-center whitespace-nowrap">
              {exteriorAgents} agentes
            </div>
            <div className="flex items-center gap-1 rounded-md bg-gray-200 px-3 py-1 text-sm font-medium text-red-700 min-w-[80px] justify-center whitespace-nowrap">
              <span>ver detalle</span>
              </div>
            </div>
          </summary>
          <div className="p-6">
          {formData.securityPlan.sections.exteriorPerimeter.subsections.map((section, sectionIdx) => {
              const [open, setOpen] = useState(false)
              const handleAgentsChange = (locationIdx: number, value: number) => {
                const { total, ext } = getNewTotal('exteriorPerimeter', sectionIdx, locationIdx, value)
                const errorKey = `ext-${sectionIdx}-${locationIdx}`
                if (total > initialMaxAgents) {
                  setErrorState({ [errorKey]: true })
                  setErrorMsg(`No puedes superar el total máximo de agentes (${initialMaxAgents})`)
                  return
                } else {
                  setErrorState({})
                  setErrorMsg("")
                }
                const updatedPlan = JSON.parse(JSON.stringify(formData.securityPlan))
                updatedPlan.sections.exteriorPerimeter.subsections[sectionIdx].locations[locationIdx].agents = value
                updatedPlan.sections.exteriorPerimeter.totalAgents = ext
                updatedPlan.sections.totalAgents = updatedPlan.sections.stadiumStands.totalAgents + ext + updatedPlan.sections.internalPerimeter.totalAgents
                updateFormData({ securityPlan: updatedPlan })
              }
              return (
                <div key={sectionIdx} className="group mb-4 rounded-lg border border-gray-200">
                  <div
                  className="flex cursor-pointer items-center justify-between bg-gray-50 px-4 py-3 hover:bg-red-50"
                    onClick={() => setOpen((prev) => !prev)}
                  >
                  <div className="font-medium flex items-center gap-2">
                    <span>{section.title}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium">
                      {section.locations.reduce((sum, loc) => sum + loc.agents, 0)} agentes
                    </div>
                    <div className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-red-700">
                        <span>{open ? "Ocultar" : "ver detalle"}</span>
                      </div>
                    </div>
                  </div>
                  {open && (
                <div className="p-4">
                  <SecurityPlanTable
                    locations={section.locations}
                    onAgentsChange={(locationIdx, value) => handleAgentsChange(locationIdx, value)}
                    errorState={errorState}
                    errorMsg={errorMsg}
                    sectionKey="ext"
                    sectionIdx={sectionIdx}
                  />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </details>

      {/* Accordion for Perímetro Interno */}
      <details className="group rounded-lg border border-gray-200 bg-white shadow-sm">
        <summary className="flex cursor-pointer items-center border-b border-gray-200 bg-gray-50 px-6 py-4 hover:bg-red-50">
          <div className="flex items-center justify-start w-full">
            <div className="h-8 w-1 rounded-full bg-red-500 mr-2"></div>
            <div className="w-full text-left">
                <h3 className="text-lg font-medium">Perímetro Interno</h3>
                <p className="text-sm text-gray-500">Distribución de agentes en el perímetro interno</p>
              </div>
            </div>
          <div className="flex items-center gap-3 ml-auto">
            <div className="rounded-full bg-red-50 px-4 py-1 text-sm font-medium text-red-700 min-w-[90px] flex justify-center whitespace-nowrap">
                {internoAgents} agentes
              </div>
            <div className="flex items-center gap-1 rounded-md bg-gray-200 px-3 py-1 text-sm font-medium text-red-700 min-w-[80px] justify-center whitespace-nowrap">
              <span>ver detalle</span>
              </div>
            </div>
          </summary>
          <div className="p-6">
            {formData.securityPlan.sections.internalPerimeter.subsections.map((section, sectionIdx) => {
              const [open, setOpen] = useState(false)
              const handleAgentsChange = (locationIdx: number, value: number) => {
                const { total, int } = getNewTotal('internalPerimeter', sectionIdx, locationIdx, value)
                const errorKey = `int-${sectionIdx}-${locationIdx}`
                if (total > initialMaxAgents) {
                  setErrorState({ [errorKey]: true })
                  setErrorMsg(`No puedes superar el total máximo de agentes (${initialMaxAgents})`)
                  return
                } else {
                  setErrorState({})
                  setErrorMsg("")
                }
                const updatedPlan = JSON.parse(JSON.stringify(formData.securityPlan))
                updatedPlan.sections.internalPerimeter.subsections[sectionIdx].locations[locationIdx].agents = value
                updatedPlan.sections.internalPerimeter.totalAgents = int
                updatedPlan.sections.totalAgents = updatedPlan.sections.stadiumStands.totalAgents + updatedPlan.sections.exteriorPerimeter.totalAgents + int
                updateFormData({ securityPlan: updatedPlan })
              }
              return (
                <div key={sectionIdx} className="group mb-4 rounded-lg border border-gray-200">
                  <div
                  className="flex cursor-pointer items-center justify-between bg-gray-50 px-4 py-3 hover:bg-red-50"
                    onClick={() => setOpen((prev) => !prev)}
                  >
                  <div className="font-medium flex items-center gap-2">
                    <span>{section.title}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium">
                      {section.locations.reduce((sum, loc) => sum + loc.agents, 0)} agentes
                    </div>
                    <div className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-red-700">
                        <span>{open ? "Ocultar" : "ver detalle"}</span>
                      </div>
                    </div>
                  </div>
                  {open && (
                <div className="p-4">
                  <SecurityPlanTable
                    locations={section.locations}
                    onAgentsChange={(locationIdx, value) => handleAgentsChange(locationIdx, value)}
                    errorState={errorState}
                    errorMsg={errorMsg}
                    sectionKey="int"
                    sectionIdx={sectionIdx}
                  />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </details>
    </div>
  )
}
