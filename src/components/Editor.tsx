import type { Data } from "@measured/puck";
import { Puck } from "@measured/puck";
import config from "../puck.config";
import "@measured/puck/puck.css";

export const data: Data = {
  content: [
    {
      type: "HeadingBlock",
      props: {
        title: "This is a fabulos heading",
        id: "HeadingBlock-1694032984497",
      },
    },
  ],
  root: {
    props: {
      title: "Internal Docs",
    },
  },
};

export function Editor() {
  const save = (data: Data) => {
    // TODO: Persist to DB layer
    console.log({ data });
  };

  return <Puck config={config} data={data} onPublish={save} />;
}
