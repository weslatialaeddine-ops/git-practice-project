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

export function paginateSuppliers(
  suppliers: Supplier[],
  page: number,
  pageSize: number,
): Supplier[] {
  const startIndex = (page - 1) * pageSize;
  return suppliers.slice(startIndex, startIndex + pageSize);
}
