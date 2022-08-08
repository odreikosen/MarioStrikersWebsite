import React from 'react';
import ReactDOM from 'react-dom';
import {act, render, fireEvent, cleanup, waitFor, within} from '@testing-library/react';

import { MSLRanking, trimToValidRankingsOnly } from "./MSLRanking";

afterEach(cleanup);

describe("trimToValidRankingsOnly", () => {
    it('removes empty rows and keeps white-listed columns only', async () => {
        const csvRankings = [{
            "Place": "1",
            "": "",
            "Player": "Agent A",
            "Points": "390",
            "SUMMER R1": "140",
            "SUMMER R2": "250",
            "SUMMER R3": "",
            "SUMMER MAJOR": "",
            "Summer Split": "390",
            "FALL R1": "",
            "FALL R2": "",
            "FALL R3": "",
            "FALL MAJOR": "",
            "Fall Split": "",
            "FALL 2 R1": "",
            "FALL 2 R2": "",
            "FALL 2 R3": "",
            "FALL 2 MAJOR": "",
            "Fall Split 2": ""
        }, {
            "Place": "2",
            "": "",
            "Player": "HQdaan",
            "Points": "361",
            "SUMMER R1": "301",
            "SUMMER R2": "60",
            "SUMMER R3": "",
            "SUMMER MAJOR": "",
            "Summer Split": "361",
            "FALL R1": "",
            "FALL R2": "",
            "FALL R3": "",
            "FALL MAJOR": "",
            "Fall Split": "",
            "FALL 2 R1": "",
            "FALL 2 R2": "",
            "FALL 2 R3": "",
            "FALL 2 MAJOR": "",
            "Fall Split 2": ""
        }, {
            "Place": "3",
            "": "",
            "Player": "Fierryy",
            "Points": "361",
            "SUMMER R1": "250",
            "SUMMER R2": "111",
            "SUMMER R3": "",
            "SUMMER MAJOR": "",
            "Summer Split": "361",
            "FALL R1": "",
            "FALL R2": "",
            "FALL R3": "",
            "FALL MAJOR": "",
            "Fall Split": "",
            "FALL 2 R1": "",
            "FALL 2 R2": "",
            "FALL 2 R3": "",
            "FALL 2 MAJOR": "",
            "Fall Split 2": ""
        }, {
            "Place": "4",
            "": "",
            "Player": "",
            "Points": "",
            "SUMMER R1": "",
            "SUMMER R2": "",
            "SUMMER R3": "",
            "SUMMER MAJOR": "",
            "Summer Split": "",
            "FALL R1": "",
            "FALL R2": "",
            "FALL R3": "",
            "FALL MAJOR": "",
            "Fall Split": "",
            "FALL 2 R1": "",
            "FALL 2 R2": "",
            "FALL 2 R3": "",
            "FALL 2 MAJOR": "",
            "Fall Split 2": ""
        }];

        expect(trimToValidRankingsOnly(csvRankings)).toStrictEqual(
            [{
                "Place": "1",
                "Player": "Agent A",
                "Points": "390",
                "Summer Split": "390",
                "Fall Split": "",
                "Fall Split 2": ""
            }, {
                "Place": "2",
                "Player": "HQdaan",
                "Points": "361",
                "Summer Split": "361",
                "Fall Split": "",
                "Fall Split 2": ""
            }, {
                "Place": "",
                "Player": "Fierryy",
                "Points": "361",
                "Summer Split": "361",
                "Fall Split": "",
                "Fall Split 2": ""
            }]
        );
    });
});

describe("MSLRanking component", () => {
    // TODO: figure out a way to mock out Papa.parse()
});

