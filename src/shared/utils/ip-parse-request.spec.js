const IpParseRequest = require("./ip-parse-request");

describe("IpParseRequest", () => {
    it("should return string empty if is ip invalid", () => {
        const request = {
            headers: {
                "x-forwarded-for": "::1",
            },
            connection: {
                remoteAddress: "::1",
            },
        };

        const remoteAddress = IpParseRequest(request);

        expect(remoteAddress).toEqual("");
    });

    it("should return ip address if is ip valid", () => {
        const request = {
            headers: {
                "x-forwarded-for": "172.12.93.1",
            },
            connection: {
                remoteAddress: "172.12.93.1",
            },
        };

        const remoteAddress = IpParseRequest(request);

        expect(remoteAddress).toEqual("172.12.93.1");
    });
});
