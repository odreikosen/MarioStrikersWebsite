import React from 'react';
import {render, cleanup} from '@testing-library/react';
import CountryFlag from "./country";

afterEach(cleanup);

describe("CountryFlag", () => {

    test("resolves a valid ISO alpha 2 code", () => {
        const { getByRole } = render(<CountryFlag country={" fr"}/>);
        expect(getByRole('img').title).toBe("France");
    });

    test("resolves a valid ISO alpha 3 code", () => {
        const { getByRole } = render(<CountryFlag country={" usa "}/>);
        expect(getByRole('img').title).toBe("United States of America");
    });

    test("resolves a valid country full name", () => {
        const { getByRole } = render(<CountryFlag country={"germany "}/>);
        expect(getByRole('img').title).toBe("Germany");
    });

    test("returns an empty div for unknown country", () => {
        const { container } = render(<CountryFlag country={"country that doesnt exist"}/>);
        expect(container.firstChild).toBeEmptyDOMElement();
    });

});
