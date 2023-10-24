# Vircadia Assets

Static files used by Vircadia Web.  

This repo is optimized to be used as a submodule.  
Here are some [handy instructions](https://gist.github.com/gitaarik/8735255) for working with Git submodules.


## Programmatic Access

Each directory contains an `index.ts` file listing the files and sub-directories within. This allows you to read the contents of any directory without using node-only modules like `fs`. For example, to check if the `/models/avatars` directory contains a given file:
```ts
import * as assets from "vircadia-assets";

console.log(assets.directories.models.directories.avatars.files.includes("awesome_avatar.glb"));
//      ^- true
```


## Adding New Directories

When adding a new directory to this repo, please give it an `index.ts` file using the following template:
```ts
export const directories = {} as const;

export const files = [] as const;

```

Then, in the parent directory, add a reference to the new index file you just created:
```ts
/*  the parent index.ts file  */

import * as audio from "./audio/index.js";
import * as images from "./images/index.js";
import * as new_directory from "./new directory/index.js";  // Import the directory's index.
import * as video from "./video/index.js";

export const directories = {
    audio,
    images,
    new_directory,        // Add the directory reference to the `directories` list.
    video
} as const;

...
```
*Note: The path to the directory's index file must end in `.js`, [despite it being a TypeScript file](https://stackoverflow.com/questions/75807785/why-do-i-need-to-include-js-extension-in-typescript-import-for-custom-module).*


## Adding New Files

When adding a new file to this repo, please make sure to include its name in the parent directory's index.  
For example, when adding `cat.png` to the `/images` directory:
```ts
/*  /images/index.ts  */

...

export const files = [
	"apple.jpg",
	"banana.png",
	"cat.png",        // Add the file name (with extension) to the `files` list.
	"mouse.webp"
] as const;
```
