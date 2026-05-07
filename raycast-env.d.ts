/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `blackr` command */
  export type Blackr = ExtensionPreferences & {
  /** Cleaning Duration - How long Blackr should stay active before exiting automatically, in seconds. */
  "durationSeconds": string
}
}

declare namespace Arguments {
  /** Arguments passed to the `blackr` command */
  export type Blackr = {}
}

