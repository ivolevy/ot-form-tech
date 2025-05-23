"use client"

import type { FormData } from "../multi-step-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Pencil } from "lucide-react"
import { Alert } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SecurityPlanTable } from "./security-plan-table"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface ConfirmationStepProps {
  formData: FormData
  goToStep: (step: number) => void
  acceptDisclaimer: boolean
  setAcceptDisclaimer: (checked: boolean) => void
}

export function ConfirmationStep({ formData, goToStep, acceptDisclaimer, setAcceptDisclaimer }: ConfirmationStepProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Evento</CardTitle>
          <Button variant="outline" size="sm" onClick={() => goToStep(1)} className="flex items-center gap-1">
            <Pencil size={14} /> Editar
          </Button>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">Tipo de evento</dt>
              <dd className="mt-1">{formData.eventType || "No especificado"}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Nombre del evento</dt>
              <dd className="mt-1">{formData.eventName || "No especificado"}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Fecha del evento</dt>
              <dd className="mt-1">{formatDate(formData.eventDate) || "No especificado"}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Horario del evento</dt>
              <dd className="mt-1">
                {formData.startTime && formData.endTime
                  ? `${formData.startTime} - ${formData.endTime}`
                  : "No especificado"}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Venue/estadio</dt>
              <dd className="mt-1">{formData.venue || "No especificado"}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Dirección completa</dt>
              <dd className="mt-1">{formData.address || "No especificado"}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Avanzada</CardTitle>
          <Button variant="outline" size="sm" onClick={() => goToStep(2)} className="flex items-center gap-1">
            <Pencil size={14} /> Editar
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-medium">Pre-partido</h3>
              {formData.preMatch.enabled ? (
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Cantidad de operarios</dt>
                    <dd className="mt-1">{formData.preMatch.operatorsCount}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Horario de citación</dt>
                    <dd className="mt-1">{formData.preMatch.meetingTime || "No especificado"}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Horario de operativo</dt>
                    <dd className="mt-1">
                      {formData.preMatch.operationStartTime && formData.preMatch.operationEndTime
                        ? `${formData.preMatch.operationStartTime} - ${formData.preMatch.operationEndTime}`
                        : "No especificado"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Lugar de citación</dt>
                    <dd className="mt-1">{formData.preMatch.meetingLocation || "No especificado"}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="mb-2 text-sm font-medium text-gray-500">Distribución por lugar</dt>
                    <dd>
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                              Lugar
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                              Horario
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                              Cantidad
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="whitespace-nowrap px-4 py-2">Campo Salles</td>
                            <td className="whitespace-nowrap px-4 py-2">
                              {formData.preMatch.distribution.salles.time || "No especificado"}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2">
                              {formData.preMatch.distribution.salles.count}
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap px-4 py-2">Parque de innovación</td>
                            <td className="whitespace-nowrap px-4 py-2">
                              {formData.preMatch.distribution.innovationPark.time || "No especificado"}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2">
                              {formData.preMatch.distribution.innovationPark.count}
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap px-4 py-2">Refuerzo de servicio</td>
                            <td className="whitespace-nowrap px-4 py-2">
                              {formData.preMatch.distribution.serviceReinforcement.time || "No especificado"}
                            </td>
                            <td className="whitespace-nowrap px-4 py-2">
                              {formData.preMatch.distribution.serviceReinforcement.count}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </dd>
                  </div>
                </dl>
              ) : (
                <p className="text-gray-500">No configurado</p>
              )}
            </div>

            <div>
              <h3 className="mb-2 text-lg font-medium">Post-partido</h3>
              {formData.postMatch.enabled ? (
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Lugar de citación</dt>
                    <dd className="mt-1">{formData.postMatch.meetingLocation || "No especificado"}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Horarios</dt>
                    <dd className="mt-1">{formData.postMatch.times || "No especificado"}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Cantidad de operarios</dt>
                    <dd className="mt-1">{formData.postMatch.operatorsCount}</dd>
                  </div>
                </dl>
              ) : (
                <p className="text-gray-500">No configurado</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Operativo</CardTitle>
          <Button variant="outline" size="sm" onClick={() => goToStep(3)} className="flex items-center gap-1">
            <Pencil size={14} /> Editar
          </Button>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">Horario de citación</dt>
              <dd className="mt-1">{formData.operationalMeetingTime || "No especificado"}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Punto de encuentro</dt>
              <dd className="mt-1">{formData.operationalMeetingPoint || "No especificado"}</dd>
            </div>
          </dl>

          <div className="mt-6">
            <h3 className="mb-3 text-lg font-medium">Plan Operativo de Seguridad</h3>
            <Tabs defaultValue="exterior" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="exterior">Perímetro Exterior</TabsTrigger>
                <TabsTrigger value="tribunas">Tribunas</TabsTrigger>
                <TabsTrigger value="interno">Perímetro Interno</TabsTrigger>
              </TabsList>

              <TabsContent value="exterior" className="mt-4">
                <div className="text-sm text-gray-500 mb-2">
                  Total agentes perímetro exterior: {formData.securityPlan.sections.exteriorPerimeter.totalAgents}
                </div>
                <div className="space-y-2 mt-2">
                  {formData.securityPlan.sections.exteriorPerimeter.subsections.map((section, idx) => (
                    <div key={idx} className="bg-gray-50 rounded px-3 py-2 flex items-center justify-between border border-gray-100">
                      <span className="font-medium text-gray-800">{section.title}</span>
                      <span className="text-red-700">{section.locations.reduce((sum, loc) => sum + Number(loc.agents), 0)} agentes</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="tribunas" className="mt-4">
                <div className="text-sm text-gray-500 mb-2">
                  Total agentes tribunas: {formData.securityPlan.sections.stadiumStands.totalAgents}
                </div>
                <div className="space-y-2 mt-2">
                  {formData.securityPlan.sections.stadiumStands.subsections.map((section, idx) => (
                    <div key={idx} className="bg-gray-50 rounded px-3 py-2 flex items-center justify-between border border-gray-100">
                      <span className="font-medium text-gray-800">{section.title}</span>
                      <span className="text-red-700">{section.locations.reduce((sum, loc) => sum + Number(loc.agents), 0)} agentes</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="interno" className="mt-4">
                <div className="text-sm text-gray-500 mb-2">
                  Total agentes perímetro interno: {formData.securityPlan.sections.internalPerimeter.totalAgents}
                </div>
                <div className="space-y-2 mt-2">
                  {formData.securityPlan.sections.internalPerimeter.subsections.map((section, idx) => (
                    <div key={idx} className="bg-gray-50 rounded px-3 py-2 flex items-center justify-between border border-gray-100">
                      <span className="font-medium text-gray-800">{section.title}</span>
                      <span className="text-red-700">{section.locations.reduce((sum, loc) => sum + Number(loc.agents), 0)} agentes</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-4 text-center font-medium">
              TOTAL GENERAL: {formData.securityPlan.sections.totalAgents} AGENTES
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
