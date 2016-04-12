/*
    Explain basic security threads like: Cross Site Scripting (XSS),
    SQL Injection and whether something similar to SQL injection is possible with NoSQL databases like MongoDB,
    and DOS-attacks. Explain/demonstrate ways to cope with these problems
 */
// --------------------------------------------------------------------------------------------------------------
// Application Security - Understanding, Exploiting and Defending against Top Web Vulnerabilities
// video: https://www.youtube.com/watch?v=sY7pUJU8a7U
// --------------------------------------------------------------------------------------------------------------
/*
    >> Cross Site Scripting (XSS)

 XSS injection attacks occur when an attacker uses a web application
 to send malicious code, generally in the form of a browser side script, to a different end user.
 Flaws that allow these attacks to succeed are quite widespread and occur anywhere in a web application.

 An attacker can use XSS to send a malicious script to an unsuspecting user.
 The end user’s browser has no way to know that the script should not be trusted, and will execute the script.
 Because it thinks the script came from a trusted source, the malicious script can access any cookies,
 session tokens, or other sensitive information retained by the browser and used with that site.
 These scripts can even rewrite the content of the HTML page.

 The malicious content sent to the web browser often takes the form of a segment of JavaScript,
 but may also include HTML, Flash, or any other type of code that the browser may execute.
 The variety of attacks based on XSS is almost limitless, but they commonly include transmitting private data,
 like cookies or other session information, to the attacker, redirecting the victim to web content controlled
 by the attacker, or performing other malicious operations on the user's machine under the guise of the
 vulnerable site.

 */
/*
    >> SQL Injection

 A SQL injection attack consists of insertion or "injection" of a SQL query via the input data from the client
 to the application. A successful SQL injection exploit can read sensitive data from the database,
 modify database data (Insert/Update/Delete), execute administration operations on the database
 (such as shutdown the DBMS), recover the content of a given file present on the DBMS file system and in
 some cases issue commands to the operating system. SQL injection attacks are a type of injection attack,
 in which SQL commands are injected into data-plane input in order to effect the execution of
 predefined SQL commands.

 */
/*
    >> DOS-attack
 You send a lot of data to the server, and therefore overload the server, if you have a large server,
 you deny other users to access the server.
 */

/*
    Obviously MongoDB is not unhackable and there are some attacks that can be leveraged against this NoSQL db.
    Insecure Direct Object Reference, Client-Side Enforcement of Server Side Security, Server-Side JavaScript Injection.

 https://www.defcon.org/images/defcon-21/dc-21-presentations/Chow/DEFCON-21-Chow-Abusing-NoSQL-Databases.pdf

 */


/*
 https://www.owasp.org/index.php/Testing_for_NoSQL_injection
 http://2012.zeronights.org/includes/docs/Firstov%20-%20Attacking%20MongoDB.pdf
 http://blog.websecurify.com/2014/08/hacking-nodejs-and-mongodb.html
 */
