
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

        const initialPwd = await client.pwd()
        console.log("LOGIN_PWD:", initialPwd)

        console.log("\n--- LISTING LOGIN DIRECTORY ---")
        const list = await client.list()
        for (const item of list) {
            console.log(`[${item.isDirectory ? 'DIR' : 'FILE'}] ${item.name}`)
        }

        try {
            console.log("\n--- ATTEMPTING TO GO UP (CD ..) ---")
            await client.cd("..")
            const upPwd = await client.pwd()
            console.log("UP_PWD:", upPwd)
            const listUp = await client.list()
            for (const item of listUp) {
                console.log(`[${item.isDirectory ? 'DIR' : 'FILE'}] ${item.name}`)
            }
        } catch (e) {
            console.log("Could not move up.")
        }

    } catch (err) {
        console.error(err)
    } finally {
        client.close()
    }
}
run()
