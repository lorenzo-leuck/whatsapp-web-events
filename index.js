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

let numberArray = [
  "5551981558124",
  "5551981558241",
  "5551981558521",
  "5551981558618",
  "5551981558728",
  "5551981559667",
  "5551981571092",
];

let teste = {};

// const number = await client.getNumberId(element);

client.on("ready", async () => {
  const number1 = await client.getNumberId("5551981558124");
  const number2 = await client.getNumberId("5551981558241");
  const number3 = await client.getNumberId("5551981558521");
  const number4 = await client.getNumberId("5551981558618");
  const number5 = await client.getNumberId("5551981558728");
  const number6 = await client.getNumberId("5551981559667");
  const number7 = await client.getNumberId("5551981571092");

  const number1z = await client.isRegisteredUser("5551981558124@c.us");
  const number2z = await client.isRegisteredUser("5551981558241@c.us");
  const number3z = await client.isRegisteredUser("5551981558521@c.us");
  const number4z = await client.isRegisteredUser("5551981558618@c.us");
  const number5z = await client.isRegisteredUser("5551981558728@c.us");
  const number6z = await client.isRegisteredUser("5551981559667@c.us");
  const number7z = await client.isRegisteredUser("5551981571092@c.us");

  teste = {
    5551981558124: number1z,
    5551981558241: number2z,
    5551981558521: number3z,
    5551981558618: number4z,
    5551981558728: number5z,
    5551981559667: number6z,
    5551981571092: number7z,
  };

  console.log(teste);
});

// numberArray.forEach((element) => {
//   client.on("ready", async () => {
//     const number = await client.getNumberId(element);

//     teste[element] = number;
//   });
// });

// console.log(teste);

// client.on("ready", async () => {

// iphone
// const number = await client.getNumberId("555184498643");
// android

// const number = await client.getNumberId("5551982211460");

// await client.sendMessage(number._serialized, "teste leitura");
// });

// client.on("message_create", async (msg) => {
//   // console.log("----------------msg_info------------------");
//   // console.log(msg);
//   // console.log("------------------------------------------");
//   let info = await msg.getInfo();

//   setInterval(() => {
//     console.log("----------------msg_info------------------");
//     console.log(info);
//     console.log("------------------------------------------");
//   }, 1000);
// });

// client.on("message_ack", async (msg) => {
//   // let info = await msg.getInfo();
//   console.log(msg);
// setInterval(() => {
//   console.log("----------------msg_ack------------------");

//   // contato = {};

//   // contato[msg.to] = msg.ack;
//   //   let info = await msg.getInfo();

//   console.log(msg.id.id);
//   console.log("------------------------------------------");
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

// authenticate();
