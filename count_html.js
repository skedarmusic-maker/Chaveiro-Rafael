
const ftp = require("basic-ftp")

async function countDir(client, path, target) {
    let count = 0
    try {
        await client.cd(path)
        const items = await client.list()
        for (const item of items) {
            if (item.isDirectory) {
                if (item.name === target) {
                    console.log(`FOUND_MATCH: ${(path === "/" ? "" : path)}/${item.name}`)
                    count++
                }
                if (item.name !== "." && item.name !== "..") {
                    count += await countDir(client, (path === "/" ? "" : path) + "/" + item.name, target)
                    await client.cd(path)
                }
            }
        }
    } catch (e) { }
    return count
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
        console.log("Counting 'public_html' folders...")
        const total = await countDir(client, "/", "public_html")
        console.log(`TOTAL_PUBLIC_HTML_FOUND: ${total}`)
    } catch (err) {
        console.error(err)
    } finally {
        client.close()
    }
}
run()
