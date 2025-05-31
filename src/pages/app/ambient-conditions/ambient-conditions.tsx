import { Pagination } from '@/components/pagination'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { AmbientConditionsTableFilter } from './ambient-conditions-table-filter'
import { AmbientConditionsTableRow } from './ambient-conditions-table-row'

export function AmbientConditions() {
  return (
    <>
      <title>Hydroponics | Ambient conditions</title>

      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl font-bold tracking-tight'>Ambient conditions</h1>
      

        <div className='flex flex-col gap-3'>
          <AmbientConditionsTableFilter />

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

          <Pagination page={1} totalCount={105} pageSize={10} />
        </div>
      </div>
    </>
  )
}
