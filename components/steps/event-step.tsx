"use client"

import type { FormData } from "../multi-step-form"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface EventStepProps {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
}

export function EventStep({ formData, updateFormData }: EventStepProps) {
  const eventTypes = ["Partido de Fútbol", "Concierto", "Conferencia", "Festival", "Exposición", "Otro"]

  const venues = [
    "Estadio Santiago Bernabéu",
    "Estadio Metropolitano",
    "WiZink Center",
    "IFEMA",
    "Palacio de Vistalegre",
    "Otro",
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Información del Evento</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="eventType">Tipo de evento</Label>
          <Select value={formData.eventType} onValueChange={(value) => updateFormData({ eventType: value })}>
            <SelectTrigger id="eventType">
              <SelectValue placeholder="Selecciona el tipo de evento" />
            </SelectTrigger>
            <SelectContent>
              {eventTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="eventName">Nombre del evento</Label>
          <Input
            id="eventName"
            value={formData.eventName}
            onChange={(e) => updateFormData({ eventName: e.target.value })}
            placeholder="Ingresa el nombre del evento"
          />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="eventDate">Fecha del evento</Label>
          <Input
            id="eventDate"
            type="date"
            value={formData.eventDate}
            onChange={(e) => updateFormData({ eventDate: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="startTime">Hora de inicio</Label>
            <Input
              id="startTime"
              type="time"
              value={formData.startTime}
              onChange={(e) => updateFormData({ startTime: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="endTime">Hora de finalización</Label>
            <Input
              id="endTime"
              type="time"
              value={formData.endTime}
              onChange={(e) => updateFormData({ endTime: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="venue">Venue/estadio</Label>
          <Select value={formData.venue} onValueChange={(value) => updateFormData({ venue: value })}>
            <SelectTrigger id="venue">
              <SelectValue placeholder="Selecciona el venue o estadio" />
            </SelectTrigger>
            <SelectContent>
              {venues.map((venue) => (
                <SelectItem key={venue} value={venue}>
                  {venue}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">Dirección completa</Label>
          <Input
            id="address"
            value={formData.address}
            onChange={(e) => updateFormData({ address: e.target.value })}
            placeholder="Ingresa la dirección completa"
          />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
