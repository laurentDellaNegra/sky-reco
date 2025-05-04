import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { createSelectors } from './selectors'
import { persist } from 'zustand/middleware'

type State = {
  sensitivity: number
  alertTimeout: number
  isSound: boolean
}

type Actions = {
  setSensitivity: (value: number) => void
  setAlertTimeout: (value: number) => void
  setSound: (isSound: boolean) => void
  reset: () => void
}

const INITIAL_STATE: State = {
  sensitivity: 0.2,
  alertTimeout: 3,
  isSound: false,
}

const useFaceStoreBase = create<State & Actions>()(
  persist(
    immer((set) => ({
      sensitivity: INITIAL_STATE.sensitivity,
      alertTimeout: INITIAL_STATE.alertTimeout,
      isSound: INITIAL_STATE.isSound,
      setSensitivity: (value) => set(() => ({ sensitivity: value })),
      setAlertTimeout: (value) => set(() => ({ alertTimeout: value })),
      setSound: (value) => set(() => ({ isSound: value })),
      reset: () => set(() => ({ ...INITIAL_STATE })),
    })),
    {
      name: 'face-store',
    }
  )
)

export const useFaceStore = createSelectors(useFaceStoreBase)
