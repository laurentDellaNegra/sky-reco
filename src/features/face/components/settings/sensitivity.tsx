import { Label } from '@/components/ui/label'
import { useFaceStore } from '../../store'
import { Slider } from '@/components/ui/slider'

export function Sensitivity() {
  const sensitivity = useFaceStore.use.sensitivity()
  const setSensitivity = useFaceStore.use.setSensitivity()
  return (
    <div className="space-y-2">
      <Label htmlFor="sensitivity">
        Detection Sensitivity: {sensitivity.toFixed(2)}
      </Label>
      <Slider
        id="sensitivity"
        min={0.1}
        max={0.4}
        step={0.01}
        value={[sensitivity]}
        onValueChange={(value) => setSensitivity(value[0])}
      />
      <p className="text-xs text-muted-foreground">
        Higher values make the detection more sensitive
      </p>
    </div>
  )
}
