/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'
import {HeaderView} from './header-view'
import {Switch, Route} from '@hyperapp/router'
import * as transitions from 'hyperapp-transitions'

export const view = (state, actions) =>
  <div class='body'>
    <div class='content'>
      <Switch>
        <Route path='/' render={HeaderView(state, actions)} />
      </Switch>
      <main />
    </div>
  </div>
