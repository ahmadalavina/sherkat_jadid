module.exports = status1 = {
    Create: () => { return { Status_code: 200, data: { res: true, status: "Created" } } },
    Ok: () => { return { Status_code: 200, data: { res: true, status: "deleted" } } },
    NotFound: () => { return { Status_code: 404, data: { res: false, status: "NotFound" } } },
    Forbidden: () => { return { Status_code: 403, data: { res: false, status: "Forbiden" } } },
    badRequest: () => { return { Status_code: 400, data: { res: false, status: "Bad Request" } } },
    unauthorized: () => { return { Status_code: 401, data: { res: false, status: "unauthorized" } } },
    Wronginput: () => { return { Status_code: 422, data: { res: false, status: "please enter all inputes" } } },
    Updated: () => { return { Status_code: 422, data: { res: false, status: "Updated" } } },


}