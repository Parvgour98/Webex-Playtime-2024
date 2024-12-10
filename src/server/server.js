// require express
const express = require('express');

// intialize express
const app = express();

// listen to the port 3000
app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
});

// creating routing path to get the request
app.get('/', (req, res) => {
    res.send('I am a server');
});

// Backend API call to get the list of meetings
app.get('/meetings', async (req, res) => {
    console.log('response from /meetings API'); 
    const apiResponse  = await getMeetings();
    res.send(apiResponse)
    console.log('apiResponse', apiResponse);

});


// function to get list of meetings
async function getMeetings() {
    const url = 'https://webexapis.com/v1/meetings'
    const response = await fetch(url);
    console.log('response from getMeetings', response);
    return response;
    
}

// Backend API call to get a particular meeting
app.get('/meetings/:id', async (req, res) => {
    const apiResponse = await getAParticularMeeting(req.params.id);
    res.send(apiResponse);
});

// function to get a particular meeting
async function getAParticularMeeting(meetingId) {
    const url = `https://webexapis.com/v1/meetings?meetingNumber=${meetingId}`;
    const response = await fetch(url);
    console.log('response from getAParticularMeeting', response);
    return response;
}

// Backend API call to get trascript details of a particular meeting using meetingId
app.get('/trascripts/:meetingId', async (req, res) => {
    const apiResponse = await getTranscripts(req.params.meetingId);
    console.log('response from getTranscripts', apiResponse);
    res.send(apiResponse)
});

// function to get trascript details of a particular meeting
async function getTranscripts(meetingId) {
    const url = `https://webexapis.com/v1/meetingTranscripts?meetingId='${meetingId}`;
    const response = await fetch(url);
    console.log('response from getTranscripts', response);
    return response;
}

// Backend API to download trascript of a particular meeting using transcriptId.
app.get('/trascripts/:transcriptId', async (req, res) => {
    const apiResponse = await downloadTranscript(req.params.transcriptId);
    console.log('response from getTranscripts', apiResponse);
    res.send(apiResponse)
});

// function to download transcript of a particular meeting
async function downloadTranscript(transcriptId) {
    const url = `https://webexapis.com/v1/meetingTranscripts/${transcriptId}/download`;
    const response = await fetch(url);
    console.log('response from downloadTranscript', response);
    return response;
}


// function to create confluence page automatically
async function createCofluencePage() {
    const url = '';
    const response = await fetch(url);
    console.log('response from createCofluencePage', response);
    return response;
}

// function to create jira ticket automatically
async function createJiraTicket() {
    const url = '';
    const response = await fetch(url);
    console.log('response from createJiraTicket', response);
    return response;
}



