import { Render } from '@measured/puck';
import config from '../puck.config';
import { data } from '../demo-data';

export default function Site() {
  return <Render config={config} data={data} />;
}
