import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { SecurityLocation } from "@/lib/default-data"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"

interface SecurityPlanTableProps {
  locations: SecurityLocation[]
  onAgentsChange?: (index: number, value: number) => void
  errorState?: { [key: string]: boolean }
  errorMsg?: string
  sectionKey?: string
  sectionIdx?: number
}

export function SecurityPlanTable({ locations, onAgentsChange, errorState = {}, errorMsg = "", sectionKey = '', sectionIdx = 0 }: SecurityPlanTableProps) {
  const [localLocations, setLocalLocations] = useState(locations.map(loc => ({ ...loc, parsedDistribution: parseDistribution(loc.distribution) })))

  function parseDistribution(distribution: string) {
    // Convierte la string de distribución en un array de objetos { label, count }
    return distribution.split(/<br>|\n/).map((line: string) => {
      const match = line.match(/([•\-\*])?\s*(\d+)?\s*(.*)/)
      if (!match) return { label: line, count: 0 }
      const [, , count, label] = match
      return { label: label.trim(), count: count ? parseInt(count) : 0 }
    })
  }

  function handleDistChange(locIdx: number, dotIdx: number, value: number) {
    const newLocations = [...localLocations]
    const loc = newLocations[locIdx]
    const parsed = loc.parsedDistribution.map((dot: {label: string, count: number}, i: number) => i === dotIdx ? { ...dot, count: value } : dot)
    // Validar suma
    const total = parsed.reduce((sum: number, d: {count: number}) => sum + (d.count || 0), 0)
    if (total > loc.agents) return // No permitir superar el máximo
    loc.parsedDistribution = parsed
    loc.distribution = parsed.map((dot: {label: string, count: number}) => `• ${dot.count} ${dot.label}`).join('<br>')
    setLocalLocations(newLocations)
    if (onAgentsChange) onAgentsChange(locIdx, loc.agents)
  }

  function handleFunctionsChange(locIdx: number, value: string) {
    const newLocations = [...localLocations]
    newLocations[locIdx].functions = value
    setLocalLocations(newLocations)
    if (onAgentsChange) onAgentsChange(locIdx, newLocations[locIdx].agents)
  }

  function handleDistTextChange(locIdx: number, value: string) {
    const newLocations = [...localLocations]
    newLocations[locIdx].distribution = value.replace(/\n/g, '<br>')
    setLocalLocations(newLocations)
    if (onAgentsChange) onAgentsChange(locIdx, newLocations[locIdx].agents)
  }

  function handleFunctionsTextChange(locIdx: number, value: string) {
    const newLocations = [...localLocations]
    newLocations[locIdx].functions = value.replace(/\n/g, '<br>')
    setLocalLocations(newLocations)
    if (onAgentsChange) onAgentsChange(locIdx, newLocations[locIdx].agents)
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="font-semibold w-[10%]">Lugar</TableHead>
            <TableHead className="font-semibold text-center w-[10%]">Agentes</TableHead>
            <TableHead className="font-semibold w-[30%]">Distribución</TableHead>
            <TableHead className="font-semibold w-[50%]">Funciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {localLocations.map((location, locIdx) => {
            const errorKey = `${sectionKey}-${sectionIdx}-${locIdx}`
            const hasError = !!errorState[errorKey]
            return (
              <TableRow key={locIdx} className={locIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <TableCell className="w-[10%] align-top font-medium">{location.name}</TableCell>
                <TableCell className="w-[10%] text-center">
                  {onAgentsChange ? (
                    <div className="flex flex-col items-center">
                      <Input
                        type="number"
                        min={0}
                        value={location.agents}
                        onChange={e => onAgentsChange(locIdx, Number(e.target.value))}
                        className={`w-20 text-center border-gray-300 ${hasError ? 'border-red-500 ring-2 ring-red-200' : ''}`}
                      />
                      {hasError && (
                        <div className="text-xs mt-1 px-2 py-1 rounded bg-red-50 border border-red-200 text-red-600 font-medium shadow-sm animate-fade-in">
                          {errorMsg || "No puedes superar el total máximo de agentes"}
                        </div>
                      )}
                    </div>
                  ) : (
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-sm font-medium">{location.agents}</span>
                  )}
                </TableCell>
                <TableCell className="w-[30%] align-top">
                  <textarea
                    className="w-full border border-gray-300 rounded p-1 text-sm resize-vertical min-h-[80px]"
                    value={location.distribution.replace(/<br>/g, '\n')}
                    onChange={e => handleDistTextChange(locIdx, e.target.value)}
                    rows={location.distribution.split('<br>').length || 2}
                  />
                  {(() => {
                    // Sumar los números al inicio de cada línea
                    const lines = location.distribution.replace(/<br>/g, '\n').split(/\n/)
                    const total = lines.reduce((sum, line) => {
                      const match = line.match(/^(?:[•\-\*])?\s*(\d+)/)
                      return sum + (match ? parseInt(match[1]) : 0)
                    }, 0)
                    if (total !== location.agents) {
                      return <div className="text-xs text-red-600 mt-1 font-semibold">La suma debe ser igual a {location.agents} personas (actual: {total})</div>
                    }
                    return null
                  })()}
                </TableCell>
                <TableCell className="w-[50%] align-top">
                  <textarea
                    className="w-full border border-gray-300 rounded p-1 text-sm resize-vertical min-h-[80px]"
                    value={location.functions.replace(/<br>/g, '\n')}
                    onChange={e => handleFunctionsTextChange(locIdx, e.target.value)}
                    rows={location.functions.split('<br>').length || 2}
                  />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
