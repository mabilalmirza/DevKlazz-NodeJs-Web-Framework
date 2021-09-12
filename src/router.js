import path from "path/posix"

export default {

    "/users": {
        get: function (data) {
            const users = [
                {
                    "name": "Bilal"
                }
            ]
            return {
                status: 200,
                payload: users,
                headers: {
                    from: 'users'
                }
            }
        },
        post: function (data) {
            return {
                status: 201
            }
        }
    },
    "/products": {
        get: function (req, res) {
            return {
                payload: [],
            }
        }
    }
}

