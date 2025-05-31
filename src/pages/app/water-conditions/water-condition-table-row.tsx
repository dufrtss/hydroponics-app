import { Pencil, Search, Trash } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { WaterConditionDetais } from './water-condition-details'

export function WaterConditionTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant='outline' size='sm'>
              <Search className='h-3 w-3' />
              <span className='sr-only'>Measurement details</span>
            </Button>
          </DialogTrigger>

          <WaterConditionDetais />
        </Dialog>
      </TableCell>
      <TableCell className='font-mono text-xs font-medium'>031093102s989fd8</TableCell>
      <TableCell className='font-mono font-medium'>32.23</TableCell>
      <TableCell className='font-mono font-medium'>°C</TableCell>
      <TableCell className='font-medium'>Temperature</TableCell>
      <TableCell className='font-medium'>DHT22</TableCell>
      <TableCell className='font-medium'>15 minutes ago</TableCell>
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
