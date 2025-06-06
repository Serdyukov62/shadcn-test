export type LibraryInfo = {
  Cells: {
    ChiefName: string;
    ChiefOrg: string;
    ChiefPosition: string;
    FullName: string;
    FullNameFragments?: TextFragment[];
    ObjectAddress: ObjectAddress[]
  },
  Number: number
};

type ObjectAddress = {
    Address: string
}

export type TextFragment = {
  text: string;
  isHighlighted: boolean;
}
