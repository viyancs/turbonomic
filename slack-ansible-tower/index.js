require('dotenv').config();
const { App, subtype } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  ignoreSelf:false,
  // Socket Mode doesn't listen on a port, but in case you want your app to respond to OAuth,
  // you still need to listen on some port!
  port: process.env.PORT || 3000
});


app.message('knock knock', async ({ message, say }) => {
  await say(`_Who's there?_`);
});

app.event('message', async ({ event, client, logger }) => {
console.log(event);
});

app.message(subtype('bot_message'), ({ event, logger }) => {
    console.log(event);
    console.log(event.blocks[5].elements)
});

(async () => {
  // Start your app
  await app.start();

  console.log('⚡️ Bolt app is running!');
})();