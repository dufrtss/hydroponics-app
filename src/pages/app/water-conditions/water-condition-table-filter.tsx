import { Search, X } from 'lucide-react'

import { DatePickerWithRange } from '@/components/date-picker-with-range'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function WaterConditionTableFilter() {
  return (
    <form className='flex items-center gap-2'>
      <span className='text-sm font-semibold'>Filters:</span>
      <Input placeholder='Sensor' className='h-8 w-[270px]' />
      
      <Select defaultValue='all'>
        <SelectTrigger className='h-8 w-[200px]'>
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value='all'>All measurement types</SelectItem>
          <SelectItem value='temperature'>Temperature</SelectItem>
          <SelectItem value='humidity'>Humidity</SelectItem>
        </SelectContent>
      </Select>
      
      <DatePickerWithRange />
      
      <Button type='submit' variant='secondary' size='sm'>
        <Search className='h-4 w-4 mr-2' />
        Apply filters
      </Button>

      <Button type='button' variant='outline' size='sm'>
        <X className='h-4 w-4 mr-2' />
        Remove filters
      </Button>
    </form>
  )
}
