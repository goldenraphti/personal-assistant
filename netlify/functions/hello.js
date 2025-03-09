exports.handler = async (event) => {
  const subject =
    event.queryStringParameters.name || "World loooser - you failed";
  return {
    statusCode: 200,
    body: `Hello ${subject}!`,
  };
};
