<!-- @file Project Page -->
# Orange Starter

> Custom theme by Acro Media Inc.

This custom theme uses the Orange Framework as a base theme.

### SASS
- Configured to compile using Gulp.
- Compile to CSS by running the following commands:
  - `npm install`
  - `gulp`
- The CSS will be compiled to: `css/style.css`

## Starting Your New Custom Theme

This theme is meant to be copied and renamed to become your custom theme for your project. Follow the steps below to live a happy life. #blessed

- Copy/rename this theme folder into `/web/themes/custom/your_custom_theme_name`.
- Remove the `.git` folder and `composer.json` file from your theme.
- Rename the core theme filenames replacing `orange_starter` with the name of your new theme. List of core files below:
  - `orange_starter.breakpoints.yml`
  - `orange_starter.info.yml`
  - `orange_starter.libraries.yml`
  - `orange_starter.theme`
  - `config/schema/orange_starter.schema.yml`
- Within your theme folder, find and replace the string `orange_starter` with your new theme name within all the files. This will change all the hook references, libraries etc. I would avoid manually sifting through the files as you'll likely miss something within one of the templates.
- Make sure to update the `Orange Starter` label/name strings within `config/schema/orange_starter.schema` and `orange_starter.info.yml` as well.
- Update the `screenshot.png` and `favicon.ico` files to match your new theme.
- Update the color and font variables within `sass/custom/_variables.scss` to quickly adjust the theme to be more geared towards your project. Chat with a Creative department resource if you need help choosing appropriate choices.
- Update the `README.md` with project specific details, and remove this `Starting Your New Custom Theme` section.
- If you run into any issues, just call my name cause I'll hear you scream.
- Master, master!
