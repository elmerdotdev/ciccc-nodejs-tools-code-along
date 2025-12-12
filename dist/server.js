"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const page_routes_1 = __importDefault(require("./routes/page.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use('/contact-us', page_routes_1.default);
app.get('/', (_req, res) => {
    res.status(200).send('Welcome to my server!');
});
app.get('/about', (_req, res) => {
    res.status(200).send('About Us');
});
app.use((_req, res) => {
    res.status(404).send('Invalid route!');
});
const PORT = process.env.PORT;
if (!PORT) {
    throw new Error('Missing port!');
}
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
