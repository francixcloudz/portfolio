enum FontFamily {
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

enum FontWeightNumber {
  Regular = "400",
  Bold = "600",
  ExtraBold = "800",
}

const fonts = {
  [FontFamily.FredokaOne]: {
    family: FontFamily.FredokaOne,
    weights: {
      [FontWeightName.Regular]: FontWeightNumber.Regular,
    },
  },
  [FontFamily.Nunito]: {
    family: FontFamily.Nunito,
    weights: {
      [FontWeightName.Regular]: FontWeightNumber.Regular,
      [FontWeightName.Bold]: FontWeightNumber.Bold,
      [FontWeightName.ExtraBold]: FontWeightNumber.ExtraBold,
    },
  },
  [FontFamily.NunitoItalic]: {
    family: FontFamily.NunitoItalic,
    weights: {
      [FontWeightName.Regular]: FontWeightNumber.Regular,
      [FontWeightName.Bold]: FontWeightNumber.Bold,
    },
  },
  [FontFamily.Cinzel]: {
    family: FontFamily.Cinzel,
    weights: {
      [FontWeightName.Regular]: FontWeightNumber.Regular,
    },
  },
  [FontFamily.LeagueGothic]: {
    family: FontFamily.LeagueGothic,
    weights: {
      [FontWeightName.Regular]: FontWeightNumber.Regular,
    },
  },
};

export default fonts;

export const AllFontsData: Array<{
  fontName: string;
  variantName: string;
  variantWeight: string;
}> = Object.entries(fonts)
  .map(([fontName, variants]) =>
    Object.entries(variants.weights).map(([fontWeightName, variantWeight]) => ({
      fontName,
      variantName: fontName + fontWeightName,
      variantWeight,
    })),
  )
  .flat();
