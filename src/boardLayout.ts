import { FixedArray } from "./array";

interface StyledLabel {
  label: string;
  style: object;
}

export type LabelValue = string | StyledLabel;

export function isStyledLabel(val: LabelValue): val is StyledLabel {
  return (val as any).style !== undefined;
}

export type KeyLabel = null | LabelValue | LabelValue[];

export interface BoardHalf {
  pinky: FixedArray<KeyLabel, 3>;
  ring: FixedArray<KeyLabel, 3>;
  middle: FixedArray<KeyLabel, 3>;
  index: FixedArray<KeyLabel, 3>;
  indexOuter: FixedArray<KeyLabel, 3>;
  thumb: FixedArray<KeyLabel, 3>;
}

export interface BoardLayer {
  left: BoardHalf;
  right: BoardHalf;
}

export enum Layer {
  colemak = "COLEMAK",
  nav = "NAV",
  num = "NUM",
  sym = "SYM",
  fun = "FUN",
  win = "WIN",
  uni = "UNI",
}

export const colemakLayer: BoardLayer = {
  left: {
    // pinkyOuter: [],
    pinky: ["q", ["a", "CTRL"], "z"],
    ring: ["w",["r", "ALT"],"x",],
    middle: ["f",["s", "CMD"],"c",],
    index: ["p",["t", "SHFT"],"d",],
    indexOuter: ["b","g","v"],
    thumb: [
      ["ESC", Layer.win],
      ["SPACE", Layer.nav,],
      ["TAB", Layer.uni],
    ],
  },
  right: {
    indexOuter: ["j", "m","k"],
    index: ["l", ["n", "SHFT"], "h"],
    middle: ["u", ["e", "CMD"], ","],
    ring: [
      "y",
      ["i", "ALT"],".",
    ],
    pinky: ["'",["o","CTRL"],"/"],
    thumb: [
      ["ENTER", Layer.sym],
      ["BKSP", Layer.num],
      ["DEL", Layer.fun],
    ],
  },
};


export const qwertyLayer: BoardLayer = {
  left: {
    // pinkyOuter: [],
    pinky: ["q", ["a", "CTRL"], "z"],
    ring: ["w",["r", "ALT"],"x",],
    middle: ["f",["s", "CMD"],"c",],
    index: ["p",["t", "SHFT"],"d",],
    indexOuter: ["b","g","v"],
    thumb: [
      ["ESC", Layer.win],
      ["SPACE", Layer.nav,],
      ["TAB", Layer.uni],
    ],
  },
  right: {
    indexOuter: ["j", "m","k"],
    index: ["l", ["n", "SHFT"], "h"],
    middle: ["u", ["e", "CMD"], ","],
    ring: [
      "y",
      ["i", "ALT"],".",
    ],
    pinky: ["'",["o","CTRL"],"/"],
    thumb: [
      ["ENTER", Layer.sym],
      ["BKSP", Layer.num],
      ["DEL", Layer.fun],
    ],
  },
};

// left thumb layers
export const navLayer: BoardLayer = {
  left: {
    pinky: [null, "UNDO", "ALT"],
    ring: [null, "CUT", "CTRL"],
    middle: [null, "COPY", "SHFT"],
    index: [null, "PASTE", "WIN"],
    indexOuter: [null, "REDO", ""],
    thumb: [null, null, null],
  },
  right: {
    indexOuter: ["☰", "🔍", ""],
    index: ["HOME", "⯇", "SEL WRD"],
    middle: ["Pg↓", "⯆", "SEL LINE"],
    ring: ["Pg↑", "▲", null],
    pinky: ["END", "⯈", "CAPS LOCK"],
    thumb: ["S(ENTER)", "⇾", "⇾ WRD"],
  },
};

export const winLayer: BoardLayer = {
  left: {
    pinky: [null, "", ""],
    ring: [null, "", ""],
    middle: [null, "", ""],
    index: [null, "", ""],
    indexOuter: [null, "🖮", ""],
    thumb: [null, null, null],
  },
  right: {
    indexOuter: ["", "🗗",""],
    index: ["", "", ""],
    middle: ["", "", ""],
    ring: ["", "", null],
    pinky: ["", "", ""],
    thumb: ["", "", ""],
  },
};

function getShiftedEmojiKey(emoji: string, shiftedEmoji: string): KeyLabel {
  const getEmojiLabel: (e: string) => LabelValue = (e: string) => ({
    label: e,
    style: { filter: null, fontSize: "20px" },
  });
  return [getEmojiLabel(shiftedEmoji), getEmojiLabel(emoji)];
}

export const uniLayer: BoardLayer = {
  left: {
    pinky: [null, "Á", "ALT"],
    ring: [null, "Ř", "CTRL"],
    middle: [null, "Š", "SHFT"],
    index: [null, "Ž", "WIN"],
    indexOuter: [null, null, null],
    thumb: [null, null, null],
  },
  right: {
    indexOuter: ["Ú", "Č" , ""],
    index: ["Ů", "Ě", getShiftedEmojiKey("😘", "🥰")],
    middle: ["Ď", "É", "SHFT"],
    ring: ["Ň", "Í", getShiftedEmojiKey("🤢", "🤮")],
    pinky: ["Ť", "Ý", getShiftedEmojiKey("🤨", "👍")],
    thumb: [
      getShiftedEmojiKey("😭", "🙁"),
      getShiftedEmojiKey("😅", "😁"),
      getShiftedEmojiKey("😂", "🙂"),
    ],
  },
};

// right thumb layers
export const numLayer: BoardLayer = {
  left: {
    pinky: ["<", "0", "ALT"],
    ring: ["7", "1", ["4", "CTRL"]],
    middle: ["8", "2", "5"],
    index: ["9", "3", "6"],
    indexOuter: [">", "!", ""],
    thumb: [".", "=", ","],
  },
  right: {
    indexOuter: [null, null, ""],
    index: [null, "+", "WIN"],
    middle: [null, "-", "SHFT"],
    ring: [null, "*", "CTRL"],
    pinky: [null, "/", "ALT"],
    thumb: [null, null, null],
  },
};

export const symLayer: BoardLayer = {
  left: {
    pinky: ["%", "Q", null],
    ring: ["^", "X", "@"],
    middle: ["'", '"', "`"],
    index: [["$", "€"], "&", "#"],
    indexOuter: ["~", "\\", ""],
    thumb: ["]", ":", "}"],
  },
  right: {
    indexOuter: [null, null, ""],
    index: [null, "[", "WIN"],
    middle: [null, "{", "SHFT"],
    ring: [null, "_", "CTRL"],
    pinky: [null, ";", "ALT"],
    thumb: [null, null, null],
  },
};

export const funLayer: BoardLayer = {
  left: {
    pinky: ["F9", "F5", "F1"],
    ring: ["F10", "F6", "F2"],
    middle: ["F11", "F7", "F3"],
    index: ["F12", "F8", "F4"],
    indexOuter: ["SCR↑", "SCR↓", ""],
    thumb: ["🐭CNST0", "🐭 LEFT", "🐭RIGHT"],
  },
  right: {
    indexOuter: [null, null, ""],
    index: [null, "🐭⯇", "WIN"],
    middle: [null, "🐭⯆", "SHFT"],
    ring: [null, "🐭▲", "CTRL"],
    pinky: [null, "🐭⯈", "ALT"],
    thumb: [null, null, null],
  },
};
