const parseIpRequest = request => {
    const remoteAddressRegex =
        /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const originalRemoteAddress =
        request.headers["x-forwarded-for"] || request.connection.remoteAddress;
    const remoteAddress = remoteAddressRegex.test(originalRemoteAddress)
        ? originalRemoteAddress
        : "";

    return remoteAddress;
};

module.exports = parseIpRequest;
