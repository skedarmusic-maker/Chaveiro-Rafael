
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
        await client.cd("/")
        const list = await client.list()
        console.log(`CURRENT_PWD: "${await client.pwd()}"`)
        for (const item of list) {
            console.log(`ITEM: "${item.name}" [${item.isDirectory ? 'DIR' : 'FILE'}]`)
        }

        // Also check one level up if possible
        try {
            await client.cd("..")
            console.log(`\nPARENT_PWD: "${await client.pwd()}"`)
            const list2 = await client.list()
            for (const item of list2) {
                console.log(`PARENT_ITEM: "${item.name}" [${item.isDirectory ? 'DIR' : 'FILE'}]`)
            }
        } catch (e) {
            console.log("Cannot go higher than /")
        }

    } catch (err) {
        console.error(err)
    } finally {
        client.close()
    }
}
run()
