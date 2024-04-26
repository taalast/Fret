import { RawMaterial as TRawMaterial } from "../api/rawMaterial/RawMaterial";

export const RAWMATERIAL_TITLE_FIELD = "id";

export const RawMaterialTitle = (record: TRawMaterial): string => {
  return record.id?.toString() || String(record.id);
};
