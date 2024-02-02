
import { create } from 'zustand'
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware'

export interface taskType {
  id: number
  title: string
  description: string
  status: number

}

interface orderType {

  task: taskType[]
  addTask: any
  deleteTask: any
  changeState: any
}

export const useStore = create<orderType>()(
  subscribeWithSelector(
    persist(
      devtools(
        (set, get) => ({
          task: [],

          addTask: (newTask: taskType) => {
            const { task } = get()
            newTask.id = task.reduce((maxId, objeto) => {
              return (objeto.id > maxId ? objeto.id : maxId) + 1;
            }, 0);
            set((state) => ({ task: [...state.task, newTask] })
              , false, 'addTask')
          },

          deleteTask: (deletedId: any) => {
            const { task } = get()
            const newtask = structuredClone(task)
              .filter((task) => task.id != deletedId)
            set({ task: newtask }, false, 'deleteTask')
          },

          changeState: (id: any, newState: number) => {
            const { task } = get()
            const newtask = structuredClone(task)
           const index = newtask.findIndex((task) => task.id === id)

            newtask[index].status = newState
            set({ task: newtask }, false, 'changeState')
          }

        }),

      ), { name: 'estado' })
  )
)