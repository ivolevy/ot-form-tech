"use client"

import type { FormData } from "../multi-step-form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { SecurityPlanTable } from "./security-plan-table"
import { Clock, MapPin, Shield, ChevronDown, Info } from "lucide-react"
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

      {/* Accordion for Perímetro Exterior */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <details className="group">
          <summary className="flex cursor-pointer items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4 hover:bg-blue-50">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-blue-500"></div>
              <div>
                <h3 className="text-lg font-medium">Perímetro Exterior</h3>
                <p className="text-sm text-gray-500">Distribución de agentes en el perímetro exterior</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                {exteriorAgents} agentes
              </div>
              <div className="flex items-center gap-1 rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                <ChevronDown
                  className="h-4 w-4 text-blue-700 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
                <span className="group-open:hidden">Ver detalle</span>
                <span className="hidden group-open:inline">Ocultar</span>
              </div>
            </div>
          </summary>
          <div className="p-6">
            {formData.securityPlan.sections.exteriorPerimeter.subsections.map((section, index) => {
              const [open, setOpen] = useState(false)
              return (
                <div key={index} className="group mb-4 rounded-lg border border-gray-200">
                  <div
                    className="flex cursor-pointer items-center justify-between bg-gray-50 px-4 py-3 hover:bg-blue-50"
                    onClick={() => setOpen((prev) => !prev)}
                  >
                    <div className="font-medium">{section.title}</div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium">
                        {section.locations.reduce((sum, loc) => sum + loc.agents, 0)} agentes
                      </div>
                      <div className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                        <ChevronDown
                          className={`h-3 w-3 text-gray-700 transition-transform ${open ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                        <span>{open ? "Ocultar" : "ver detalle"}</span>
                      </div>
                    </div>
                  </div>
                  {open && (
                    <div className="p-4">
                      <SecurityPlanTable locations={section.locations} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </details>
      </div>

      {/* Accordion for Tribunas */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <details className="group">
          <summary className="flex cursor-pointer items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4 hover:bg-green-50">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-green-500"></div>
              <div>
                <h3 className="text-lg font-medium">Tribunas del Estadio</h3>
                <p className="text-sm text-gray-500">Distribución de agentes en las tribunas</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700">
                {tribunasAgents} agentes
              </div>
              <div className="flex items-center gap-1 rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                <ChevronDown
                  className="h-4 w-4 text-green-700 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
                <span className="group-open:hidden">Ver detalle</span>
                <span className="hidden group-open:inline">Ocultar</span>
              </div>
            </div>
          </summary>
          <div className="p-6">
            {formData.securityPlan.sections.stadiumStands.subsections.map((section, index) => {
              const [open, setOpen] = useState(false)
              return (
                <div key={index} className="group mb-4 rounded-lg border border-gray-200">
                  <div
                    className="flex cursor-pointer items-center justify-between bg-gray-50 px-4 py-3 hover:bg-green-50"
                    onClick={() => setOpen((prev) => !prev)}
                  >
                    <div className="font-medium">{section.title}</div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium">
                        {section.locations.reduce((sum, loc) => sum + loc.agents, 0)} agentes
                      </div>
                      <div className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                        <ChevronDown
                          className={`h-3 w-3 text-gray-700 transition-transform ${open ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                        <span>{open ? "Ocultar" : "ver detalle"}</span>
                      </div>
                    </div>
                  </div>
                  {open && (
                    <div className="p-4">
                      <SecurityPlanTable locations={section.locations} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </details>
      </div>

      {/* Accordion for Perímetro Interno */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <details className="group">
          <summary className="flex cursor-pointer items-center justify-between border-b border-gray-200 bg-gray-50 px-6 py-4 hover:bg-amber-50">
            <div className="flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-amber-500"></div>
              <div>
                <h3 className="text-lg font-medium">Perímetro Interno</h3>
                <p className="text-sm text-gray-500">Distribución de agentes en el perímetro interno</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
                {internoAgents} agentes
              </div>
              <div className="flex items-center gap-1 rounded-md bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">
                <ChevronDown
                  className="h-4 w-4 text-amber-700 transition-transform group-open:rotate-180"
                  aria-hidden="true"
                />
                <span className="group-open:hidden">Ver detalle</span>
                <span className="hidden group-open:inline">Ocultar</span>
              </div>
            </div>
          </summary>
          <div className="p-6">
            {formData.securityPlan.sections.internalPerimeter.subsections.map((section, index) => {
              const [open, setOpen] = useState(false)
              return (
                <div key={index} className="group mb-4 rounded-lg border border-gray-200">
                  <div
                    className="flex cursor-pointer items-center justify-between bg-gray-50 px-4 py-3 hover:bg-amber-50"
                    onClick={() => setOpen((prev) => !prev)}
                  >
                    <div className="font-medium">{section.title}</div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium">
                        {section.locations.reduce((sum, loc) => sum + loc.agents, 0)} agentes
                      </div>
                      <div className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
                        <ChevronDown
                          className={`h-3 w-3 text-gray-700 transition-transform ${open ? "rotate-180" : ""}`}
                          aria-hidden="true"
                        />
                        <span>{open ? "Ocultar" : "ver detalle"}</span>
                      </div>
                    </div>
                  </div>
                  {open && (
                    <div className="p-4">
                      <SecurityPlanTable locations={section.locations} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </details>
      </div>
    </div>
  )
}
