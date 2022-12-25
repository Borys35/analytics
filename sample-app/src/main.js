"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const react_2 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const react_router_dom_1 = require("react-router-dom");
const About_1 = __importDefault(require("./routes/About"));
const Home_1 = __importDefault(require("./routes/Home"));
const theme_1 = require("./styles/theme");
const router = (0, react_router_dom_1.createBrowserRouter)((0, react_router_dom_1.createRoutesFromElements)(<>
      <react_router_dom_1.Route path="/" element={<Home_1.default />}/>
      <react_router_dom_1.Route path="about" element={<About_1.default />}/>
    </>));
client_1.default.createRoot(document.getElementById("root")).render(<react_2.default.StrictMode>
    <react_1.ChakraProvider theme={theme_1.theme}>
      <react_router_dom_1.RouterProvider router={router}/>
    </react_1.ChakraProvider>
  </react_2.default.StrictMode>);
