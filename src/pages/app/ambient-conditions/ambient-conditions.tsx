import { Pencil, Search, Trash, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export function AmbientConditions() {
  return (
    <>
      <title>Hydroponics | Ambient conditions</title>

      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold tracking-tight'>Ambient conditions</h1>
      </div>

      <div className='flex flex-col gap-3'>
        <form className='flex items-center gap-2'>
          <span className='text-sm font-semibold'>Filters:</span>
          <Input placeholder='Measurement type' className='h-8 w-[320px]' />
        </form>

        <div className='border rounded-md'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[64px]'></TableHead>
                <TableHead className='w-[160px]'>Identifier</TableHead>
                <TableHead className='w-[140px]'>Measurement</TableHead>
                <TableHead className='w-[64px]'>Unit</TableHead>
                <TableHead className='w-[200px]'>Type</TableHead>
                <TableHead className='w-[200px]'>Sensor</TableHead>
                <TableHead className='w-[160px]'>Received at</TableHead>
                <TableHead className='w-[120px]'></TableHead>
                <TableHead className='w-[120px]'></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow key={i}>
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
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
