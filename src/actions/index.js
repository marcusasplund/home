import {MDCDialog} from '@material/dialog'
import {MDCToolbar} from '@material/toolbar'
import {location} from '@hyperapp/router'

let dialog

const showDialog = (e) => {
  dialog.lastFocusedTarget = e.target
  dialog.show()
}

const attachToolbar = (el) => {
  let toolbar = MDCToolbar.attachTo(el)
  toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust')
}

const attachDialog = (el) => {
  dialog = new MDCDialog(el)
  dialog.listen('MDCDialog:accept', () => console.log('accepted'))
  dialog.listen('MDCDialog:cancel', () => console.log('canceled'))
}

export const actions = {
  location: location.actions,

  set: x => x,

  attachDialog: (el) => attachDialog(el),

  attachToolbar: (el) => attachToolbar(el),

  showDialog: (e) => showDialog(e)
}
