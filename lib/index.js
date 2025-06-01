"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
const server = net_1.default.createServer((socket) => {
    console.log("クライアントが接続しました");
    socket.on("data", (data) => {
        console.log("クライアントからのメッセージ: ${data}");
        socket.write("メッセージ1\n");
        socket.write("メッセージ2\n");
        socket.write("メッセージ3\n");
    });
    socket.on("end", () => {
        console.log("クライアントが切断しました");
    });
    socket.on("error", (err) => {
        console.log("ソケットエラー:, ${err}");
    });
});
server.listen(443, () => {
    console.log("サーバーがポート443で起動しました");
});
server.on("error", (err) => {
    console.log("サーバーエラー:, ${err}");
});
