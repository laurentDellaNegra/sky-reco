import { Label } from '@/components/ui/label'
import { useFaceStore } from '../../store'
import { Switch } from '@/components/ui/switch'

export function AlertSound() {
  const isSound = useFaceStore.use.isSound()
  const setSound = useFaceStore.use.setSound()
  return (
    <div className="flex items-center space-x-2">
      <Switch id="sound" checked={isSound} onCheckedChange={setSound} />
      <Label htmlFor="sound">Play alert sound</Label>
    </div>
  )
}
