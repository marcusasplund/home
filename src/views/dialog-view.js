/* eslint-disable no-unused-vars */
import {h} from 'hyperapp'

export const DialogView = ({state, actions}) =>
  <aside id='my-mdc-dialog'
    oncreate={el => actions.attachDialog(el)}
    class='mdc-dialog'
    role='alertdialog'
    aria-labelledby='my-mdc-dialog-label'
    aria-describedby='my-mdc-dialog-description'>
    <div class='mdc-dialog__surface'>
      <header class='mdc-dialog__header'>
        <h2 id='my-mdc-dialog-label' class='mdc-dialog__header__title white'>
          Bästtrafik
        </h2>
      </header>
      <section id='my-mdc-dialog-description' class='mdc-dialog__body white'>
        En app för att kolla avgångstider mm för kollektivtrafiken i Västra Götaland. <br />
        Gratis o reklamfritt från <a href='https://pap.as' class='white'>Svensk Kod & Film AB</a>
      </section>
      <footer class='mdc-dialog__footer'>
        <button type='button' class='mdc-button mdc-dialog__footer__button mdc-dialog__footer__button--accept'>ok</button>
      </footer>
    </div>
    <div class='mdc-dialog__backdrop' />
  </aside>
