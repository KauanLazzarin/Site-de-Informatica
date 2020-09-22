module.exports = async function registerClient (db, {clientData}) {
    return await db.run(`
        INSERT INTO client_data (
            name,
            logradouro,
            email,
            telefone,
            service
        ) VALUES (
            "${clientData.user_name}",
            "${clientData.user_adress}",
            "${clientData.user_email}",
            "${clientData.user_tel_number}",
            "${clientData.service_select}"
        );
    `)
}