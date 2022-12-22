const qrcode = require("qrcode-terminal");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const { Buttons, Message } = require("whatsapp-web.js/src/structures");

// ACK_ERROR: -1,
// ACK_PENDING: 0,
// ACK_SERVER: 1,
// ACK_DEVICE: 2,
// ACK_READ: 3,
// ACK_PLAYED: 4,

const clientPathFolder = {
  clientId: "10" + "-" + "9999999999999",
  dataPath: "./.wwebjs_auth",
};

const client = new Client({
  authStrategy: new LocalAuth(clientPathFolder),
  puppeteer: { headless: true },
});

const buttons_reply_url = new Buttons(
  "teste ios",
  [
    { body: "Test", id: "test-1" },
    { body: "Test 2", url: "https://wwebjs.dev" },
  ],
  "title",
  "footer"
); 

function authenticate() {
  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });
}

client.initialize();

client.on("state_changed", async (state) => {
  console.log(state);
});

client.on("auth_failure", async (auth) => {
  console.log(auth);
});

client.on("ready", async () => {
  let number = [
    "9999999999999",
  ];

  let gol = await client.getState();
  console.log(gol);

  for (let phone of number) {
    const tele = await client.getNumberId(phone);
    await client.sendMessage(tele._serialized, "ola");
  }

  // const number = await client.getNumberId("9999999999999");
  // await client.sendMessage(numberAndre._serialized, "teste");
});

// client.on("message_create", async (message) => {
// console.log("----------------msg_info------------------");
// console.log("message", message.from, message.ack);
// });

// client.on("message_ack", async (event) => {
// let info = await msg.getInfo();
// console.log("----------------msg_ack------------------");
// console.log("ack", event.to, event.ack);
// setInterval(() => {
//   // contato = {};
//   // contato[msg.to] = msg.ack;
//   // //   let info = await msg.getInfo();
//   // console.log(info);
// }, 1000);
// });

// client.on("message", async (msg) => {
//   console.log("----------------msg_response------------------");
//   console.log(msg);
//   console.log("------------------------------------------");
//   // console.clear();

//   if (msg.body === "Test") {
//     let message = "https://app.fidelizou.me/a/2989/";

//     // message.links([{ link: "www.youtube.com", isSuspicious: false }]);

//     client.sendMessage(msg.from, message);
//   }
// });

// client.on("message_create", async (msg) => {
//   const info = await msg.getInfo();
//   console.log("----------------msg_info------------------");
//   console.log(info);
//   console.log("------------------------------------------");

//   const resolveStatusTimestamp = async (msg) => {
//     let info = await msg.getInfo();
//     switch (message.ack) {
//       case ACK_DEVICE:
//         return info["delivery"][0].t;
//       case ACK_READ:
//         return info["read"][0].t;
//       case ACK_PLAYED:
//         return info["played"][0].t;
//       default:
//         return null;
//     }
//   };
//   console.log(resolveStatusTimestamp);
// });

// client.on("message_ack", (ack) => {
//   console.log(
//     ">>>>>>>>>>>>>>>>>>>>>>>> msg_ack <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
//   );
//   console.log(ack);
// });

authenticate();
