const qrcode = require("qrcode-terminal");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const { Buttons, Message } = require("whatsapp-web.js/src/structures");

const botSettings = {
  message: "string",
  title: "string",
  button: "string",
};

const ctaButton = new Buttons(
  botSettings,
  [{ body: botSettings.button, url: "wwww.google.com" }],
  botSettings.title ? botSettings.title : null,
  null
);

const TEST_GROUP = "GROUP_ID"; // modify
const buttons_reply = new Buttons(
  "test",
  [{ body: "Test", id: "test-1" }],
  "title",
  "footer"
); // Reply button

const buttons_reply_url = new Buttons(
  "test",
  [
    { body: "Test", id: "test-1" },
    { body: "Test 2", url: "https://wwebjs.dev" },
  ],
  "title",
  "footer"
); // Reply button with URL

const buttons_reply_call = new Buttons(
  "test",
  [
    { body: "Test", id: "test-1" },
    { body: "Test 2 Call", url: "+1 (234) 567-8901" },
  ],
  "title",
  "footer"
); // Reply button with call button

const buttons_reply_call_url = new Buttons(
  "test",
  [
    { body: "Test", id: "test-1" },
    { body: "Test 2 Call", url: "+1 (234) 567-8901" },
    { body: "Test 3 URL", url: "https://wwebjs.dev" },
  ],
  "title",
  "footer"
); // Reply button with call button & url button

const section = {
  title: "test",
  rows: [
    {
      title: "Test 1",
    },
    {
      title: "Test 2",
      id: "test-2",
    },
    {
      title: "Test 3",
      description: "This is a smaller text field, a description",
    },
    {
      title: "Test 4",
      description: "This is a smaller text field, a description",
      id: "test-4",
    },
  ],
};

const clientPathFolder = {
  clientId: "10" + "-" + "5551982211460",
  dataPath: "./.wwebjs_auth",
};

const client = new Client({
  authStrategy: new LocalAuth(clientPathFolder),
  puppeteer: { headless: true },
});

// const message = new Message();

client.on("ready", () => {
  // console.log("season ok");
});

function teste() {
  client.on("qr", (qr) => {
    // console.log("link QR");
    // console.log(qr);
    qrcode.generate(qr, { small: true });
  });
}

client.initialize();

client.on("ready", async () => {
  const number = client.getNumberId("5551982211460");
  for (const component of [
    buttons_reply,
    buttons_reply_url,
    buttons_reply_call,
    buttons_reply_call_url,
  ])
    client.sendMessage(number, component);
});

// client.on("ready", async () => {
//   const number = await client.getNumberId("5551982211460");

//   // console.log(number);
//   await client.sendMessage(number._serialized, "Teste!");
// });

// client.on("message_create", (msg) => {
//   console.log("-----------message_create--------");

//   console.log(msg);
//   // console.log("mensagem de: ", msg.from, "Texto: ", msg.body);
//   // if (msg.body === "Test") {
//   //   // message.links([{ link: "www.youtube.co m", isSuspicious: false }]);
//   // }
//   msg.getMentions;
//   if (msg.body == "q") {
//     let button = new Buttons(
//       "fmmmmmm",
//       [{ id: "yes", body: "sim" }],
//       "Pergunta de fidelização",
//       "att: Fidelizou.me"
//     );

//     client.sendMessage(msg.from, "asad");
//   }

//   if (msg.body === "sim") {
//     let message = "https://app.fidelizou.me/a/2989/";

//     // message.links([{ link: "www.youtube.com", isSuspicious: false }]);

//     client.sendMessage(msg.from, message);
//   }
// });

// // teste();
