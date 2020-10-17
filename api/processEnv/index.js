module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const responseMessage = JSON.stringify(process.env, null, 2);

    context.res = {
        body: responseMessage
    };
}