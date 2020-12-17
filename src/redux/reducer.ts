import action from './action';

export interface item {
  title: String;
  description: String;
  id: Number;
}

type dataType = Array<item>;

export interface initialStateType {
  data: dataType;
}

const initialState: initialStateType = {
  data: getData(),
};

function getData() {
  let newItem = [];
  for (let index = 1; index < 9; index++) {
    newItem.push({
      title: 'Item' + index,
      description: 'Description for Item' + index,
      id: index,
    });
  }
  return newItem;
}

export default (
  state = initialState,
  {type, payload}: any,
): initialStateType => {
  switch (type) {
    case action.ADD:
      return {
        data: state.data,
      };

    default:
      return state;
  }
};
