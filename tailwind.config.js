module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js',
    './app/javascript/**/*.svelte'
  ],
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
    darkTheme: 'dark',
    logs: false
  }
}
