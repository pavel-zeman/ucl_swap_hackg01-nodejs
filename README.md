Simple chat application implemented using 2 technologies - long polling and server-sent events.

# Usage
Start the application as usual, log in and at the bottom of the welcome page:
* Choose the technology - long polling or server-sent events
* Click _Wait for data_ to start reading of chat data from server
* Enter message text and click _Send data_ to publish message to all users using the chat
* You should see chat messages being added to the list just below the buttons almost instantly after they are published

# Implementation
## Long polling
There is no magic here. The polling is implemented as a standard command (`polling/poll`), which is
being automatically invoked in an infinite cycle. The server-side implementation is in `PollingAbl`.

## Server-sent events (SSE)
Server-sent events are a little tricky on the server, because the default uuAppSserver implementation
closes connections immediately after processing ABL. This does not work for SSE, which requires
the connection to remain open. To solve this issue, there is a custom middleware - see `sse-response-handler.js`
(this part was implemented by Honza Rudolf, not me). 

Except for this, the implementation is pretty straightforward - see `SseAbl`.

