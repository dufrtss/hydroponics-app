import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

export function WaterConditionDetais() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Sensor: DHT22</DialogTitle>
        <DialogDescription>Water condition details</DialogDescription>
      </DialogHeader>

      <div className='flex flex-col py-2'>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className='text-muted-foreground'>Temperature</TableCell>
              <TableCell className='flex justify-end'>
                <div className='flex items-center gap-2'>
                  <span>32.23</span>
                  <span>°C</span>
                </div>
              </TableCell>
              <TableCell className='font-mono font-medium'></TableCell>
            </TableRow>

            <TableRow>
              <TableCell className='text-muted-foreground'>Received at</TableCell>
              <TableCell className='flex justify-end'>
                <div className='flex items-center gap-2'>
                  <span>15 minutes ago</span>
                </div>
              </TableCell>
              <TableCell className='font-mono font-medium'></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </DialogContent>
  )
}
