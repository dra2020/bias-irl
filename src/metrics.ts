// This alternate specifiation of the efficiency gap incorporates a winner's bonus (R) heuristic:
// when 1 <= R <= 2, bias is acceptable wrto the efficiency gap.
export function calcEfficiencyGapPrime(Vf: number, Sf: number, R: number | undefined): number | undefined
{
  let EG = undefined;

  if (R && ((R > 2) || (R < 1)))
    EG = (2.0 * (Vf - 0.5)) - (Sf - 0.5);

  return EG;
}