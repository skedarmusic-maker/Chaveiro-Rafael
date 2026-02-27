
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
        console.log("TOTAL_ROOT_ITEMS:" + list.length)
        for (const item of list) {
            console.log(`ITEM: ${item.isDirectory ? 'DIR' : 'FILE'} - ${item.name}`)
        }
    } catch (err) {
        console.error(err)
    } finally {
        client.close()
    }
}
run()
