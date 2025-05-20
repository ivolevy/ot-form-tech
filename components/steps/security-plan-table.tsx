import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { SecurityLocation } from "@/lib/default-data"
import { Input } from "@/components/ui/input"

interface SecurityPlanTableProps {
  locations: SecurityLocation[]
  onAgentsChange?: (index: number, value: number) => void
  errorState?: { [key: string]: boolean }
  errorMsg?: string
  sectionKey?: string
  sectionIdx?: number
}

export function SecurityPlanTable({ locations, onAgentsChange, errorState = {}, errorMsg = "", sectionKey = '', sectionIdx = 0 }: SecurityPlanTableProps) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="font-semibold">Lugar</TableHead>
            <TableHead className="font-semibold text-center">Agentes</TableHead>
            <TableHead className="font-semibold w-[35%]">Distribución</TableHead>
            <TableHead className="font-semibold">Funciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {locations.map((location, index) => {
            const errorKey = `${sectionKey}-${sectionIdx}-${index}`
            const hasError = !!errorState[errorKey]
            return (
              <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <TableCell className="font-medium">{location.name}</TableCell>
                <TableCell className="text-center">
                  {onAgentsChange ? (
                    <div className="flex flex-col items-center">
                      <Input
                        type="number"
                        min={0}
                        value={location.agents}
                        onChange={e => onAgentsChange(index, Number(e.target.value))}
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
                <TableCell className="w-[35%]" dangerouslySetInnerHTML={{ __html: location.distribution }} />
                <TableCell dangerouslySetInnerHTML={{ __html: location.functions }} />
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
