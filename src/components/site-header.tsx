import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { ModeToggle } from './mode-toggle'
import { AudioLinesIcon, ScanFaceIcon } from 'lucide-react'
import { useLocation } from '@tanstack/react-router'

export function SiteHeader() {
  const { pathname } = useLocation()
  return (
    <header className="group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        {pathname === '/sky-face' ? (
          <h1 className="text-base font-medium flex gap-2 items-center">
            <ScanFaceIcon className="h-5" />
            Sky Face
          </h1>
        ) : pathname === '/sky-voice' ? (
          <h1 className="text-base font-medium flex gap-2 items-center">
            <AudioLinesIcon className="h-5" />
            Sky Voice
          </h1>
        ) : null}
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
