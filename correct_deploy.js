
const ftp = require("basic-ftp")

async function correctDeploy() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        // USING THE CORRECT IP RESOLVED BY DNS
        await client.access({
            host: "77.37.42.219",
            user: "u786839041.chaveirorafael",
            password: "1q2w3e4r@@@SK",
            secure: false
        })

        console.log("CONNECTED TO CORRECT SERVER.")
        console.log("Current PWD:", await client.pwd())

        // Strictly follow: Go to root, enter public_html
        await client.cd("/")
        const root = await client.list()
        root.forEach(i => console.log(`ROOT: ${i.name}`))

        await client.cd("public_html")
        console.log("Entered public_html. Uploading content...")

        await client.uploadFromDir("out")
        console.log("DEPLOYMENT COMPLETE ON CORRECT SERVER.")

    } catch (err) {
        console.error("FTP Error:", err)
    } finally {
        client.close()
    }
}
correctDeploy()
