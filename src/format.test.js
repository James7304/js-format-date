/*
 * File: format.test.js
 * Project: js-format-date
 * File Created: Sunday, 1st October 2023 13:52:43 pm
 * Author: James McCorkindale (james@harlyy.com)
 * -----
 * Last Modified: Sunday, 1st October 2023 13:52:43 pm
 * Modified By: James McCorkindale (<jamesmccorkindale0@gmail.com>)
 * -----
 * Copyright 2023 James McCorkindale
 */

import format from "./format";

describe("format", () => {
    test("format different dates", () => {
        const date = new Date('2022-01-01T00:00:00.000Z');
        const t1 = format(date, "{day}, {MMM} {xd}{sx}, {yyyy}");
        const t2 = format(date, "{dd}/{MM}/{yyyy}");
        const t3 = format(date, "{hh}:{mm}:{ss}");
        const t4 = format(date, "{wmsx} week of {MMM} {yyyy}");
        const t5 = format(date, "{xs} seconds and {SSS} milliseconds");
        const t6 = format(date, "{invalid}");
        const t7 = format(date);

        expect(t1).toBe("Saturday, January 1st, 2022");
        expect(t2).toBe("01/01/2022");
        expect(t3).toBe("00:00:00");
        expect(t4).toBe("1st week of January 2022");
        expect(t5).toBe("0 seconds and 0 milliseconds");
        expect(t6).toBe("");
        expect(t7).toBe(1640995200000);
    });
});
