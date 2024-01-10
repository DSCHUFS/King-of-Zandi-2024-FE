import { atom } from "recoil";

export const tableState = atom({
    key: "tableState",
    default: true,
});

export const tabState = atom({
    key: "tabState",
    default: 0,
});

export const lastHomeUpdateDateState = atom({
    key: "lastHomeUpdateDateState",
    default: undefined,
});
