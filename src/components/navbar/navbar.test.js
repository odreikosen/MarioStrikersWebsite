import {getBaseUrl} from './navbar';

describe('getBaseUrl', () => {
    let location;
    const mockLocation = new URL("https://mariostrikers.gg");

    beforeEach(() => {
        location = window.location;
        mockLocation.replace = jest.fn();
        delete window.location;
        window.location = mockLocation;
    });

    afterEach(() => {
        window.location = location;
    });

    test("removes fragments, query", () => {
        mockLocation.href = "https://mariostrikers.gg/#sms-rules?code=123";
        expect(getBaseUrl()).toBe("https://mariostrikers.gg");
    });

    test("preserves port and removes any trailing '/'", () => {
        mockLocation.href = "https://mariostrikers.gg:8080/";
        expect(getBaseUrl()).toBe("https://mariostrikers.gg:8080");
    });
});


