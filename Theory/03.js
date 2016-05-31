/*
    Explain, at a fundamental level, the technologies involved, and the steps required initialize a SSL connection
 between a browser and a server and how to use SSL in a secure way.
*/
/*
 SSL (Secure Sockets Layer) is the standard security technology for establishing an encrypted link between a
 web server and a browser. This link ensures that all data passed between the web server and browsers remain
 private and integral. SSL is an industry standard
 To be able to create a SSL connection a web server requires an SSL Certificate.
 How it works?
 When a Web browser tries to connect to a website using SSL, the browser will first request the web server
 identify itself. This prompts the web server to send the browser a copy of the SSL Certificate. The browser
 checks to see if the SSL Certificate is trusted --  if the SSL Certificate is trusted, then the browser
 sends a message to the Web server. The server then responds to the browser with a digitally signed
 acknowledgement to start an SSL encrypted session. This allows encrypted data to be shared between
 the browser and the server. You may notice that your browsing session now starts with https (and not http).
 */