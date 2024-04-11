import { p as public_env } from "../../chunks/shared-server.js";
const load = async () => {
  const res = await fetch(public_env.PUBLIC_BACKEND_HOSTNAME);
  return {
    amt: Number(await res.text())
  };
};
export {
  load
};
