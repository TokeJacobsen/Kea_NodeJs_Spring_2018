const main = require("../main.js");

const chai = require("chai");
const assert = chai.assert;

describe("Make a human", () => {
    it("should make a functional human", () => {
        const testHuman = main.makeAHuman();
        assert.equal(testHuman.canUseTools, true);
        assert.deepEqual(testHuman.bodyParts, ["head", "torso", "arms", "legs"]);
    });
});

describe("Study for exam", () => {
    it("shouldn't stress you out too much", () => {
        const studyForExam = main.studyForExam();
        assert.notEqual(studyForExam, "Worry a lot and study to memorize short-term but then forget afterwards.");
    });
});