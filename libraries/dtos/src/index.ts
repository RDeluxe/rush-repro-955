// import moment from 'moment'

export const getTime = () => {
  // VS Code should correctly auto-import this
  return moment().format('LLLL')
}
