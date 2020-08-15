import { h, render } from 'hypnode';

/* -----------------------------------
 *
 * Components
 *
 * -------------------------------- */

import { Button } from './components/button.component';

/* -----------------------------------
 *
 * Root
 *
 * -------------------------------- */

const Root = () => (
  <div>
    <p>Simple hypnode demo</p>
    <Button />
  </div>
);

/* -----------------------------------
 *
 * Render
 *
 * -------------------------------- */

render(document.getElementById('root'), <Root />);
