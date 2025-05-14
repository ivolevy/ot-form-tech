"use client"

import type { FormData } from "../multi-step-form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Clock, Users, MapPin } from "lucide-react"

interface AdvancedStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}

export function AdvancedStep({ formData, updateFormData }: AdvancedStepProps) {
  const togglePreMatch = (enabled: boolean) => {
    updateFormData({
      preMatch: {
        ...formData.preMatch,
        enabled,
      },
    })
  }

  const updatePreMatch = (data: Partial<typeof formData.preMatch>) => {
    updateFormData({
      preMatch: {
        ...formData.preMatch,
        ...data,
      },
    })
  }

  const updateDistribution = (
    location: keyof typeof formData.preMatch.distribution,
    field: "time" | "count",
    value: string | number,
  ) => {
    updateFormData({
      preMatch: {
        ...formData.preMatch,
        distribution: {
          ...formData.preMatch.distribution,
          [location]: {
            ...formData.preMatch.distribution[location],
            [field]: value,
          },
        },
      },
    })
  }

  const togglePostMatch = (enabled: boolean) => {
    updateFormData({
      postMatch: {
        ...formData.postMatch,
        enabled,
      },
    })
  }

  const updatePostMatch = (data: Partial<typeof formData.postMatch>) => {
    updateFormData({
      postMatch: {
        ...formData.postMatch,
        ...data,
      },
    })
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="mb-6 border-l-4 border-red-600 pl-3 text-xl font-bold">
          Requerimientos de Personal de Avanzada
        </h2>
        <p className="mb-2 text-sm text-gray-500">¿Requiere personal de avanzada pre-partido?</p>

        <div className="mb-6 rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <label htmlFor="preMatchToggle" className="text-base font-medium">
              Opciones avanzadas pre-partido
            </label>
            <button
              type="button"
              role="switch"
              aria-checked={formData.preMatch.enabled}
              onClick={() => togglePreMatch(!formData.preMatch.enabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                formData.preMatch.enabled ? "bg-red-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  formData.preMatch.enabled ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {formData.preMatch.enabled && (
        <Card className="border-gray-200">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="preMatchOperatorsCount" className="flex items-center gap-2 text-base font-medium">
                  <Users size={18} className="text-red-600" />
                  Cantidad de operarios
                </Label>
                <Input
                  id="preMatchOperatorsCount"
                  type="number"
                  min="0"
                  value={formData.preMatch.operatorsCount || ""}
                  onChange={(e) =>
                    updatePreMatch({
                      operatorsCount: Number.parseInt(e.target.value) || 0,
                    })
                  }
                  className="border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="preMatchMeetingTime" className="flex items-center gap-2 text-base font-medium">
                  <Clock size={18} className="text-red-600" />
                  Horario de citación
                </Label>
                <Input
                  id="preMatchMeetingTime"
                  type="time"
                  value={formData.preMatch.meetingTime}
                  onChange={(e) => updatePreMatch({ meetingTime: e.target.value })}
                  className="border-gray-300"
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="preMatchOperationStartTime" className="flex items-center gap-2 text-base font-medium">
                  <Clock size={18} className="text-red-600" />
                  Hora de inicio de operativo
                </Label>
                <Input
                  id="preMatchOperationStartTime"
                  type="time"
                  value={formData.preMatch.operationStartTime}
                  onChange={(e) => updatePreMatch({ operationStartTime: e.target.value })}
                  className="border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="preMatchOperationEndTime" className="flex items-center gap-2 text-base font-medium">
                  <Clock size={18} className="text-red-600" />
                  Hora de finalización
                </Label>
                <Input
                  id="preMatchOperationEndTime"
                  type="time"
                  value={formData.preMatch.operationEndTime}
                  onChange={(e) => updatePreMatch({ operationEndTime: e.target.value })}
                  className="border-gray-300"
                />
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Label htmlFor="preMatchMeetingLocation" className="flex items-center gap-2 text-base font-medium">
                <MapPin size={18} className="text-red-600" />
                Dirección de citación
              </Label>
              <Input
                id="preMatchMeetingLocation"
                value={formData.preMatch.meetingLocation}
                onChange={(e) => updatePreMatch({ meetingLocation: e.target.value })}
                placeholder="Ingresa el lugar de citación"
                className="border-gray-300"
              />
            </div>

            <div className="mt-6 space-y-2">
              <Label className="text-base font-medium">Distribución por lugar</Label>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Lugar</TableHead>
                    <TableHead>Horario</TableHead>
                    <TableHead>Cantidad</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Campo Salles</TableCell>
                    <TableCell>
                      <Input
                        type="time"
                        value={formData.preMatch.distribution.salles.time}
                        onChange={(e) => updateDistribution("salles", "time", e.target.value)}
                        className="border-gray-300"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        min="0"
                        value={formData.preMatch.distribution.salles.count || ""}
                        onChange={(e) => updateDistribution("salles", "count", Number.parseInt(e.target.value) || 0)}
                        className="border-gray-300"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Parque de innovación</TableCell>
                    <TableCell>
                      <Input
                        type="time"
                        value={formData.preMatch.distribution.innovationPark.time}
                        onChange={(e) => updateDistribution("innovationPark", "time", e.target.value)}
                        className="border-gray-300"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        min="0"
                        value={formData.preMatch.distribution.innovationPark.count || ""}
                        onChange={(e) =>
                          updateDistribution("innovationPark", "count", Number.parseInt(e.target.value) || 0)
                        }
                        className="border-gray-300"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Refuerzo de servicio</TableCell>
                    <TableCell>
                      <Input
                        type="time"
                        value={formData.preMatch.distribution.serviceReinforcement.time}
                        onChange={(e) => updateDistribution("serviceReinforcement", "time", e.target.value)}
                        className="border-gray-300"
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        min="0"
                        value={formData.preMatch.distribution.serviceReinforcement.count || ""}
                        onChange={(e) =>
                          updateDistribution("serviceReinforcement", "count", Number.parseInt(e.target.value) || 0)
                        }
                        className="border-gray-300"
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="mt-10">
        <p className="mb-2 text-sm text-gray-500">¿Requiere personal de avanzada post-partido?</p>
        <div className="rounded-lg border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <label htmlFor="postMatchToggle" className="text-base font-medium">
              Opciones avanzadas post-partido
            </label>
            <button
              type="button"
              role="switch"
              aria-checked={formData.postMatch.enabled}
              onClick={() => togglePostMatch(!formData.postMatch.enabled)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                formData.postMatch.enabled ? "bg-red-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  formData.postMatch.enabled ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {formData.postMatch.enabled && (
        <Card className="border-gray-200">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <Label htmlFor="postMatchMeetingLocation" className="flex items-center gap-2 text-base font-medium">
                <MapPin size={18} className="text-red-600" />
                Lugar de citación (solo aplica a Refuerzo de Servicio)
              </Label>
              <div className="rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm">
                {formData.postMatch.meetingLocation || "Sector Refuerzo de Servicio"}
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Label htmlFor="postMatchTimes" className="flex items-center gap-2 text-base font-medium">
                <Clock size={18} className="text-red-600" />
                Horarios
              </Label>
              <Input
                id="postMatchTimes"
                value={formData.postMatch.times}
                onChange={(e) => updatePostMatch({ times: e.target.value })}
                placeholder="Ingresa los horarios"
                className="border-gray-300"
              />
            </div>

            <div className="mt-6 space-y-2">
              <Label htmlFor="postMatchOperatorsCount" className="flex items-center gap-2 text-base font-medium">
                <Users size={18} className="text-red-600" />
                Cantidad de operarios
              </Label>
              <Input
                id="postMatchOperatorsCount"
                type="number"
                min="0"
                value={formData.postMatch.operatorsCount || ""}
                onChange={(e) =>
                  updatePostMatch({
                    operatorsCount: Number.parseInt(e.target.value) || 0,
                  })
                }
                className="border-gray-300"
              />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
