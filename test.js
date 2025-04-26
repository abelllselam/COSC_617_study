import net from "net";

const host = "ac-l2ovsst-shard-00-00.ze7xwkp.mongodb.net";
const port = 27017;

const socket = net.createConnection({ host, port }, () => {
  console.log("✅ TCP connection succeeded");
  socket.end();
});

socket.on("error", (err) => {
  console.error("❌ TCP connection failed:", err);
});
