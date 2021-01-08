# React Resume

This repository contains a Single Page Web Application created using TypeScript + React with styled-components, which produces my resume for printing. Since the primary motivation for this project is for the resume to look good printed, it may not look best on all displays. That being said, the best way to use the application produced by this repo is through a webkit based browser (eg.- Chrome, Brave, Edge).

Webkit based browsers allow for a blur effect on some panels (unfortunately, this is currently not supported in print), and are able to print the background images and color gradients without requiring the users to change the browser settings at their end.

## How to Use

Create the following files relative to the base of the project folder:

- src/shared/data/education.json
- src/shared/data/personal.json
- src/shared/data/projects.json
- src/shared/data/skills.json
- src/shared/data/workExperience.json

Populate the files with data conforming to the following structures:

### education.json

`[ { "qualification": "", "year": "", "institution": "", "accreditingBody": "", "score": "" } ]`

### personal.json

`{ "name": "", "profile": "", "phone": "", "email": "", "linkedIn": "", "image": "" }`

### projects.json

`[ { "heading": "", "technologies": [""], "description": "", "repository": "" } ]`

The `repository` field is optional

### skills.json

`{ "technologies": [""], "languages": [""] }`

### workExperience.json

`[ { "heading": "", "at": "<organization>", "as": "<role>", "technologies": [""], "description": "" } ]`

Finally, run `npm start`.

Please note that the formatting is tweaked to suit my data files, and print my data in a single page, so your mileage may vary.
