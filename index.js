"use strict"

const { default: ow } = require("ow")
const isURL = require("is-url-superb")
const ky = require("ky-universal").create({
    throwHttpErrors: false,
    redirect: "manual",
})

module.exports = (url) => {
    ow(url, ow.string.is(isURL))

    const urls = []

    async function getRedirects(url) {
        const { status, headers } = await ky.head(url)
        const location = headers.get("location")
        if (/3\d\d/.test(status) && location) {
            urls.push(location)
            return getRedirects(location)
        }

        return urls
    }

    return getRedirects(url)
}
