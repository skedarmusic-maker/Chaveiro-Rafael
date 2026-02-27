const ftp = require("basic-ftp");

async function deploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
        await client.access({
            host: "147.93.14.87",
            user: "u786839041.chaveiro24hribeiraopreto.com.br",
            password: "1q2w3e4r@@@SK",
            secure: false
        });

        console.log("CONNECTED TO SERVER.");
        console.log("Current PWD:", await client.pwd());

        await client.uploadFromDir("out");
        console.log("DEPLOYMENT COMPLETE.");

    } catch (err) {
        console.error("FTP Error:", err);
    } finally {
        client.close();
    }
}
deploy();
