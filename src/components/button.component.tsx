import { h, useState } from 'hypnode';

/* -----------------------------------
 *
 * Button
 *
 * -------------------------------- */

function Button() {
  const [count, setState] = useState(0);

  return <button onClick={() => setState(count + 1)}>Counter: {count}</button>;
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Button };
