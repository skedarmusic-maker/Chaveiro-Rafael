
const ftp = require("basic-ftp")
const fs = require("fs")

async function walk(client, path, log) {
    try {
        await client.cd(path)
        const current = await client.pwd()
        log.push(`PATH: ${current}`)
        const items = await client.list()
        for (const item of items) {
            log.push(`  [${item.isDirectory ? 'D' : 'F'}] ${item.name}`)
            if (item.isDirectory && item.name !== "." && item.name !== "..") {
                await walk(client, `${current}/${item.name}`.replace('//', '/'), log)
                await client.cd(current)
            }
        }
    } catch (e) { }
}

async function run() {
    const client = new ftp.Client()
    const log = []
    try {
        await client.access({
            host: "147.93.14.87",
            user: "u786839041.chaveirorafael",
            password: "1q2w3e4r@@@SK",
            secure: false
        })
        await walk(client, "/", log)
        fs.writeFileSync("full_ftp_log.txt", log.join("\n"))
        console.log("Log written to full_ftp_log.txt")
    } catch (err) {
        console.error(err)
    } finally {
        client.close()
    }
}
run()
