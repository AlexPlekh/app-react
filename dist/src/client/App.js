import { jsx as _jsx } from "react/jsx-runtime";
import Main from "./pages/Main";
import { ContextWrapper } from "./Context";
export const App = () => {
    return (_jsx(ContextWrapper, { children: _jsx(Main, {}) }));
};
export default App;
//# sourceMappingURL=App.js.map