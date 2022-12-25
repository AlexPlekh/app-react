import React, { useState, useContext } from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import * as jsxRuntime from "react/jsx-runtime";
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", {
    className: "justify-center items-center",
    children: ["\xA9 ", new Date().getFullYear(), " - ", /* @__PURE__ */ jsx("a", {
      href: "https://jonlu.ca",
      children: "JonLuca DeCaro"
    }), " -", " ", /* @__PURE__ */ jsx("a", {
      className: "p-1",
      href: "https://github.com/jonluca/vite-typescript-ssr-react",
      children: "Repo"
    })]
  });
};
const defaultVal = {
  name: "",
  setName: () => {
  }
};
const context = React.createContext(defaultVal);
const {
  Provider
} = context;
const ContextWrapper = ({
  children
}) => {
  const [name, setName] = useState(defaultVal.name);
  return /* @__PURE__ */ jsx(Provider, {
    value: {
      name,
      setName
    },
    children
  });
};
const useAppContext = () => useContext(context);
const Main = () => {
  const {
    name,
    setName
  } = useAppContext();
  return /* @__PURE__ */ jsxs("div", {
    className: "flex bg-white-100 font-sans items-center flex-col justify-between h-screen",
    children: [/* @__PURE__ */ jsxs("div", {
      className: "flex items-center flex-col pt-10",
      children: [/* @__PURE__ */ jsxs("h1", {
        className: "font-bold text-gray-900 text-5xl lg:text-7xl text-center ",
        children: ["Hi", name ? `, ${name}!` : ""]
      }), /* @__PURE__ */ jsx("h2", {
        className: "w-2/5 p-5 items-center flex align-middle text-center min-w-[320px]",
        style: {
          color: "green"
        },
        children: "This is a Vite React SSR Tailwind boilerplate!"
      }), /* @__PURE__ */ jsx("input", {
        placeholder: "Enter your name",
        onChange: (e) => setName(e.currentTarget.value),
        style: {
          background: "#8080802e"
        },
        className: "focus:ring-indigo-500 focus:border-indigo-500 block w-full text-2xl border-gray-300 rounded-md p-2"
      })]
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
};
const App = () => {
  return /* @__PURE__ */ jsx(ContextWrapper, {
    children: /* @__PURE__ */ jsx(Main, {})
  });
};
const index = "";
function render(url) {
  return ReactDOMServer.renderToString(/* @__PURE__ */ jsx(React.StrictMode, {
    children: /* @__PURE__ */ jsx(StaticRouter, {
      location: url,
      children: /* @__PURE__ */ jsx(App, {})
    })
  }));
}
export {
  render
};
