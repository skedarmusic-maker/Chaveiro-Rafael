
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

        console.log("INITIAL PWD:", await client.pwd())

        await client.cd("/")
        console.log("AT /:", await client.pwd())
        try { await client.ensureDir("MARKER_ROOT"); console.log("Created MARKER_ROOT"); } catch (e) { }

        try {
            await client.cd("/public_html")
            console.log("AT /public_html:", await client.pwd())
            await client.ensureDir("MARKER_PUBLIC_HTML")
            console.log("Created MARKER_PUBLIC_HTML")
        } catch (e) {
            console.log("Failed to create marker in public_html")
        }

        console.log("\n--- RESULTING STRUCTURE ---")
        await client.cd("/")
        const root = await client.list()
        for (const item of root) {
            console.log(`/ - ${item.name}`)
            if (item.name === "public_html") {
                await client.cd("public_html")
                const inner = await client.list()
                inner.forEach(i => console.log(`  /public_html/${i.name}`))
                await client.cd("/")
            }
        }

        // CLEANUP markers
        try { await client.removeDir("/MARKER_ROOT") } catch (e) { }
        try { await client.removeDir("/public_html/MARKER_PUBLIC_HTML") } catch (e) { }

    } catch (err) {
        console.error(err)
    } finally {
        client.close()
    }
}
run()
