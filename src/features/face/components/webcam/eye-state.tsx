import { useEffect, useRef, useState } from 'react'
import { useFaceStore } from '../../store'
import { toast } from 'sonner'
import useSound from 'use-sound'
import sound from '../../../../assets/sound.mp3'

export type EyeStateProps = {
  isDetecting: boolean
  isFace: boolean
  eyesClosed: boolean | null
}

export function EyeState({ isDetecting, eyesClosed, isFace }: EyeStateProps) {
  const [timer, setTimer] = useState<number | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null)
  const alertTimeout = useFaceStore.use.alertTimeout()
  const isSound = useFaceStore.use.isSound()
  const [play] = useSound(sound)

  const stopInterval = (shouldReset: boolean = false) => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (shouldReset) setTimer(null)
  }

  useEffect(() => {
    // Eyes closed
    if (eyesClosed) {
      setTimer(0)
      intervalRef.current = setInterval(() => {
        setTimer((old) => (!old ? 1 : (old += 1)))
      }, 1000)
      return
    }
    //eyes opened
    stopInterval()

    return () => stopInterval()
  }, [eyesClosed])

  useEffect(() => {
    if (!timer) return
    if (timer > alertTimeout) {
      toast.error(`You are sleeping since ${timer}s`)
      if (isSound) play()
    }
  }, [alertTimeout, isSound, play, timer])

  return (
    <div className="p-4 border rounded-lg">
      <div className="text-sm text-muted-foreground">Eyes state</div>
      <div className="font-medium flex justify-between">
        {!isDetecting || !isFace ? (
          <span className="text-gray-500">Not detecting</span>
        ) : eyesClosed ? (
          <span className="text-red-600">Closed</span>
        ) : (
          <span className="text-green-600">Open</span>
        )}
        {timer !== null && <div>closed for: {timer}s</div>}
      </div>
    </div>
  )
}
