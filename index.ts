import * as animations from "./animations/index.js";
import * as audio from "./audio/index.js";
import * as icons from "./icons/index.js";
import * as images from "./images/index.js";
import * as models from "./models/index.js";
import * as video from "./video/index.js";

export const directories = {
    animations,
    audio,
    icons,
    images,
    models,
    video
} as const;

export const files = [] as const;
