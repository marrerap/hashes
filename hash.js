const bcrypt = require('bcrypt');


// how to create a hash
const password = "mysecr3tpassw0rd"
bcrypt.hash(password, 10)
    .then((hash) => {
        console.log(hash)
    })


// checking if hash is the same as original
const hash = "$2b$10$qqaEq.mXdgu1.D9x1JUQF.PDEyJ6vIUDv07EthFaTXD/tz6rXDrOq"
bcrypt.compare(password, hash)
    .then((result) => {
        console.log(result? "password correct" : "password incorrect")
    })