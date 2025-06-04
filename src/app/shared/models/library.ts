export type LibraryInfo = {
  Cells: {
    ChiefName: string;
    ChiefOrg: string;
    ChiefPosition: string;
    FullName: string;
    ObjectAddress: ObjectAddress[]
  },
  Number: number
};

type ObjectAddress = {
    Address: string
}
