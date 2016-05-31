/*
    Explain about password hashing, salts and the difference between bcrypt and
    older (not recommended) algorithms like sha1, md5 etc.
 */
//  https://crackstation.net/hashing-security.htm#salt
/*
 hash("hello") = 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
 hash("hbllo") = 58756879c05c68dfac9866712fad6a93f8146f337a69afe7dd238f3364946366
 hash("waltz") = c0e81794384491161f1777c232bc6bd9ec38f616560b120fda8e90f383853542

 Hash algorithms are one way functions. They turn any amount of data into a fixed-length "fingerprint"
 that cannot be reversed. They also have the property that if the input changes by even a tiny bit,
 the resulting hash is completely different (see the example above). This is great for protecting passwords,
 because we want to store passwords in a form that protects them even if the password file itself is compromised,
 but at the same time, we need to be able to verify that a user's password is correct.

 The general workflow for account registration and authentication in a hash-based account system is as follows:

 1. The user creates an account.
 2. Their password is hashed and stored in the database. At no point is the plain-text (unencrypted) password
    ever written to the hard drive.
 3. When the user attempts to login, the hash of the password they entered is checked against the hash
    of their real password (retrieved from the database).
 4. If the hashes match, the user is granted access. If not, the user is told they entered invalid login credentials.
 5. Steps 3 and 4 repeat everytime someone tries to login to their account.

 In step 4, never tell the user if it was the username or password they got wrong.
 Always display a generic message like "Invalid username or password." This prevents attackers from
 enumerating valid usernames without knowing their passwords.

 Adding Salt - super safe password protection

 hash("hello")                    = 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824
 hash("hello" + "QxLUF1bgIAdeQX") = 9e209040c863f84a31e719795b2577523954739fe5ed3b58a75cff2127075ed1
 hash("hello" + "bv5PehSMfV11Cd") = d1d3ec2e6f20fd420d50e2642992841d8338a314b8ea157c9e18477aaef226ab
 hash("hello" + "YYLmfY6IehjZMQ") = a49670c3c18b9e079b9cfaf51634f563dc8ae3070db2c4a8544305df1b60f007

 Lookup tables and rainbow tables only work because each password is hashed the exact same way.
 If two users have the same password, they'll have the same password hashes.
 We can prevent these attacks by randomizing each hash, so that when the same password is hashed twice,
 the hashes are not the same.

 We can randomize the hashes by appending or prepending a random string, called a salt, to the password
 before hashing. As shown in the example above, this makes the same password hash into a completely
 different string every time. To check if a password is correct, we need the salt, so it is usually stored in
 the user account database along with the hash, or as part of the hash string itself.

 The salt is a slow algorithm, which make it harder for the hackers to get your password,
 because making a spreadsheet with lots of salt each taking 2-3 minutes to generate would take lots of time.
 When you have to salt and hash the data, you use Bcrypt. The reason why you use this encryption module,
 is because it’s a slow algorithm. The other older algorithms are faster, and therefore the hackers
 can generate a spreadsheet faster with hashed values and passwords.

 */