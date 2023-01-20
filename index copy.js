const qrcode = require("qrcode-terminal");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const { Buttons, Message } = require("whatsapp-web.js/src/structures");

const clientPathFolder = {
  clientId: "10" + "-" + "5551982211460",
  dataPath: "./.wwebjs_auth",
};

const client = new Client({
  authStrategy: new LocalAuth(clientPathFolder),
  puppeteer: { headless: false },
});

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

// const message = new Message();

function authenticate() {
  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });
}

client.initialize();

client.on("ready", async () => {
  const number = await client.getNumberId("5551982211460");

  // console.log(number);
  await client.sendMessage(number._serialized, "teste");
  // await client.sendMessage(number._serialized, buttons_reply);
  // await client.sendMessage(number._serialized, buttons_reply_url);
  // await client.sendMessage(number._serialized, buttons_reply_call);
  // await client.sendMessage(number._serialized, buttons_reply_call_url);

  client.on("message_create", (msg) => {
    let info = msg.getInfo();
    console.log(info);
  });
});

client.on("message_create", async (msg) => {
  console.log("----------------msg_info------------------");

  const info = await msg.getInfo();
  console.log(info);
  console.log("------------------------------------------");
  console.log("mensagem de: ", msg.from, "Texto: ", msg.body);
  if (msg.body === "Test") {
    // message.links([{ link: "www.youtube.co m", isSuspicious: false }]);
  }
  const resolveStatusTimestamp = async (msg) => {
    let info = await msg.getInfo();
    switch (message.ack) {
      case ACK_DEVICE:
        return info["delivery"][0].t;
      case ACK_READ:
        return info["read"][0].t;
      case ACK_PLAYED:
        return info["played"][0].t;
      default:
        return null;
    }
  };
  console.log(resolveStatusTimestamp);
  msg.getMentions;
  if (msg.body == "r") {
    let button = new Buttons(
      "Olá",
      [{ id: "yes", body: "sim" }],
      "Pergunta de fidelização",
      "att: Fidelizou.me"
    );
    client.sendMessage(msg.from, button);
  }
  if (msg.body === "sim") {
    let message = "https://app.fidelizou.me/a/2989/";
    // message.links([{ link: "www.youtube.com", isSuspicious: false }]);
    client.sendMessage(msg.from, message);
  }
});

client.on("message_ack", (ack) => {
  console.log(
    ">>>>>>>>>>>>>>>>>>>>>>>> msg_ack <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<"
  );
  console.log(ack);
});

// authenticate();
