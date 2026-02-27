
const ftp = require("basic-ftp")

async function forceClean() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: "147.93.14.87",
            user: "u786839041.chaveirorafael",
            password: "1q2w3e4r@@@SK",
            secure: false
        })

        console.log("--- FORCE CLEAN START ---")

        // 1. Enter the suspected nested folder directly
        try {
            await client.cd("/public_html/public_html")
            console.log("SUCCESSFULLY ENTERED NESTED DIRECTORY: /public_html/public_html")

            // Clear it recursively
            await client.clearWorkingDir()
            console.log("Cleared contents of /public_html/public_html")

            // Move up and delete
            await client.cd("/public_html")
            await client.removeDir("public_html")
            console.log("Deleted /public_html/public_html folder.")
        } catch (e) {
            console.log("Target /public_html/public_html NOT FOUND or already deleted.")
        }

        // 2. Clear any local accidental folders like 'out' or 'dist' in public_html
        await client.cd("/public_html")
        const list = await client.list()
        for (const i of list) {
            if (i.isDirectory && (i.name === "out" || i.name === "dist" || i.name === "html")) {
                console.log(`FOUND JUNK: /public_html/${i.name}. Deleting...`)
                await client.removeDir(i.name)
            }
        }

        // 3. Final Deployment: Upload to /public_html
        console.log("\nStarting fresh upload to /public_html...")
        await client.cd("/public_html")
        await client.uploadFromDir("out")

        console.log("DONE.")

    } catch (err) {
        console.error("FTP Error:", err)
    } finally {
        client.close()
    }
}
forceClean()
