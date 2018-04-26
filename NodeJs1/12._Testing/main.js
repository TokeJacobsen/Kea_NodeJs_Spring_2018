exports.makeAHuman = function() {
    const humanPrototype = {
        "name": undefined,
        "canUseTools": true,
        "bodyParts": ["head", "torso", "arms", "legs"]
    }
    return humanPrototype;
}

exports.studyForExam = function() {
    return "Opportunity to learn and remember after the course.";
}