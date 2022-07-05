import React from 'react';
import ReactDOM from 'react-dom';
import {act, render, fireEvent, cleanup, waitFor, within} from '@testing-library/react';

import axiosMock from "axios";
import Ranking from "./ranking";

afterEach(cleanup);

test('A list of MSBL Players, ordered by ranking, is displayed', async () => {
    const gametype = 3;
    const url = `https://api.mariostrikers.gg/ratings?gametype=${gametype}`;
    axiosMock.get.mockResolvedValue({
        data: [{
                "rating": "1518",
                "name": "Agent A",
                "rank": "legend",
                "numWins": 24,
                "numLosses": 5,
                "numDraws": 0
            },
            {
                "rating": "976",
                "name": "Jimray3",
                "rank": "professional",
                "numWins": 16,
                "numLosses": 24,
                "numDraws": 0
            },
            {
                "rating": "1202",
                "name": "xAlex",
                "rank": "superstar",
                "numWins": 16,
                "numLosses": 13,
                "numDraws": 0
            }
        ]
    });

    const {getByText, getByTestId, rerender} = render(<Ranking gametype={gametype}/>);

    expect(getByText(/Rankings for/i).textContent).toBe("Rankings for Mario Strikers: Battle League")

    const resolvedPlayer01Elem = await waitFor(() => getByTestId("player-name-0"));
    const resolvedPlayer01RankIcon = within(await waitFor(() => getByTestId("player-rank-icon-0")));
    const resolvedPlayer02Elem = await waitFor(() => getByTestId("player-name-1"));
    const resolvedPlayer03Elem = await waitFor(() => getByTestId("player-name-2"));

    expect((resolvedPlayer01Elem).textContent).toBe("Agent A");
    expect((resolvedPlayer01RankIcon).getByRole('img').src).toContain("rank_legend.png");
    expect((resolvedPlayer02Elem).textContent).toBe("xAlex");
    expect((resolvedPlayer03Elem).textContent).toBe("Jimray3");

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
});