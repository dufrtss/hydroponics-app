import { Pencil, Search, Trash } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

export function AmbientConditionsTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button variant='outline' size='sm'>
          <Search className='h-3 w-3' />
          <span className='sr-only'>Measurement details</span>
        </Button>
      </TableCell>
      <TableCell className='font-mono text-xs font-medium'>031093102s989fd8</TableCell>
      <TableCell className='font-mono font-medium'>32.23</TableCell>
      <TableCell className='font-mono font-medium'>°C</TableCell>
      <TableCell className='font-medium'>Temperature</TableCell>
      <TableCell className='font-medium'>DHT22</TableCell>
      <TableCell className='font-medium'>ha 15 minutos
      </TableCell>
      {/* <TableCell>
        <Button variant='ghost' size='sm'>
          <Pencil className='mr-2 h-3 w-3' />
            Edit
        </Button>
      </TableCell>
      <TableCell>
        <Button variant='ghost' size='sm'>
          <Trash className='mr-2 h-3 w-3' />
          Remove
        </Button>
      </TableCell> */}
    </TableRow>
  )
}
