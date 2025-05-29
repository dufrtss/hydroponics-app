import { Pencil, Search, Trash, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { AmbientConditionsTableRow } from './ambient-conditions-table-row'

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
                  <AmbientConditionsTableRow key={i} />
                )
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
