import { RotateCcwIcon, SaveIcon } from 'lucide-react'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Input } from './ui/input'
import { Slider } from './ui/slider'
import { Label } from './ui/label'
import { Switch } from './ui/switch'
import { useState } from 'react'

export function SettingsCard() {
  const [sensitivity, setSensitivity] = useState(0.5)
  const [alertTimeout, setAlertTimeout] = useState(3)
  const [alertSound, setAlertSound] = useState(true)

  const handleSaveSettings = () => {
    console.log('todo')
  }

  return (
    <Card className="flex flex-1 ">
      <CardHeader>
        <CardTitle>Eyes tracking</CardTitle>
        <CardDescription>
          Track the eyes and check if the user closes the eyes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="sensitivity">
              Detection Sensitivity: {sensitivity.toFixed(2)}
            </Label>
            <Slider
              id="sensitivity"
              min={0.1}
              max={1}
              step={0.01}
              value={[sensitivity]}
              onValueChange={(value) => setSensitivity(value[0])}
            />
            <p className="text-xs text-muted-foreground">
              Higher values make the detection more sensitive
            </p>
          </div>

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

          <div className="flex items-center space-x-2">
            <Switch
              id="sound"
              checked={alertSound}
              onCheckedChange={setAlertSound}
            />
            <Label htmlFor="sound">Play alert sound</Label>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-end space-x-2 pt-4">
          <Button
            variant="outline"
            onClick={() => {
              setSensitivity(0.5)
              setAlertTimeout(3)
              setAlertSound(true)
            }}
          >
            <RotateCcwIcon className="w-4 h-4 mr-2" />
            Reset
          </Button>
          <Button onClick={handleSaveSettings}>
            <SaveIcon className="w-4 h-4 mr-2" />
            Save Settings
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
