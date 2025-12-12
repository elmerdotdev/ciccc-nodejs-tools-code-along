"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pageRouter = (0, express_1.default)();
pageRouter.get('/my-story', (req, res) => {
    res.status(200).send('My Story');
});
exports.default = pageRouter;
