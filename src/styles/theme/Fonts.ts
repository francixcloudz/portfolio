export enum FontFamily {
  FredokaOne = "FredokaOne",
  Nunito = "Nunito",
  NunitoItalic = "NunitoItalic",
  Cinzel = "Cinzel",
  LeagueGothic = "LeagueGothic",
}

enum FontWeightName {
  Regular = "Regular",
  Bold = "Bold",
  ExtraBold = "ExtraBold",
}

export const FontWeight = {
  [FontFamily.FredokaOne]: {
    [FontWeightName.Regular]: "400",
  },
  [FontFamily.Nunito]: {
    [FontWeightName.Regular]: "400",
    [FontWeightName.Bold]: "600",
    [FontWeightName.ExtraBold]: "800",
  },
  [FontFamily.NunitoItalic]: {
    [FontWeightName.Regular]: "400",
    [FontWeightName.Bold]: "600",
  },
  [FontFamily.Cinzel]: {
    [FontWeightName.Regular]: "400",
  },
  [FontFamily.LeagueGothic]: {
    [FontWeightName.Regular]: "400",
  },
};

export const FontVariants: Array<{
  fontName: string;
  variantName: string;
  variantWeight: string;
}> = Object.entries(FontWeight)
  .map(([fontName, variants]) =>
    Object.entries(variants).map(([fontWeightName, variantWeight]) => ({
      fontName,
      variantName: fontName + fontWeightName,
      variantWeight,
    })),
  )
  .flat();
