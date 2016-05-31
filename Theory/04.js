/*
    Explain and demonstrate ways to protect user passwords on our backends, and why this is necessary.
 */
/*
    Passwords are the gateway to access personal information from a system.
    If the password is leaked or discovered by a third party they will have access to all the personal information
    stored on that system. Thus, the need for password encryption. Even if a third party is able to access
    the database in which all passwords are stored, the third party will still not know the password
    as encryption only works one way. Password to encryption, not encryption to password.
    We are able to encrypt passwords using algorithms. Specifically we have used tools such as bcrypt or PBKDF2,
    with these tools we also add salt. Which is further used to protect encrypted data.
 */

UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) return next(err);

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err);

                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});