import React from 'react';
import NavBar from './navbar';
import {getBaseUrl} from "./navbar";
import {render, fireEvent, cleanup} from '@testing-library/react';

afterEach(cleanup);

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

describe("the Login with Discord button", () => {
    test("No Discord User Account in localStorage displays a Login button", () => {
        const { getByText } = render(<NavBar />);
        expect(getByText(/login/i).textContent).toBe("Login with Discord");
    });

    test("A Discord User Account in localStorage displays the user name and avatar", () => {
        jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue(
            JSON.stringify({ "id": "890951031947677708", "username": "owl", "avatar": "f0a4dba012635d0c1b77aa481d248ddf", "discriminator": "0609"})
        );
        const { getByText } = render(<NavBar />);
        expect(getByText(/owl/i).textContent).toBe("owl#0609");
    });

});
