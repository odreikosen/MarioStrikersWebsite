import React from 'react';
import ReactDOM from 'react-dom';
import {act, render, fireEvent, cleanup, waitFor, within} from '@testing-library/react';

import { MSLRanking, trimEmptyRankings } from "./MSLRanking";

afterEach(cleanup);

describe("trimEmptyRankings", () => {
    it('removes empty rows and columns', async () => {
        const csvRankings = [{
            "Place": "1",
            "": "",
            "Player": "Chicago Noobz",
            "Points": "301",
            "SUMMER R1": "301",
            "SUMMER R2": "",
            "SUMMER R3": "",
            "SUMMER MAJOR": "",
            "FALL R1": "",
            "FALL R2": "",
            "FALL R3": "",
            "FALL MAJOR": ""
        }, {
            "Place": "2",
            "": "",
            "Player": "Chaos Edge EU 2",
            "Points": "250",
            "SUMMER R1": "250",
            "SUMMER R2": "",
            "SUMMER R3": "",
            "SUMMER MAJOR": "",
            "FALL R1": "",
            "FALL R2": "",
            "FALL R3": "",
            "FALL MAJOR": ""
        }, {
            "Place": "3",
            "": "",
            "Player": "",
            "Points": "",
            "SUMMER R1": "",
            "SUMMER R2": "",
            "SUMMER R3": "",
            "SUMMER MAJOR": "",
            "FALL R1": "",
            "FALL R2": "",
            "FALL R3": "",
            "FALL MAJOR": ""
        }, {
            "Place": "4",
            "": "",
            "Player": "",
            "Points": "",
            "SUMMER R1": "",
            "SUMMER R2": "",
            "SUMMER R3": "",
            "SUMMER MAJOR": "",
            "FALL R1": "",
            "FALL R2": "",
            "FALL R3": "",
            "FALL MAJOR": ""
        }];

        expect(trimEmptyRankings(csvRankings)).toStrictEqual(
            [{
                "Place": "1",
                "Player": "Chicago Noobz",
                "Points": "301",
                "SUMMER R1": "301",
                "SUMMER R2": "",
                "SUMMER R3": "",
                "SUMMER MAJOR": "",
                "FALL R1": "",
                "FALL R2": "",
                "FALL R3": "",
                "FALL MAJOR": ""
            }, {
                "Place": "2",
                "Player": "Chaos Edge EU 2",
                "Points": "250",
                "SUMMER R1": "250",
                "SUMMER R2": "",
                "SUMMER R3": "",
                "SUMMER MAJOR": "",
                "FALL R1": "",
                "FALL R2": "",
                "FALL R3": "",
                "FALL MAJOR": ""
            }]
        );
    });
});

describe("MSLRanking component", () => {

});

