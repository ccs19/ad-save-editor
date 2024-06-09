import pako from 'pako';

const testSave = "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";
export const GameSaveSerializer = {
  serialize(save) {
    const json = JSON.stringify(save, this.jsonConverter);
    return this.encodeText(json, "savefile");
  },
  // eslint-disable-next-line no-unused-vars
  jsonConverter(key, value) {
    if (value === Infinity) {
      return "Infinity";
    }
    if (value instanceof Set) {
      return Array.from(value.keys());
    }
    return value;
  },
  deserialize(data) {
    if (typeof data !== "string") {
      return undefined;
    }
    const json = this.decodeText(data, "savefile");
    // eslint-disable-next-line no-unused-vars
    return JSON.parse(json, (k, v) => ((v === Infinity) ? "Infinity" : v));

  },
  // Define these now so we don't keep creating new ones, which vaguely seems bad.
  encoder: new TextEncoder(),
  decoder: new TextDecoder(),
  // These are magic strings that savefiles/automator scripts should start with.
  // Due to the way atob/btoa work, old saves (before the reality update and for
  // a significant part of its development) always started with eYJ even though
  // it wasn't explicitly added. If you want to make a mod of AD, you may want to
  // rename "savefile" to "modless savefile" or something and create a new
  // "savefile" or "mod savefile" property with a string like
  // "AntimatterDimensions[mod name]SavefileFormatAAA", so that people don't
  // confuse your saves with AD saves but can still import AD saves (this will
  // also require changing some other code slightly, particularly decode).
  startingString: {
    savefile: "AntimatterDimensionsSavefileFormat",
    "automator script": "AntimatterDimensionsAutomatorScriptFormat",
    "automator data": "AntimatterDimensionsAutomatorDataFormat",
    "glyph filter": "AntimatterDimensionsGlyphFilterFormat",
  },
  // The ending strings aren't as verbose so that we can save a little space.
  endingString: {
    savefile: "EndOfSavefile",
    "automator script": "EndOfAutomatorScript",
    "automator data": "EndOfAutomatorData",
    "glyph filter": "EndOfGlyphFilter",
  },
  // This should always be three characters long, and should ideally go AAA, AAB, AAC, etc.
  // so that we can do inequality tests on it to compare versions (though skipping a version
  // shouldn't be a problem).
  version: "AAB",
  // Steps are given in encoding order.
  // Export and cloud save use the same steps because the maximum ~15% saving
  // from having them be different seems not to be worth it.
  // It's important that `this` is what it should be in these function calls
  // (encoder/decoded for the first element, window for the fourth)
  // which is why we shouldn't do e.g. { encode: encoder.encode, decode: encoder.decode }
  // In the fifth element, order of operations is important: we don't want to encode 0s we added in encoding
  // (i.e. + -> 0b -> 0ab is undesired) or to accidentally decode 0ac -> 0c -> / (slash)
  // when encoding says (as it should) 0c -> 0ac.
  // These functions contain the code that does different things in different versions.
  // Right now we only have code for steps to only apply in certain versions; add a condition to the step.
  // It wouldn't be too hard to allow steps to depend on version though.
  steps: [
    // This step transforms saves into unsigned 8-bit arrays, as pako requires.
    {encode: x => GameSaveSerializer.encoder.encode(x), decode: x => GameSaveSerializer.decoder.decode(x)},
    // This step is  where the compression actually happens. The pako library works with unsigned 8-bit arrays.
    {encode: x => pako.deflate(x), decode: x => pako.inflate(x)},
    // This step converts from unsigned 8-bit arrays to strings with codepoints less than 256.
    // We need to do this outselves because GameSaveSerializer.decoder would give us unicode sometimes.
    {
      encode: x => Array.from(x).map(i => String.fromCharCode(i)).join(""),
      decode: x => Uint8Array.from(Array.from(x).map(i => i.charCodeAt(0)))
    },
    // This step makes the characters in saves printable. At this point in the process, all characters
    // will already have codepoints less than 256 (from the previous step), so emoji in the original save
    // won't break this.
    {encode: x => btoa(x), decode: x => atob(x)},
    // This step removes + and /, because if they occur, you can double-click on a save and get
    // everything up to the first + or /, which can be hard to debug. We also remove = (always trailing)
    // because btoa just ignores it. These regex have no potentially-unicode characters, I think,
    // and they're applied to strings with just ASCII anyway, but I'm adding u to make Codeacy happy.
    {
      encode: x => x.replace(/=+$/gu, "").replace(/0/gu, "0a").replace(/\+/gu, "0b").replace(/\//gu, "0c"),
      decode: x => x.replace(/0b/gu, "+").replace(/0c/gu, "/").replace(/0a/gu, "0")
    },
    {
      encode: (x, type) => x + GameSaveSerializer.endingString[type],
      decode: (x, type) => x.slice(0, x.length - GameSaveSerializer.endingString[type].length),
      condition: version => version >= "AAB"
    }
  ],
  getSteps(type, version) {
    // This is a version marker, as well as indicating to players that this is from AD
    // and whether it's a save or automator script. We can change the last 3 letters
    // of the string savefiles start with from AAA to something else,
    // if we want a new version of savefile encoding.
    return this.steps.filter(i => (!i.condition) || i.condition(version)).concat({
      encode: x => `${GameSaveSerializer.startingString[type] + GameSaveSerializer.version}${x}`,
      decode: x => x.slice(GameSaveSerializer.startingString[type].length + 3)
    });
  },
  // Apply each step's encode function in encoding order.
  encodeText(text, type) {
    return this.getSteps(type, this.version).reduce((x, step) => step.encode(x, type), text);
  },
  // Apply each step's decode function, in decoding order (which is the reverse
  // of encoding order). We only do this if we recognize the string which tells
  // us the save version. If we don't see it, we assume the save's old and just
  // use atob. If you're adding a new savefile version, make sure its length is
  // three characters and alter the encoding/decoding functions as is described
  // in the comment above the definition of steps. If you're making a mod, then
  // add another case to this conditional. Old saves (before the reality update
  // and for a significant part of its development) always started with eYJ and
  // old automator scripts (where this function is also used) are very unlikely
  // to start with our magic string because it is longer than a few characters.
  decodeText(text, type) {
    if (text.startsWith(this.startingString[type])) {
      const len = this.startingString[type].length;
      const version = text.slice(len, len + 3);
      return this.getSteps(type, version).reduceRight((x, step) => step.decode(x, type), text);
    }
    return atob(text);
  }
};
