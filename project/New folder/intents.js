const dialogflow = require('dialogflow');

// Create a new Dialogflow agent
const agent = new dialogflow.AgentsClient({
  keyFilename: 'path/to/service-account-key.json',
});

const agentName = `projects/${process.env.GOOGLE_CLOUD_PROJECT}/agent`;
agent.createAgent({
  parent: 'projects/' + process.env.GOOGLE_CLOUD_PROJECT,
  agent: {
    displayName: 'My Agent',
    defaultLanguageCode: 'en',
  },
}, (err, response) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Agent created: ${response.agent.name}`);
  }
});




const intents = require('./intents.json');

// Import the intents into the agent
agent.batchUpdateIntents({
  parent: agentName,
  intentBatch: {
    intents,
  },
}, (err, response) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Intents imported: ${response.intentBatch.intents.length}`);
  }
});




const express = require('express');
const app = express();

app.post('/dialogflow', (req, res) => {
  const { query } = req.body;

  // Create a new Dialogflow session
  const sessionClient = new dialogflow.SessionsClient({
    keyFilename: 'path/to/service-account-key.json',
  });

  const sessionPath = sessionClient.sessionPath(process.env.GOOGLE_CLOUD_PROJECT, 'my-session');

  // Send the user input to the agent
  sessionClient.detectIntent({
    session: sessionPath,
    queryInput: {
      text: {
        text: query,
      },
    },
  }, (err, response) => {
    if (err) {
      console.error(err);
    } else {
      const intent = response.queryResult.intent;
      const slots = response.queryResult.parameters;

      // Use the intent and slot values to perform the desired actions
      if (intent === 'UploadCV') {
        // Upload the CV
        console.log(`Uploading CV: ${slots.cv}`);
      } else if (intent === 'JobNotification') {
        // Subscribe to job notifications
        console.log(`Subscribing to job notifications: ${slots.jobTitle} in ${slots.jobLocation}`);
      }
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});