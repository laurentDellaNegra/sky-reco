import { RotateCcwIcon } from 'lucide-react'
import { Button } from '../../../../components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../../components/ui/card'
import { Sensitivity } from './sensitivity'
import { AlertTimeout } from './alert-timeout'
import { useFaceStore } from '../../store'
import { AlertSound } from './alert-sound'

export function SettingsCard() {
  const reset = useFaceStore.use.reset()

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
          <Sensitivity />
          <AlertTimeout />
          <AlertSound />
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex flex-1 justify-end space-x-2 pt-4">
          <Button variant="outline" onClick={reset}>
            <RotateCcwIcon className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
