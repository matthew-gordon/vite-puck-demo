import '@measured/puck/puck.css';
import type { Data } from '@measured/puck';
import { Puck } from '@measured/puck';
import config from '../puck.config';
import { data } from '../demo-data';

export function Editor() {
  const save = (data: Data) => {
    // TODO: Persist to DB layer
    console.log({ data });
  };

  return <Puck config={config} data={data} onPublish={save} />;
}
