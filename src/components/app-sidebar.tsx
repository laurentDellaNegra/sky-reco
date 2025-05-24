import * as React from 'react'
import { AudioLinesIcon, ScanFaceIcon, SquareActivityIcon } from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Link } from '@tanstack/react-router'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link to="/">
                <SquareActivityIcon className="h-5 w-5" />
                <span className="text-base font-semibold">SkyReco</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              <SidebarMenuItem className="flex items-center gap-2">
                <Link to="/sky-face" className="flex-1">
                  {({ isActive }) => (
                    <SidebarMenuButton isActive={isActive}>
                      <ScanFaceIcon />
                      Sky Face
                    </SidebarMenuButton>
                  )}
                </Link>
              </SidebarMenuItem>
              <SidebarMenuItem className="flex items-center gap-2">
                <Link to="/sky-voice" className="flex-1">
                  {({ isActive }) => (
                    <SidebarMenuButton isActive={isActive}>
                      <AudioLinesIcon />
                      Sky Voice
                    </SidebarMenuButton>
                  )}
                </Link>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>Skysoft</SidebarFooter>
    </Sidebar>
  )
}
