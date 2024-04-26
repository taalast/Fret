import { Container as TContainer } from "../api/container/Container";

export const CONTAINER_TITLE_FIELD = "id";

export const ContainerTitle = (record: TContainer): string => {
  return record.id?.toString() || String(record.id);
};
