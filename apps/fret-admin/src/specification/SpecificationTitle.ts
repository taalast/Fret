import { Specification as TSpecification } from "../api/specification/Specification";

export const SPECIFICATION_TITLE_FIELD = "id";

export const SpecificationTitle = (record: TSpecification): string => {
  return record.id?.toString() || String(record.id);
};
