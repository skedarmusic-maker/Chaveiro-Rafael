
const ftp = require("basic-ftp")

async function listTree(client, path, depth) {
    if (depth > 2) return
    try {
        await client.cd(path)
        const current = await client.pwd()
        console.log(`PATH: ${current}`)
        const list = await client.list()
        for (const item of list) {
            console.log(`  ${item.isDirectory ? 'DIR ' : 'FILE'} ${item.name}`)
            if (item.isDirectory && item.name !== "." && item.name !== "..") {
                await listTree(client, `${current}/${item.name}`.replace('//', '/'), depth + 1)
                await client.cd(current) // Go back
            }
        }
    } catch (e) { }
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
        await listTree(client, "/", 0)
    } catch (err) {
        console.error(err)
    } finally {
        client.close()
    }
}
run()
