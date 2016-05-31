module.exports.jwtConfig = {
    secret: "ChangeMeToARealSecretOrIWillBeHacked",
    tokenExpirationTime: 60*20, // seconds
    audience: "yoursite.net",
    issuer: "yourcompany@somewhere.com"
};