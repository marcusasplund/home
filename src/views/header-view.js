/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

export const HeaderView = (state, actions) => () =>
  <header class='mdc-toolbar mdc-toolbar--fixed mdc-toolbar--waterfall mdc-toolbar--flexible mdc-toolbar--flexible-default-behavior demo-toolbar' oncreate={el => actions.attachToolbar(el)}>
    <div class='mdc-toolbar__row demo-toolbar__row--with-image'>
      <section class='mdc-toolbar__section mdc-toolbar__section--align-start'>
        <span class='mdc-toolbar__title tk-questa-grande fadein'>Svensk Kod & Film AB</span>
      </section>
    </div>
  </header>
