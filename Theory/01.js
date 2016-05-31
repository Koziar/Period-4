/*
    Explain basic security terms like authentication, authorization, confidentiality, integrity, SSL/TLS and provide examples of how you have used them.
 */
/*
    Authentication, is the process of identifying an individual in a system, usually by password and username.
    We have used Passport.js to help us with authentication in any system requiring a log in.
    This helps us check if the individual is who they claim to be.
 */

app.post('/login', passport.authenticate('local',
    {
        successRedirect: '/',
        failureRedirect: '/login'
    }));

/*
    Authorization is the process of giving an individual access to the system objects based on their identity.
    We have used passport.js to help with authorization when making a system requiring a log in and deciding what
    the user can see/use from the system.
 */

app.post('/login', passport.authenticate('local',
    {
        successRedirect: '/',
        failureRedirect: '/login'
    }));

app.get('/admin', user.is('admin'), function (req, res) {
    res.render('admin');
});
/*
    Confidentiality refers to protecting information from being accessed by unauthorized parties.
    Only authorized parties can see certain information. We have used confidentiality in systems that require
    authorization, as we only want to show private information to the user himself.
 */
/*
    Integrity means that the information on the system is authentic, meaning that it isn't maliciously altered
    and the source of the information is genuine. Integrity is used in all web systems we have developed.
    We do so by making the backend unalterable and unattainable unless properly authorized.
*/
/*
    SSL and TLS: TLS is a newer and safer security protocol based on public key cryptography, based on SSL.
    They are used to encrypt messages between servers and clients. We have used SSL or TLS when making web applications.
 */

