const ftp = require("basic-ftp");

async function deployToRoot() {
    const client = new ftp.Client();
    client.ftp.verbose = false;
    try {
        await client.access({
            host: "147.93.14.87",
            user: "u786839041.chaveirorafael",
            password: "1q2w3e4r@@@SK",
            secure: false
        });

        console.log("CONNECTED TO SERVER.");

        // Ensure we are in the root Directory
        await client.cd("/");
        console.log("Current PWD:", await client.pwd());

        // Just to be safe, we can clear the old /public_html directory to avoid confusion
        try {
            await client.removeDir("/public_html");
        } catch (e) {
            // ignore if not possible or empty
        }

        console.log("Uploading files to root (/)...");
        await client.uploadFromDir("out");

        console.log("Upload completed!");

    } catch (err) {
        console.error("FTP Error:", err);
    } finally {
        client.close();
    }
}
deployToRoot();
