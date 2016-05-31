/*
 Explain and demonstrate a system using jwt's, focusing on both
 client and server side.
 */
/*

 A system using jwt’s work in a certain flow. Initially starting with
 the client inputting both their password and username leading to
 authentication and then authorization. Once authenticated the client
 is generated a token and the token is then stored client side. With
 every request made from the client the JWT is sent as well in the
 authorization header. Once the JWt is signature of the JWT is
 confirmed a response is created by the server.
 This code is placed in the route page. Once the user is authenticated
 a token is given to the user.
 */

app.post('/login', function (req, res, next) {
    passport.authenticate('local-login',
        function (err, user, info) {
            if (err) {
                return next(err)
            }
            if (!user) {
                return res.json(401, {error: 'message'});
            }
            var token = jwt.encode({username: user},
                "ThisIsATokenSecret");
            res.json({token: token});
        })(req, res, next);
});
