# Notepad

A lightweight, vanilla JavaScript blog-style website with a built-in content editor. Material design without any CSS framework dependency.

## Features

- **Pure JavaScript**: No frameworks, no dependencies (except CKEditor for rich text editing)
- **Material Design**: Beautiful UI inspired by Material Design principles
- **Content Editor**: Full-featured editor (`editor.html`) for managing blog articles
- **JSON-based Storage**: All content stored in `json/content.json`
- **Tiny Footprint**: Minimal codebase, fast loading
- **File System Access**: Direct file writing support in modern browsers

## Project Structure

```
notepad/
├── index.html          # Main blog page
├── editor.html         # Content editor interface
├── json/
│   ├── content.example.json  # Example content file (rename to content.json)
│   ├── content.json          # Article data storage (gitignored)
│   └── .gitignore            # Ignores content.json
├── css/
│   └── style.css      # Stylesheet
├── js/
│   ├── scripts.js     # Main blog functionality
│   └── ckeditor.js    # Rich text editor
├── img/               # Images and assets
└── README.md          # This file
```

## Setup

Before using the blog, you need to set up the content file:

1. Navigate to the `json/` directory
2. Rename `content.example.json` to `content.json`
3. The `content.json` file is gitignored, so your content won't be committed to version control

## Usage

### Viewing the Blog

Simply open `index.html` in a web browser. The blog will automatically load articles from `json/content.json`.

### Editing Content

1. Open `editor.html` in your browser
2. Click "Load Article" to edit an existing article, or "New Article" to create one
3. Fill in the article details:
   - **Title**: Article title
   - **Date**: Use the date selector (Day, Month, Year) or enter manually
   - **Image URL**: Optional image URL
   - **Text**: Rich text content using the CKEditor
4. Click "Save Article" to update the data in memory
5. Click "Save to File" to overwrite `json/content.json` directly

#### Date Selector

The editor includes a convenient date selector with:
- **Day dropdown**: 1-31
- **Month dropdown**: January through December
- **Year dropdown**: Years from 50 years ago to 10 years in the future

The date is automatically formatted as "Day Month, Year" (e.g., "1 October, 2021") when all fields are selected.

#### File Saving

- **Modern Browsers (Chrome, Edge)**: Use "Save to File" to directly overwrite the JSON file. On first use, you'll be prompted to select `json/content.json`. The browser will remember your selection.
- **Other Browsers**: Use "Download JSON (Fallback)" to download the updated file, then manually replace `json/content.json`.

## Article Format

Articles are stored in `json/content.json` with the following structure:

```json
{
  "articles": [
    {
      "id": 1,
      "title": "Article Title",
      "date": "1 October, 2021",
      "image": "https://example.com/image.png",
      "text": "<p>Article content in HTML format</p>"
    }
  ]
}
```

## Credits & Sources

This project uses resources and inspiration from:

- **Material Design**: [CodePen - Material Design](https://codepen.io/petrospe/pen/YPwoBKW)
- **CSS Color Design**: [SchemeColor - Light Web Design](https://www.schemecolor.com/light-webdesign.php)
- **Navigation Menu**: [CSS-Tricks - Dropdown Menus](https://css-tricks.com/solved-with-css-dropdown-menus/)
- **JavaScript String Manipulation**:
  - [Display first X characters](https://nkhilv.medium.com/display-only-the-first-x-characters-of-a-string-using-javascript-b0dbe93efbd)
  - [Display first 20 words](https://stackoverflow.com/questions/68064790/how-to-display-first-20-words-on-screen-then-next-20-words-through-javascript)

## License

See [license.md](license.md) for details.

## Browser Support

- **Modern Browsers**: Chrome, Edge, Firefox, Safari
- **File System Access API**: Chrome 86+, Edge 86+ (for direct file writing)
- **Fallback**: All modern browsers support file download

## Development

This is a static website - no server-side code required. Simply serve the files through any web server or open directly in a browser (note: some features may require a local server due to CORS restrictions).

---

Designed by Petros Petropoulos
