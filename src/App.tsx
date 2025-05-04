import { AppSidebar } from './components/app-sidebar'
import { SiteHeader } from './components/site-header'
import { WebcamCard } from './features/face/components/webcam/webcam-card'
import { ThemeProvider } from './components/theme/theme-provider'
import { SidebarInset, SidebarProvider } from './components/ui/sidebar'
import { SettingsCard } from './features/face/components/settings/settings-card'
import { Toaster } from './components/ui/sonner'

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <SiteHeader />
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
        </SidebarInset>
      </SidebarProvider>
      <Toaster />
    </ThemeProvider>
  )
}
