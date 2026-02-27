
const ftp = require("basic-ftp")

async function findIndexFiles(client, path) {
    let results = []
    try {
        await client.cd(path)
        const list = await client.list()
        for (const item of list) {
            const fullPath = (path === "/" ? "" : path) + "/" + item.name
            if (item.isDirectory) {
                // Avoid infinite recursion or systemic dirs
                if (item.name !== "." && item.name !== "..") {
                    results = results.concat(await findIndexFiles(client, fullPath))
                }
            } else if (item.name === "index.html") {
                results.push(fullPath)
            }
        }
    } catch (e) {
        // console.log(`Skipping ${path}: ${e.message}`)
    }
    return results
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

        console.log("Searching for all index.html files...")
        const indexFiles = await findIndexFiles(client, "/")
        console.log("\nFOUND INDEX FILES:")
        indexFiles.forEach(f => console.log(f))

        // Also list directories at root one more time very clearly
        await client.cd("/")
        const root = await client.list()
        console.log("\nROOT DIRECTORIES:")
        root.forEach(f => console.log(`${f.isDirectory ? '[DIR]' : '[FILE]'} ${f.name}`))

    } catch (err) {
        console.error(err)
    } finally {
        client.close()
    }
}
run()
