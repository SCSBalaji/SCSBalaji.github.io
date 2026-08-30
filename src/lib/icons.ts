/**
 * The whole icon set, inline. Hand-drawn on a 24×24 grid with a consistent
 * stroke so nothing looks borrowed from three different libraries.
 *
 * Deliberately no brand logos: profile tiles use mono lettermarks instead
 * (see Profiles.astro), which keeps that section visually consistent and avoids
 * an icon dependency.
 */

export const ICONS = {
  'arrow-up-right': '<path d="M7 17 17 7M9.5 7H17v7.5"/>',
  'arrow-right': '<path d="M4 12h14M12.5 6.5 18 12l-5.5 5.5"/>',
  'arrow-left': '<path d="M20 12H6M11.5 6.5 6 12l5.5 5.5"/>',
  'arrow-down': '<path d="M12 4.5v14M6.5 12.5 12 18l5.5-5.5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2.2M12 19.8V22M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2 12h2.2M19.8 12H22M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/>',
  moon: '<path d="M20.8 13.4A8.6 8.6 0 1 1 10.9 3.2a6.7 6.7 0 0 0 9.9 10.2Z"/>',
  menu: '<path d="M3.5 7h17M3.5 12h17M3.5 17h17"/>',
  close: '<path d="M5.5 5.5l13 13M18.5 5.5l-13 13"/>',
  check: '<path d="M4.5 12.5 9 17 19.5 6.5"/>',
  alert:
    '<path d="M10.3 4 2.6 17.3A2 2 0 0 0 4.3 20.3h15.4a2 2 0 0 0 1.7-3L13.7 4a2 2 0 0 0-3.4 0Z"/><path d="M12 9.5v4M12 16.6v.4"/>',
  spinner: '<path d="M12 3a9 9 0 1 0 9 9"/>',
  mail: '<rect x="3" y="5.25" width="18" height="13.5" rx="1.75"/><path d="m3.8 6.6 8.2 6 8.2-6"/>',
  download: '<path d="M12 3.5v11M7.6 10.4 12 14.8l4.4-4.4M4 19.5h16"/>',
  copy: '<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M6.5 15H5.5A2 2 0 0 1 3.5 13V5.5a2 2 0 0 1 2-2H13a2 2 0 0 1 2 2v1"/>',
  pin: '<path d="M12 21s6.5-6.1 6.5-10.5a6.5 6.5 0 1 0-13 0C5.5 14.9 12 21 12 21Z"/><circle cx="12" cy="10.4" r="2.3"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.4V12l3.2 2"/>',
} as const;

export type IconName = keyof typeof ICONS;
