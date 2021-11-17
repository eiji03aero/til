// Values that should be shared across should basically be handled by css variables.
// Utilize this file as an escape hatch that css variables cannot support.

export const BreakPoints = {
  MobileMax: 768,
};

export const MediaQueries = {
  MobileAndBelow: `@media only screen and (max-width: ${BreakPoints.MobileMax}px)`,
};
