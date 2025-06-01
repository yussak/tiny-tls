import net from "net";

const server = net.createServer((socket) => {
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
