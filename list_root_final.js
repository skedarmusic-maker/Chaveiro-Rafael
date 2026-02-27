
const ftp = require("basic-ftp")

async function run() {
    const client = new ftp.Client()
    try {
        await client.access({
            host: "147.93.14.87",
            user: "u786839041.chaveirorafael",
            password: "1q2w3e4r@@@SK",
            secure: false
        })
        await client.cd("/")
        const list = await client.list()
        for (const i of list) {
            console.log(`ROOT: ${i.isDirectory ? 'D' : 'F'} - ${i.name}`)
        }
    } catch (err) {
        console.error(err)
    } finally {
        client.close()
    }
}
run()
