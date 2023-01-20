const qrcode = require("qrcode-terminal");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const { Buttons, Message } = require("whatsapp-web.js/src/structures");

// ACK_ERROR: -1,
// ACK_PENDING: 0,
// ACK_SERVER: 1,
// ACK_DEVICE: 2,
// ACK_READ: 3,
// ACK_PLAYED: 4,

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

const clientPathFolder = {
  // clientId: "10" + "-" + "555181559667",
  clientId: "10" + "-" + "5551982211460",
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
); // Reply button with URL

function authenticate() {
  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });
}

client.initialize();

client.on("ready", async () => {
  // iphone
  // const number = await client.getNumberId("555184498643");
  // android
  const number = await client.getNumberId("555181559667");
  // const number = await client.getNumberId("5551982211460");

  await client.sendMessage(number._serialized, "teste");
});

client.on("message_create", async (msg) => {
  // console.log("----------------msg_info------------------");
  // console.log(msg);
  // console.log("------------------------------------------");

  setInterval(() => {
    let info = msg.getInfo();

    console.log("----------------msg_info------------------");
    console.log(info);
    console.log("------------------------------------------");
  }, 1000);
});

client.on("message_ack", async (msg) => {
  let info = await msg.getInfo();

  setInterval(() => {
    console.log("----------------msg_ack------------------");

    contato = {};

    contato[msg.to] = msg.ack;
    //   let info = await msg.getInfo();

    console.log(info);
    console.log("------------------------------------------");
  }, 1000);
});

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

// authenticate();
