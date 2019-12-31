import test from "ava"
import getRedirects from "."

test("main", async (t) => {
    t.deepEqual(await getRedirects("http://google.com"), ["http://www.google.com/"])
})
