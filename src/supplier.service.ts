export interface Supplier {
  id: number;
  name: string;
  active: boolean;
}

export function getSuppliers(
  suppliers: Supplier[],
  searchTerm: string = "",
): Supplier[] {
  return suppliers.filter((supplier) =>
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
}
