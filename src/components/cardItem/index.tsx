import React, {useState} from 'react';
import {StyleSheet, View, Alert, ListRenderItem} from 'react-native';
import {
  Divider,
  List,
  ListItem,
  Text,
  Button,
  Modal,
  Card,
} from '@ui-kitten/components';
import {Icon} from 'react-native-eva-icons';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {item as itemType} from '../../redux/reducer';

import styles from './list.style';

export default function ListItemTodo() {
  const data = useSelector((state: RootState) => state.data);

  function deleteItem(item: itemType) {
    // Alert.alert(item.title)
    setSelectedItem(item);
    setVisible(true);
  }

  const renderItemAccessory = (item: RootState, index) => {
    // console.log(item, index)
    return (
      <Button size="tiny" onPress={() => deleteItem(item, index)}>
        FOLLOW
      </Button>
    );
  };

  const renderItemIcon = (props) => (
    <Icon {...props} name="github" fill="white" />
  );

  const renderItem: ListRenderItem<itemType> = ({item, index}) => (
    <ListItem
      title={`${item.title}`}
      description={`${item.description}`}
      style={styles.itemStyle}
      accessoryLeft={renderItemIcon}
      accessoryRight={() => renderItemAccessory(item, index)}
    />
  );

  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<itemType>();

  return (
    <View>
      <List
        // style={styles.container}
        data={data}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Text>{`Delete ${selectedItem?.title}`}</Text>
          <Button onPress={() => setVisible(false)} style={styles.modalButton}>
            Delete
          </Button>
          <Button onPress={() => setVisible(false)}>Cancel</Button>
        </Card>
      </Modal>
    </View>
  );
}
