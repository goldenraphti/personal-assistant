exports.handler = async (event) => {
  const subject =
    event.queryStringParameters.name || "World loooser - you failed";

  const response = JSON.stringify({ subject: subject });

  return {
    statusCode: 200,
    body: response,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  };
};
