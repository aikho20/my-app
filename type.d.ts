interface ElectionResults {
  cities: { [key: string]: CandidateResult[] };
  provinces: { [key: string]: CandidateResult[] };
  regions: { [key: string]: CandidateResult[] };
  groupIsland: { [key: string]: CandidateResult[] };
  country: CandidateResult[];
}

interface CandidateResult {
  candidate: string;
  votes: number;
}
