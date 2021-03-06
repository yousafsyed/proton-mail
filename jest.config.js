module.exports = {
    setupFilesAfterEnv: ['./jest.setup.js'],
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    transformIgnorePatterns: ['node_modules/(?!(proton-shared)/)'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': 'react-components/__mocks__/fileMock.js',
        '\\.(css|scss|less)$': 'react-components/__mocks__/styleMock.js',
        pmcrypto: 'react-components/__mocks__/pmcrypto.js',
        'sieve.js': 'react-components/__mocks__/sieve.js'
    }
};
