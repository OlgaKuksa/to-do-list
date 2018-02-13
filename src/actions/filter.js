export const ON_FILTER_UPDATE = "ON_FILTER_UPDATE";

export const onFilterUpdate = changes => ({
    type: ON_FILTER_UPDATE,
    payload: changes
  });
  