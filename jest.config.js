module.exports = {
    preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
    moduleNameMapper: {
        "^@config/(.*)$": "<rootDir>/config/$1",
        "^@images/(.*)$": "<rootDir>/src/images/$1",
        "^@modules/(.*)$": "<rootDir>/src/modules/$1",
        "^@routes/(.*)$": "<rootDir>/src/routes/$1",
        "^@server/(.*)$": "<rootDir>/src/server/$1",
        "^@scss/(.*)$": "<rootDir>/src/scss/$1",
        "^@static/(.*)$": "<rootDir>/static/$1",
        "^@tests/(.*)$": "<rootDir>/tests/$1"
    }
};
