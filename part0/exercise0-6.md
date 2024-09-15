    sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTTP status code 201
    deactivate server

    Note right of browser: The POST request to the address new_note_spa contains new note as JSON with both content of the note and the timestamp
    Note right of server : code 201 means created. the server does not ask for a redirect, the browser stays on the same page.
