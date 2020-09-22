

enum Role {ADMIN, READ_ONLY, AUTHOR }

const person = {
    role : Role.AUTHOR
}


function addAndHandle (n1: number, n2: number, cb: (num: number) => void) {
    let result = n1+n2
    cb(result)
}
addAndHandle(3,8,(res)=>{console.log(res)})