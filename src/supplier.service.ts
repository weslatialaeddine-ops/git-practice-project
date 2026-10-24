export interface Supplier {
  id: number;
  name: string;
  active: boolean;
}

export function getSuppliers(suppliers: Supplier[]): Supplier[] {
  return suppliers;
}
