
const ftp = require("basic-ftp")

async function rootTest() {
    const client = new ftp.Client()
    try {
        await client.access({
            host: "147.93.14.87",
            user: "u786839041.chaveirorafael",
            password: "1q2w3e4r@@@SK",
            secure: false
        })

        await client.cd("/")
        await client.uploadFromDir("out")
        console.log("Uploaded contents of 'out' to absolute root /")

    } catch (err) {
        console.error(err)
    } finally {
        client.close()
    }
}
rootTest()
