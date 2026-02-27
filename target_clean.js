
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

        console.log("Checking /public_html/public_html...")
        try {
            await client.cd("/public_html/public_html")
            console.log("FOUND: /public_html/public_html exists!")
            const list = await client.list()
            list.forEach(i => console.log(`  -> ${i.name}`))

            console.log("DELETING IT NOW...")
            await client.cd("/public_html")
            await client.removeDir("public_html")
            console.log("DELETED.")
        } catch (e) {
            console.log("Not found: /public_html/public_html")
        }

        console.log("\nChecking /public.html...")
        try {
            await client.cd("/public.html")
            console.log("FOUND: /public.html exists!")
            await client.cd("/")
            await client.removeDir("public.html")
            console.log("DELETED.")
        } catch (e) {
            console.log("Not found: /public.html")
        }

    } catch (err) {
        console.error(err)
    } finally {
        client.close()
    }
}
run()
