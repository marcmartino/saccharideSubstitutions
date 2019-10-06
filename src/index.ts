import { snd, thrd } from "./util";
import { calculateSubstitutionOptions } from "./equations";

const formatReturnList = (subs: subOption[], targetQty: number) => (
  namedOptions: string[],
  calcQty: number,
  i: number
): string[] => [
  ...namedOptions,
  `${subs[i][0]}: ${(calcQty * targetQty).toFixed(2)}`
];

const flattenList = <T>(subsList: T[], someSubs: T[]) => [
  ...subsList,
  ...someSubs
];

function SACCHARIDESUB(
  [[targetQty, targetPOD, targetPAC]]: [Triple<number, number, number>],
  ...substitutionOptions: subOption[][]
): string[] {
  const subs: subOption[] = substitutionOptions.reduce(flattenList, []);
  const calculatedOptions = calculateSubstitutionOptions(
    targetQty,
    [targetPOD, subs.map(snd)],
    [targetPAC, subs.map(thrd)]
  );
  return calculatedOptions
    ? calculatedOptions.reduce(formatReturnList(subs, targetQty), [])
    : ["No Substitutions Found"];
}
function SACCHARIDESUBQUARTER(
  [[targetQty, targetPOD, targetPAC]]: [Triple<number, number, number>],
  ...substitutionOptions: subOption[][]
): string[] {
  const subs: subOption[] = substitutionOptions.reduce(flattenList, []);
  const calculatedOptions = calculateSubstitutionOptions(
    targetQty,
    [targetPOD, subs.map(snd)],
    [targetPAC, subs.map(thrd)],
    0.25
  );
  return calculatedOptions
    ? calculatedOptions.reduce(formatReturnList(subs, targetQty), [])
    : ["No Substitutions Found"];
}
function SACCHARIDESUBTENTHS(
  [[targetQty, targetPOD, targetPAC]]: [Triple<number, number, number>],
  ...substitutionOptions: subOption[][]
): string[] {
  const subs: subOption[] = substitutionOptions.reduce(flattenList, []);
  const calculatedOptions = calculateSubstitutionOptions(
    targetQty,
    [targetPOD, subs.map(snd)],
    [targetPAC, subs.map(thrd)],
    0.1
  );
  return calculatedOptions
    ? calculatedOptions.reduce(formatReturnList(subs, targetQty), [])
    : ["No Substitutions Found"];
}

//@ts-ignore
window.SACCHARIDESUB = SACCHARIDESUB;
