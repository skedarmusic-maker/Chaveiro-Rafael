
const ftp = require("basic-ftp")

async function hostDeploy() {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: "ftp.chaveiro24hribeiraopreto.com.br",
            user: "u786839041.chaveirorafael",
            password: "1q2w3e4r@@@SK",
            secure: false
        })

        console.log("CONNECTED TO THE HOSTNAME SERVER.")
        console.log("Current PWD:", await client.pwd())

        await client.cd("/")
        const list = await client.list()
        const hasPub = list.find(i => i.name === "public_html" && i.isDirectory)

        if (hasPub) {
            await client.cd("public_html")
            console.log("Entered public_html. Uploading...")
            await client.uploadFromDir("out")
        } else {
            console.log("No public_html found. Uploading to root...")
            await client.uploadFromDir("out")
        }

    } catch (err) {
        console.error(err)
    } finally {
        client.close()
    }
}
hostDeploy()
