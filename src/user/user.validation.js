let checkEmpty = async (data) => {
    let resData = {
        status: false,
        message: ''
    }

    for (const key in data) {
        if (data[key] != null) {
            if (data[key] === '') {
                resData.status = true,
                resData.message = `${key} is Empty..`
                return resData
            }
        } else {
            resData.status = true,
                resData.message = `${key} is Empty..`
            return resData
        }
    }
    return resData
}
let validation = async (data) => {
    let res = {
        status: true,
        message: ''
    }
    try {

        let valid = await checkEmpty(data)
        if (valid.status) {
            res.status = false,
            res.message = valid.message
            return res
        }

    } catch (error) {
        console.log(error);
    }
    return res

}

module.exports = {
    validation,
}