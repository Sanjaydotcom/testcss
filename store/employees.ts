import { defineStore } from 'pinia'
import { restAPI, URL } from '../composables/api/index'
import employeesList from './employees.json'

interface EmployeeState {
  employeesList: any
}
const state = (): EmployeeState => ({
  employeesList: employeesList,
})

const getters = {
  getEmployees: (state: EmployeeState) => {
    return (id: number) => state.employeesList
  },
  getAssetsById: (state: EmployeeState) => {
    return (empId: any) =>
      state.employeesList.find((user: any) => user.id === empId).details.assets
  },
  getAppraisalById: (state: EmployeeState) => {
    return (empId: any) =>
      state.employeesList.find((user: any) => user.id === empId).details
        .appraisal
  },
  getCredentialById: (state: EmployeeState) => {
    return (empId: any) =>
      state.employeesList.find((user: any) => user.id === empId).details
        .credential
  },
  getStaffExitDetailsById: (state: EmployeeState) => {
    return (userId: any) =>
      state.employeesList.find((user: any) => user.id === userId).details
        .staffExit
  },
  getAllEmployees: (state: EmployeeState) => state.employeesList,
}

export const useEmployeesStore = defineStore('employeeStore', {
  state,
  getters,

  actions: {
    async addNewEmployee(items: any, id: number) {
      const empId = this.employeesList.length + 1
      const newEmployee = {
        id: empId,
        organization: 'StrebenTechnik',
        imageUrl:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        coverImageUrl:
          'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        details: {
          age: 28,
          parentName: 'AVM',
          martialStatus: 'Single',
          general: {
            ...items,
          },
          contact: [],
          assets: [],
          appraisal: [],
          employment: { ...items },
          staffExit: {},
          education: [],
          WorkExperience: [],
        },
        code: 'EMP001',
        name: items.firstName + ' ' + items.lastName,
        shortName: 'Ns',
        designation: items.designation,
        notes: 'note',
        about:
          'Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.',
        status: true,
        createdBy: 'crew1',
        updatedBy: 'crew1',
        createdAt: '2022-02-02T02:02:02.000+00:00',
        updatedAt: '2022-02-02T02:02:02.000+00:00',
      }
      console.log(JSON.stringify(newEmployee))
      this.employeesList = [...this.employeesList, newEmployee]
    },
    async updateStaffExitDetails(items: any, id: number) {
      const updatedeStaffExitDetails = (t: any) => {
        const data = {
          ...t,
          details: {
            ...t.details,
            staffExit: items,
          },
        }
        return data
      }
      const updated = await this.employeesList.map((t: any) =>
        t.id === id ? updatedeStaffExitDetails(t) : t,
      )

      this.employeesList = updated
      // this.employeesList = [...this.employeesList, data]
    },
    async addEducation(items: any, id: number) {
      console.log(items)
      console.log(id)

      const updatedUser = (t: any) => {
        const data = {
          ...t,
          details: {
            ...t.details,
            education: [...t.details.education, items],
          },
        }
        console.log('items', data)
        return data
      }
      const updated = await this.employeesList.map((t: any) =>
        t.id === id ? updatedUser(t) : t,
      )

      console.log(updated)
      this.employeesList = updated
    },
    async addAssets(items: any, id: number) {
      const updatedUser = (t: any) => {
        const data = {
          ...t,
          details: {
            ...t.details,
            assets: [...t.details.assets, items],
          },
        }
        console.log('ASTdata', data)
        return data
      }
      const updated = await this.employeesList.map((t: any) =>
        t.id === id ? updatedUser(t) : t,
      )
      console.log('updated', updated)
      this.employeesList = updated
    },
    async addAppraisal(items: any, id: number) {
      const updatedUser = (t: any) => {
        const data = {
          ...t,
          details: {
            ...t.details,
            appraisal: [...t.details.appraisal, items],
          },
        }
        return data
      }
      const updated = await this.employeesList.map((t: any) =>
        t.id === id ? updatedUser(t) : t,
      )
      console.log('updated', updated)
      this.employeesList = updated
    },

    async addExperience(items: any, id: number) {
      const updatedUser = (t: any) => {
        const data = {
          ...t,
          details: {
            ...t.details,
            WorkExperience: [...t.details.WorkExperience, items],
          },
        }
        console.log('EXPdata', data)
        return data
      }
      const updated = await this.employeesList.map((t: any) =>
        t.id === id ? updatedUser(t) : t,
      )

      console.log('updated', updated)
      this.employeesList = updated
    },
    async addCredential(items: any, id: number) {
      const updatedUser = (t: any) => {
        const data = {
          ...t,
          details: {
            ...t.details,
            credential: [...t.details.credential, items],
          },
        }
        return data
      }
      const updated = await this.employeesList.map((t: any) =>
        t.id === id ? updatedUser(t) : t,
      )
      this.employeesList = updated
    },
  },
})
