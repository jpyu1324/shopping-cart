import { configure } from "mobx";

// useProxies: ie 호환
configure({ enforceActions: "always", useProxies: "never" });
export default {};
