
const ftp = require("basic-ftp")

async function mapPath(client, path) {
    console.log(`\nCHECKING: ${path}`)
    try {
        await client.cd(path)
        const absolute = await client.pwd()
        console.log(`ABSOLUTE PWD: ${absolute}`)
        const list = await client.list()
        for (const item of list) {
            console.log(`[${item.isDirectory ? 'DIR' : 'FILE'}] ${absolute === '/' ? '' : absolute}/${item.name}`)
        }
        for (const item of list) {
            if (item.isDirectory && item.name !== "." && item.name !== "..") {
                await mapPath(client, `${absolute === '/' ? '' : absolute}/${item.name}`)
            }
        }
    } catch (e) {
        // console.log(`Error at ${path}: ${e.message}`)
    }
}

async function run() {
    const client = new ftp.Client()
    try {
        await client.access({
            host: "147.93.14.87",
            user: "u786839041.chaveirorafael",
            password: "1q2w3e4r@@@SK",
            secure: false
        })
        await mapPath(client, "/")
    } catch (err) {
        console.error(err)
    } finally {
        client.close()
    }
}
run()
