"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
var user = CreateUser_1.default({
    name: "Danilo Bandeira",
    email: "danilobandeira29@gmail.com",
    password: "4444",
    techs: [
        "NodeJS",
        "ReactJS",
        "React Native",
        {
            title: "Javascript",
            experience: 100
        }
    ],
});
function helloWorld(request, response) {
    return response.json(user);
}
exports.helloWorld = helloWorld;
