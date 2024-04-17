const nameRedacter = (str) => {
    return str.replace(/\b[A-Z]+\b/g, (match) => {
        if (match !== "I" && match !== "A") {
            return "REDACTED";
        }
        return match;
    });
};

console.log(nameRedacter("My name is ITZEL."))
console.log(nameRedacter("Today is MAYA's first day, ZO will help her out."))