
const ftp = require("basic-ftp")

async function deepClean() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: "147.93.14.87",
            user: "u786839041.chaveirorafael",
            password: "1q2w3e4r@@@SK",
            secure: false
        })

        console.log("--- START DEEP CLEAN ---")

        // Ensure we are at the very top
        await client.cd("/")
        const root = await client.list()
        console.log("ROOT CONTENTS:")
        root.forEach(f => console.log(`${f.isDirectory ? 'DIR' : 'FILE'} - ${f.name}`))

        // 1. If we find 'public_html' at root, look inside it
        const pub = root.find(f => f.name === "public_html" && f.isDirectory)
        if (pub) {
            console.log("\nChecking inside /public_html...")
            await client.cd("/public_html")
            const inner = await client.list()
            inner.forEach(f => console.log(`  -> ${f.isDirectory ? 'DIR' : 'FILE'} - ${f.name}`))

            // Look for nested public_html or 'out'
            for (const item of inner) {
                if (item.isDirectory && (item.name === "public_html" || item.name === "out")) {
                    console.log(`\n!!! FOUND TRASH IN /public_html: ${item.name} !!!`)
                    console.log(`Deleting /public_html/${item.name}...`)
                    await client.removeDir(item.name) // Recursive delete
                    console.log("Deleted.")
                }
            }
        }

        // 2. Check for 'out' at root
        const outDir = root.find(f => f.name === "out" && f.isDirectory)
        if (outDir) {
            console.log("\n!!! FOUND 'out' FOLDER AT ROOT !!!")
            await client.cd("/")
            await client.removeDir("out")
            console.log("Deleted /out from root.")
        }

        // 3. Final Sync: Ensure /public_html is clean and has our NEW build
        console.log("\nRefreshing /public_html content...")
        await client.ensureDir("/public_html")
        await client.cd("/public_html")

        // List again to be sure
        const finalCheck = await client.list()
        const hasNestedAgain = finalCheck.find(f => f.name === "public_html" && f.isDirectory)
        if (hasNestedAgain) {
            console.log("NESTED FOLDER STILL EXISTS. FORCE REMOVING...")
            await client.removeDir("public_html")
        }

        console.log("Uploading fresh files to /public_html...")
        await client.uploadFromDir("out")

        console.log("\n--- FINAL VERIFICATION ---")
        await client.cd("/")
        const r2 = await client.list()
        r2.forEach(f => console.log(`ROOT: ${f.isDirectory ? 'D' : 'F'} ${f.name}`))

        await client.cd("/public_html")
        const p2 = await client.list()
        p2.forEach(f => console.log(`PUB: ${f.isDirectory ? 'D' : 'F'} ${f.name}`))

        console.log("--- CLEANUP SUCCESSFUL ---")

    } catch (err) {
        console.error("CRITICAL FTP ERROR:", err)
    } finally {
        client.close()
    }
}
deepClean()
