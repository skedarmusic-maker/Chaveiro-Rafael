
const ftp = require("basic-ftp")

async function scan(client, path) {
    try {
        await client.cd(path)
        const items = await client.list()
        for (const item of items) {
            const full = (path === "/" ? "" : path) + "/" + item.name
            console.log(`FULL_PATH: ${full} [${item.isDirectory ? 'DIR' : 'FILE'}]`)
            if (item.isDirectory && item.name !== "." && item.name !== "..") {
                await scan(client, full)
                await client.cd(path)
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
        console.log("LOGIN_PWD: " + await client.pwd())
        console.log("STARTING SCAN FROM /")
        await scan(client, "/")
    } catch (err) {
        console.error(err)
    } finally {
        client.close()
    }
}
run()
