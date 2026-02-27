
const ftp = require("basic-ftp")

async function findFolder(client, path, target) {
    try {
        await client.cd(path)
        const list = await client.list()
        for (const item of list) {
            const fullPath = (path === "/" ? "" : path) + "/" + item.name
            if (item.isDirectory) {
                if (item.name.toLowerCase().includes(target)) {
                    console.log(`FOUND: ${fullPath}`)
                }
                if (item.name !== "." && item.name !== "..") {
                    await findFolder(client, fullPath, target)
                    await client.cd(path)
                }
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
        console.log("Searching for folders containing 'html'...")
        await findFolder(client, "/", "html")
    } catch (err) {
        console.error(err)
    } finally {
        client.close()
    }
}
run()
