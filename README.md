# SVG to HTML

svg-to-html is a small package that will take SVG files and 'convert' them to HTML files. This comes in espeically handy when using the SVGs inside of a desanitized Angular component that allows you to inject this code as an inline SVG. svg-to-html recursively crawls the file system including child folders and will convert _every_ `.svg` to a `.html` file. The code inside of the file will be preserved as only the file extension is changed. This allows for large batch renames of SVG files to HTML files, even if the folder structure has nested files.

## How to use svg-to-html

1. The first step is to install svg-to-html. This package is intended to be installed globally.
    ```bash
    # to install the package globally
    npm i -g svg-to-html
    ```

2. Once the package is installed navigate to the directory that contains the assets you want to convert. _NOTE:_ *If you have SVG files you do not want converted to SVG it is advised that you move them outside of this directory. ALL SVG files in this directory will be converted.*
    ```bash
    # run the command to convert your files
    svg2html
    ```

3. Use your HTML templates wherever you need 😎
