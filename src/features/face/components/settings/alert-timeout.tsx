import { Label } from '@/components/ui/label'
import { useFaceStore } from '../../store'
import { Input } from '@/components/ui/input'

export function AlertTimeout() {
  const alertTimeout = useFaceStore.use.alertTimeout()
  const setAlertTimeout = useFaceStore.use.setAlertTimeout()
  return (
    <div className="space-y-2">
      <Label htmlFor="timeout">Alert Timeout (seconds)</Label>
      <Input
        id="timeout"
        type="number"
        min={1}
        max={10}
        value={alertTimeout}
        onChange={(e) => setAlertTimeout(Number(e.target.value))}
      />
      <p className="text-xs text-muted-foreground">
        Time before alert is triggered when eyes are closed
      </p>
    </div>
  )
}
