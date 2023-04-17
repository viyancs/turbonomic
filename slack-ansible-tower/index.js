require('dotenv').config();
const axios = require('axios');
const https = require('https');
const { App, subtype } = require('@slack/bolt');
const towerUrl = process.env.ANSIBLE_TOWER_URL;
const username = process.env.ANSIBLE_TOWER_USERNAME;
const password = process.env.ANSIBLE_TOWER_PASSWORD;
const workflowId = process.env.ANSIBLE_WORKFLOW_ID;

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

// set up the request data
const requestData = {
  // 'extra_vars': {
  //   'param1': 'value1',
  //   'param2': 'value2'
  // }
};
const agent = new https.Agent({
  rejectUnauthorized: false
});

app.message('knock knock', async ({ message, say }) => {
  await say(`_Who's there?_`);
});

app.event('message', async ({ event, client, logger }) => {
console.log(event);
});

app.message(subtype('bot_message'), ({ event, logger }) => {
  // make the request
  axios.post(`${towerUrl}/api/v2/workflow_job_templates/${workflowId}/launch/`, requestData, {
    httpsAgent: agent,
    auth: {
      username: username,
      password: password
    }
  })
  .then(response => {
    console.log(`Workflow execution started. Job ID: ${response.data.id}`);
  })
  .catch(error => {
    console.error('Error executing workflow:', error.response.data);
  });
});

(async () => {

  try {
    // Start your app
    await app.start();
    console.log('⚡️ Bolt app is running!');
  } catch (error) {
    console.log(error)
  }
  

  
})();