function pluralizer() {
  // document.write("pluralize start");
  printpluralizeNoun("cat");
  printpluralizeNoun("dog");
  printpluralizeNoun("truss");
  printpluralizeNoun("marsh");
  printpluralizeNoun("lunch");
  printpluralizeNoun("tax");
  printpluralizeNoun("blitz");
  printpluralizeNoun("city");
  printpluralizeNoun("puppy");
  printpluralizeNoun("boy");
  printpluralizeNoun("ray");
}

/**
 * Returns the plural of a regular noun.
 * @param {*} regularNoun a regular singular noun.
 * @returns the plural of a regular noun.
 */

function pluralizeRegularNoun(regularNoun) {
  //es-rule
  if (
    regularNoun.endsWith("s") ||
    regularNoun.endsWith("ss") ||
    regularNoun.endsWith("sh") ||
    regularNoun.endsWith("ch") ||
    regularNoun.endsWith("x") ||
    regularNoun.endsWith("z")
  ) {
    return regularNoun + "es";
  }

  //y-rule
  if (
    regularNoun.endsWith("y") &&
    !(
      regularNoun.endsWith("ay") ||
      regularNoun.endsWith("ey") ||
      regularNoun.endsWith("iy") ||
      regularNoun.endsWith("oy") ||
      regularNoun.endsWith("uy")
    )
  ) {
    return regularNoun.slice(0, -1) + "ies";
  }

  //standart-rule
  return regularNoun + "s";
}

function printpluralizeNoun(regularNoun) {
  document.write(regularNoun + " --> " + pluralizeRegularNoun(regularNoun));
  document.write("<br/>");
}
