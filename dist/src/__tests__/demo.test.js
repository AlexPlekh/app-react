import { jsx as _jsx } from "react/jsx-runtime";
import { render, renderHook, act } from "@testing-library/react";
import { Footer } from "../client/components/Footer";
import useCounter from "./testingHook";
import { describe, test } from "vitest";
describe("demo", () => {
    test("should be testable", ({ expect }) => {
        expect(1 + 1).toBe(2);
    });
    test("should be able to test component", ({ expect }) => {
        const { getByText } = render(_jsx(Footer, {}));
        expect(getByText("Repo")).toBeInTheDocument();
    });
    test("should be able to test hook", ({ expect }) => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(1);
    });
});
//# sourceMappingURL=demo.test.js.map