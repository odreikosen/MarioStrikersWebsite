import React from 'react';
import {Routes, Route, MemoryRouter} from 'react-router-dom';
import {render, cleanup, waitFor} from '@testing-library/react';

import axiosMock from "axios";
import Club from "./club";

beforeEach(() => {
    window.scrollTo = jest.fn();
});

afterEach(() => {
    jest.resetAllMocks();
    cleanup();
});

test('A Club profile & roster is displayed', async () => {
    const url = "https://api.mariostrikers.gg/clubs/34/roster";
    axiosMock.get.mockResolvedValue({
        data: {
            "id": 34,
            "name": "DK's Domain",
            "tag": "DKD",
            "region": "",
            "joinConditions": "Invite Only",
            "owner": "375830344005320714",
            "logo": "https://cdn.discordapp.com/attachments/980999484639158303/980999761039605780/DKD_Logo.png",
            "isOpen": false,
            "discordServer": null,
            "roster": [{
                "id": 217,
                "name": "Pokeniner",
                "country": "us",
                "discordId": "437110798834335745",
                "switchFriendCodes": ["1885-1990-3597"],
                "rank": 22,
                "isOfficer": true
            }, {
                "id": 320,
                "name": "Grandpa Gamer 2",
                "country": null,
                "discordId": "902645191884800020",
                "switchFriendCodes": [],
                "rank": 4,
                "isOfficer": false
            }, {
                "id": 343,
                "name": "Edak82",
                "country": "us",
                "discordId": "375830344005320714",
                "switchFriendCodes": ["3160-2420-3845"],
                "rank": 0,
                "isOfficer": true
            }]
        }
    });

    const {getByText, getByTestId} = render(
        <MemoryRouter initialEntries={['/club/34']}>
            <Routes>
                <Route path="/club/:clubid" element={<Club />}/>
            </Routes>
        </MemoryRouter>);


    const resolvedClubTitleElem = await waitFor(() => getByTestId("club-title-and-joining-conditions"));
    const resolvedClubOwnerRow = await waitFor(() => getByText("Edak82").closest("tr"));
    const statusCellIndex = 4;

    expect((resolvedClubTitleElem).textContent).toBe("DK's Domain  Invite Only");
    expect((resolvedClubOwnerRow).children[statusCellIndex].textContent).toBe("owner");

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
});