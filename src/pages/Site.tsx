import { Render } from '@measured/puck';
import config from '../puck.config';
import { data } from '../components/Editor';

export function Site() {
  return <Render config={config} data={data} />;
}
