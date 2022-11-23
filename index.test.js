const squawk = require(".");
const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);

async function callCli(testString) {
  const { stdout } = await exec("./bin/squawk " + testString);
  return stdout;
}

describe("squawk", () => {
  describe("cli", () => {
    it("returns each character on its own line", async () => {
      let actual = await callCli("%%%");
      expect(actual).toBe("percent-sign\npercent-sign\npercent-sign\n");
    });

    it("replaces numbers with their word form", async () => {
      let actual = await callCli("24");
      expect(actual).toBe("two\nfour\n");
    });

    describe("letters", function () {
      it("replaces letters with their word form", async () => {
        let actual = await callCli("ac");
        expect(actual).toBe("alpha\ncharlie\n");
      });

      it("handles mixed case", async () => {
        let actual = await callCli("Ok");
        expect(actual).toBe("oscar\nkilo\n");
      });
    });

    it("handles numbers", async () => {
      let actual = await callCli("103");
      expect(actual).toBe("one\nzero\nthree\n");
    });

    describe("symbols", () => {
      it("handles symbols", async () => {
        let actual = await callCli("-–—");
        expect(actual).toBe("dash\ndash\ndash\n");
      });

      it("passes through unknown characters", async () => {
        let actual = await callCli("!$.");
        expect(actual).toBe("exclamation-point\n[$]\nperiod\n");
      });
    });

    it("handles a mix of all character types", async () => {
      let actual = await callCli("M5V-2T6");
      expect(actual).toBe("mike\nfive\nvictor\ndash\ntwo\ntango\nsix\n");
    });
  });

  describe("node", function () {
    it("returns each character on its own line", function () {
      let actual = squawk("%%%");
      expect(actual).toStrictEqual([
        "percent-sign",
        "percent-sign",
        "percent-sign",
      ]);
    });

    it("replaces numbers with their word form", function () {
      let actual = squawk("24");
      expect(actual).toStrictEqual(["two", "four"]);
    });

    describe("letters", function () {
      it("replaces letters with their word form", function () {
        let actual = squawk("ac");
        expect(actual).toStrictEqual(["alpha", "charlie"]);
      });

      it("handles mixed case", function () {
        let actual = squawk("Ok");
        expect(actual).toStrictEqual(["oscar", "kilo"]);
      });
    });

    it("handles numbers", async () => {
      let actual = squawk("103");
      expect(actual).toStrictEqual(["one", "zero", "three"]);
    });

    describe("symbols", () => {
      it("handles symbols", function () {
        let actual = squawk("-–—");
        expect(actual).toStrictEqual(["dash", "dash", "dash"]);
      });

      it("passes through unknown characters", async () => {
        let actual = squawk("!$.");
        expect(actual).toStrictEqual(["exclamation-point", "[$]", "period"]);
      });
    });

    it("handles a mix of all character types", function () {
      let actual = squawk("M5V-2T6");
      expect(actual).toStrictEqual([
        "mike",
        "five",
        "victor",
        "dash",
        "two",
        "tango",
        "six",
      ]);
    });
  });
});
