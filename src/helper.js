/** Union over lapping items
 * @param  {[{startPx: number, endPx: number}]} items - The list of items to union overlapping
 * @return {[{startPx: number, endPx: number}]} The list of unionized items
 */
export const unionOverLappingItems = (items) => {
  if (items.length < 2) {
    return items;
  }
  const isOverLapping = (target, source) => {
    if (!source || !target) {
      return false;
    }

    // will be overlapping when the endPx of this item is between startPx and endPx of the other
    const isOverLapping =
      (source.startPx <= target.endPx && source.endPx >= target.endPx) ||
      (target.startPx <= source.endPx && target.endPx >= source.endPx);
    return isOverLapping;
  };

  const unionItems = (
    target = { startPx: 0, endPx: 0 },
    source = { startPx: 0, endPx: 0 }
  ) => {
    return {
      startPx: Math.min(target.startPx, source.startPx),
      endPx: Math.max(target.endPx, source.endPx),
    };
  };

  //Sort items with its startPx ascending
  //In sorted items when items[i] not overlapping with items[i-1] so the items[i+n] wont overlapping with items[i-1]
  //When we check isOverLapping of item in items we just need to check it with the previous item
  const sortedItems = items.sort((a, b) => a.startPx - b.startPx);

  //reduce the result and return it with init result = [] (can consider result like a stack)
  //For each item check isOverLapping with the lastItem/topItem of result
  //If true => union item with lastItem/topItem of result
  //else => push item to result array
  const result = sortedItems.reduce((array, currentItem) => {
    const lastIndex = array.length - 1;
    const prevItem = array[lastIndex];
    if (isOverLapping(prevItem, currentItem)) {
      return array.map((item, index) =>
        index === lastIndex ? unionItems(prevItem, currentItem) : item
      );
    }
    return [...array, currentItem];
  }, []);

  return result;
};
/** Create action types object
 * @param  {string} actionName - The prefix name of type
 * @param  {[string]} extraField - The list of additional postfix type
 * @return {{NAME: string, PENDING: string, SUCCESS: string, ERROR: string }}
 */
export const actionCreator = (actionName = "", extraField = []) => {
  const actionType = {
    NAME: actionName,
    PENDING: `${actionName}_PENDING`,
    SUCCESS: `${actionName}_SUCCESS`,
    ERROR: `${actionName}_ERROR`,
  };
  extraField.forEach((field) => {
    actionType[field] = `${actionName}_${field}`;
  });

  return actionType;
};

export const queryString = (params) => {
  return typeof params === "object"
    ? Object.keys(params)
        .map((key) => key + "=" + params[key])
        .join("&")
    : "";
};

/** Return a fetch promise
 * @return {Promise} - The fetch promise to call api
 */
export const serviceMaker = ({
  url = "",
  params = {},
  method = "GET",
  header = {},
  body,
  ...options
}) => {
  return fetch(`${url}?${queryString(params)}`, {
    method,
    headers: { "Content-Type": "application/json", ...header },
    body,
    ...options,
  });
};
