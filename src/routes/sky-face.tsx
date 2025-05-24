import { SettingsCard } from '@/features/face/components/settings/settings-card'
import { WebcamCard } from '@/features/face/components/webcam/webcam-card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sky-face')({
  component: SkyFacePage,
})

function SkyFacePage() {
  return (
    <div className="container flex flex-col gap-4 p-4 md:gap-6 md:p-6 max-w-7xl mx-auto">
      <div className=" flex flex-1 gap-4 md:gap-6 items-start">
        <div className="flex flex-2">
          <WebcamCard />
        </div>
        <div className="flex flex-1">
          <SettingsCard />
        </div>
      </div>
    </div>
  )
}
