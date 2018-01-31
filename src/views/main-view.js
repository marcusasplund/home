/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import {MediaCard} from './media-card'

export const MainView = (state, actions) => () =>
  <div class='mdc-layout-grid mdc-toolbar-fixed-adjust'>
    <div class='mdc-layout-grid__inner'>
      <div class='mdc-layout-grid__cell'>
        <MediaCard state='state' actions='actions' />
      </div>
      <div class='mdc-layout-grid__cell'>
        <MediaCard state='state' actions='actions' />
      </div>
      <div class='mdc-layout-grid__cell'>
        <MediaCard state='state' actions='actions' />
      </div>
    </div>
  </div>
