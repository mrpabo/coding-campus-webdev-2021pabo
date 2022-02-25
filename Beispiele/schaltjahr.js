// Kommende Schaltjahre 2022-2200

/*  Ein Jahr ist ein Schaltjahr, wenn seine Jahreszahl durch 4 aber nicht durch 100 teilbar ist. 
    Ein Jahr ist ein Schaltjahr, wenn seine Jahreszahl durch 400 teilbar ist.

    2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056,
    2060, 2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092, 2096,
    2104, 2108, 2112, 2116, 2120, 2124, 2128, 2132, 2136, 2140,
    2144, 2148, 2152, 2156, 2160, 2164, 2168, 2172, 2176, 2180,
    2184, 2188, 2192, 2196, 2200 
*/

function leapYear() {
  for (let i = 2022; i <= 2200; i++) {
      if (isLeapYear(i)) {
          printLeapYear(i);
    }
  }
}

function isLeapYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
    
}

function printLeapYear(year) {
    document.write(year);
    document.write("<br />");
}