import React from 'react';
import ReactDOM from 'react-dom';
import {act, render, fireEvent, cleanup, waitFor} from '@testing-library/react';

import axiosMock from "axios";
import Clubs from "./clubs";

afterEach(cleanup);

test('The List of Clubs is displayed', async () => {
    const url = "https://api.mariostrikers.gg/clubs?with_member_count=true";
    axiosMock.get.mockResolvedValue({
        data: [{
            "id": 3,
            "name": "Gold Leaf Galaxy",
            "tag": "GLG",
            "region": "NA",
            "joinConditions": "Open to Anyone",
            "logo": "https://cdn.discordapp.com/attachments/941347506258858004/978015853788413972/Gold_Leaf_Galaxy_Logo-3.jpg",
            "isOpen": true,
            "discordServer": "https://discord.gg/gryxPuNHAT",
            "memberCount": 8
        }, {
            "id": 4,
            "name": "Real🌟MSCloud",
            "tag": "RL☆",
            "region": "EU",
            "joinConditions": "Invite Only",
            "logo": null,
            "isOpen": false,
            "discordServer": null,
            "memberCount": 8
        }]
    });

    const {getByText, getByTestId, rerender} = render(<Clubs/>);

    const resolvedTitle01Elem = await waitFor(() => getByTestId("club-name-0"));
    const resolvedTitle02Elem = await waitFor(() => getByTestId("club-name-1"));

    expect((resolvedTitle01Elem).textContent).toBe("Gold Leaf Galaxy");
    expect((resolvedTitle02Elem).textContent).toBe("Real🌟MSCloud");

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
});