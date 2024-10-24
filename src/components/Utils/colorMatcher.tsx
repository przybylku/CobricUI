/**
 * @param {string} color - A string that can be a color name or a hex color.
 * @returns {string} - Returns a color based on tailwind standards. if arg have # it will return ['color'], but if it is a color name it will return "color"
 * @author Cobric / Przybylku
 */

export const ColorMatcher = async (color: string): Promise<string> => {
  return color.includes("#") ? `[${color}]` : color;
};
