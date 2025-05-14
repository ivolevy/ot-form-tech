import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import type { SecurityLocation } from "@/lib/default-data"

interface SecurityPlanTableProps {
  locations: SecurityLocation[]
}

export function SecurityPlanTable({ locations }: SecurityPlanTableProps) {
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
          {locations.map((location, index) => (
            <TableRow key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <TableCell className="font-medium">{location.name}</TableCell>
              <TableCell className="text-center">
                <span className="rounded-full bg-gray-100 px-2 py-1 text-sm font-medium">{location.agents}</span>
              </TableCell>
              <TableCell className="w-[35%]" dangerouslySetInnerHTML={{ __html: location.distribution }} />
              <TableCell dangerouslySetInnerHTML={{ __html: location.functions }} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
