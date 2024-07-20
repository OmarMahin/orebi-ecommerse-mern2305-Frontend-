const emailValidation = (email) => {
    const Regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!email.match(Regex)){
        return false
    }
    else{
        return true
    }
}

export default emailValidation