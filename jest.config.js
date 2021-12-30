module.exports = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageProvider: "v8",
    collectCoverageFrom: [
        '<rootDir>/src/**/*.js'
    ],
    coverageReporters: [
        "text-summary",
        "lcov"
    ],
    testEnvironment: "node",
    testMatch: [
        "<rootDir>src/**/*.spec.js",
    ],
    modulePathIgnorePatterns: [
        "/node_modules/",
    ]
};
