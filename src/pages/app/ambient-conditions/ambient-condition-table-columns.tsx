import type { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import type { Measurement } from '@/api/types/Measurement'
import { Button } from '@/components/ui/button'

export const ambientConditionTableColumns: ColumnDef<Measurement>[] = [
  {
    accessorKey: 'id',
    header: 'Identifier',
  },
  {
    accessorKey: 'data.value',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Measurement
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  },
  {
    accessorKey: 'data.unit',
    header: 'Unit',
  },
  {
    accessorKey: 'measurementType',
    header: 'Type'
  },
  {
    accessorKey: 'sensorType',
    header: 'Sensor'
  },
  {
    accessorKey: 'timestamp',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Received at
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    }
  }
]
