module.exports = {
    parser: false,
    plugins: {
        'postcss-import': {},
        'postcss-custom-media': {},
        'postcss-custom-properties': {},
        'postcss-url': { url: 'rebase' },
        'postcss-normalize': {},
        autoprefixer: {}
    },
};