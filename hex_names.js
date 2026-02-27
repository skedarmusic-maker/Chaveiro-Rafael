
const ftp = require("basic-ftp")

function toHex(str) {
    return Buffer.from(str).toString('hex')
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

        await client.cd("/")
        console.log("--- ROOT ---")
        const root = await client.list()
        for (const i of root) {
            console.log(`[${i.isDirectory ? 'D' : 'F'}] Name: "${i.name}" Hex: ${toHex(i.name)}`)
            if (i.isDirectory) {
                await client.cd(i.name)
                const inner = await client.list()
                for (const j of inner) {
                    if (j.isDirectory) {
                        console.log(`  [D] Name: "${j.name}" Hex: ${toHex(j.name)}`)
                    }
                }
                await client.cd("/")
            }
        }

    } catch (err) {
        console.error(err)
    } finally {
        client.close()
    }
}
run()
