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

=== Starting Your Project Theme ===

After you install Drupal you can start your project theme by copying the Orange Starter theme from: <code>\web\themes\contrib\orange_starter</code>

You can use Orange Starter as a starting point to your theme. You'll want to copy the 'orange_starter' theme folder into <code>\web\themes\custom</code> and rename the folder to match your project.

'''IMPORTANT''' - Go into the copied theme and delete the following files BEFORE committing the theme to Git. <pre>
.git (directory)
.composer.json
</pre> If you fail to do this before committing, you can fix it by: - move the folder out of the project, commit - move it back in with those files removed, commit

Next, you'll also want to rename the following files, replacing 'orange_starter' with your new theme name, so they relate to your project theme and not the Orange Starter:

<pre>
# Open the file and change the Orange Starter text inside.
config\schema\orange_starter.schema.yml

# Open the file and change the Orange Starter text inside.
orange_starter.breakpoints.yml

# Open the file and change the Orange Starter text inside. Leave 'base theme: orange_framework' intact as the Orange Framework theme should always be the base theme.
orange_starter.info.yml

orange_starter.libraries.yml

# Open the file and change the 'orange_starter' text inside.
orange_starter.theme
</pre>

You can then enable your new theme through Drupal and disable the "Orange Starter" theme.

See the below structure for an example of a copy of the Orange Starter theme, customized for the 'Content Hub' project theme:

<pre>
\web\themes\custom\example_theme\config\schema\example_theme.schema.yml
\web\themes\custom\example_theme\example_theme.breakpoints.yml
\web\themes\custom\example_theme\example_theme.info.yml
\web\themes\custom\example_theme\example_theme.libraries.yml
\web\themes\custom\example_theme\example_theme.theme
</pre>
