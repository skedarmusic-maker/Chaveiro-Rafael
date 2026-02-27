const ftp = require("basic-ftp");

async function fixAndDeploy() {
    const client = new ftp.Client();
    client.ftp.verbose = true;
    try {
        await client.access({
            host: "147.93.14.87",
            user: "u786839041.chaveirorafael",
            password: "1q2w3e4r@@@SK",
            secure: false
        });

        console.log("Conectado ao root do site (jailed).");

        // Listar e remover tudo para garantir um deploy limpo
        const list = await client.list();
        for (const item of list) {
            if (item.isDirectory) {
                await client.removeDir(item.name);
                console.log("Removida pasta:", item.name);
            } else {
                await client.remove(item.name);
                console.log("Removido arquivo:", item.name);
            }
        }

        console.log("Servidor limpo. Iniciando upload do 'out' para a raiz...");
        await client.uploadFromDir("out");

        console.log("DEPLOY MANUAL FINALIZADO COM SUCESSO.");

    } catch (err) {
        console.error("FTP Error:", err);
    } finally {
        client.close();
    }
}
fixAndDeploy();
