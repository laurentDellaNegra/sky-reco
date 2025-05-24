import { SpeechCommandInterface } from '@/features/voice/voice-card-demo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sky-voice')({
  component: SkyVoicePage,
})

function SkyVoicePage() {
  return (
    <div className="container flex flex-col gap-4 p-4 md:gap-6 md:p-6 max-w-7xl mx-auto">
      <div className="flex flex-1">
        <SpeechCommandInterface />
      </div>
    </div>
  )
}
