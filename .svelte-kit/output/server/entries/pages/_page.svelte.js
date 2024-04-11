import { c as create_ssr_component, e as escape, d as add_attribute } from "../../chunks/ssr.js";
const OWE = "owe";
const ARE_OWED = "are owed";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const oweString = data.amt > 0 ? OWE : ARE_OWED;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>You ${escape(oweString)} <span${add_attribute("class", oweString === OWE ? "text-red-500" : "text-green-500", 0)}>${escape(data.amt < 0 ? -data.amt : data.amt)}</span></h1>`;
});
export {
  Page as default
};
