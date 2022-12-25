import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Footer } from "../components/Footer";
import { useAppContext } from "../Context";
const Main = () => {
    const { name, setName } = useAppContext();
    return (_jsxs("div", Object.assign({ className: "flex bg-white-100 font-sans items-center flex-col justify-between h-screen" }, { children: [_jsxs("div", Object.assign({ className: "flex items-center flex-col pt-10" }, { children: [_jsxs("h1", Object.assign({ className: "font-bold text-gray-900 text-5xl lg:text-7xl text-center " }, { children: ["Hi", name ? `, ${name}!` : ""] })), _jsx("h2", Object.assign({ className: "w-2/5 p-5 items-center flex align-middle text-center min-w-[320px]", style: { color: "green" } }, { children: "This is a Vite React SSR Tailwind boilerplate!" })), _jsx("input", { placeholder: "Enter your name", onChange: e => setName(e.currentTarget.value), style: { background: "#8080802e" }, className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full text-2xl border-gray-300 rounded-md p-2" })] })), _jsx(Footer, {})] })));
};
export default Main;
//# sourceMappingURL=Main.js.map