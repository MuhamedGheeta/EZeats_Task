import Colors from '@common/colors';
import CustomDivider from '@components/customDivider';
import MainHeader from '@components/mainHeader';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const allOrders = [
  {
    id: '1',
    clientName: 'Client One',
    waiterName: 'Waiter Name',
    orderNumber: 'TX-1231',
    orderType: 'Pickup',
    time: '19:24 PM',
    price: 650,
    isSmsSent: false,
    isPickedUp: false,
    status: 'Home',
    items: [
      {
        name: 'Cheesy Buffalo Burger',
        quantity: 2,
        imageUrl: require('../../assets/images/burger.png'),
        price: 650,
        extras: ['Extra Cheese', 'Pickles'],
      },
    ],
  },
  {
    id: '2',
    clientName: 'Client Two',
    waiterName: 'Waiter Name',
    orderNumber: 'S42',
    orderType: 'Delivery',
    time: '19:24 PM',
    price: 950,
    isSmsSent: true,
    isPickedUp: true,
    status: 'Ready',
    items: [
      {
        name: 'Buffalo Signature Fries',
        quantity: 1,
        imageUrl: require('../../assets/images/burger.png'),
        price: 250,
        extras: [],
      },
      {
        name: 'Coca-Cola',
        quantity: 2,
        imageUrl: require('../../assets/images/burger.png'),
        price: 100,
        extras: [],
      },
    ],
  },
  {
    id: '3',
    clientName: 'Client Three',
    waiterName: 'Waiter Name',
    orderNumber: 'TX-66',
    orderType: 'Table 7',
    time: '19:24 PM',
    price: 1200,
    isSmsSent: true,
    isPickedUp: true,
    status: 'Ready',
    items: [
      {
        name: 'Classic Beef Burger',
        quantity: 1,
        imageUrl: require('../../assets/images/burger.png'),
        price: 800,
        extras: ['Extra Beef Patty'],
      },
      {
        name: 'French Fries',
        quantity: 2,
        imageUrl: require('../../assets/images/burger.png'),
        price: 200,
        extras: [],
      },
    ],
  },
  {
    id: '4',
    clientName: 'Client Four',
    waiterName: 'Waiter Name',
    orderNumber: 'TX-1232',
    orderType: 'Pickup',
    time: '19:24 PM',
    price: 700,
    isSmsSent: false,
    isPickedUp: false,
    status: 'Home',
    items: [
      {
        name: 'Veggie Burger',
        quantity: 1,
        imageUrl: require('../../assets/images/burger.png'),
        price: 700,
        extras: ['Avocado', 'Extra Sauce'],
      },
    ],
  },
  {
    id: '5',
    clientName: 'Client Five',
    waiterName: 'Waiter Name',
    orderNumber: 'TX-1233',
    orderType: 'Pickup',
    time: '19:24 PM',
    price: 600,
    isSmsSent: false,
    isPickedUp: false,
    status: 'Home',
    items: [
      {
        name: 'Chicken Wrap',
        quantity: 1,
        imageUrl: require('../../assets/images/burger.png'),
        price: 600,
        extras: ['Extra Cheese'],
      },
    ],
  },
  {
    id: '6',
    clientName: 'Client Six',
    waiterName: 'Waiter Name',
    orderNumber: 'TX-1234',
    orderType: 'Pickup',
    time: '19:24 PM',
    price: 500,
    isSmsSent: false,
    isPickedUp: false,
    status: 'Home',
    items: [
      {
        name: 'Buffalo Wings',
        quantity: 1,
        imageUrl: require('../../assets/images/burger.png'),
        price: 500,
        extras: [],
      },
    ],
  },
];

const OrderCard = ({
  item,
  onPress,
}: {
  item: (typeof allOrders)[0];
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.8}>
      {/* The rest of your card stays the same */}
      <View style={styles.rowBetween}>
        <Text style={styles.waiterName}>{item.waiterName}</Text>
        <Text style={styles.orderNumber}>{item.orderNumber}</Text>
      </View>

      <View style={styles.rowBetween}>
        <Text style={styles.time}>🕒 {item.time}</Text>
        <Text style={styles.orderType}>{item.orderType}</Text>
      </View>
      <CustomDivider />
      <View style={styles.rowBetween}>
        <TouchableOpacity
          style={[styles.button, !item.isSmsSent && styles.buttonActive]}>
          <Text
            style={[
              styles.buttonText,
              !item.isSmsSent && styles.buttonActiveText,
            ]}>
            Send SMS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, item.isPickedUp && styles.buttonPicked]}>
          <Text
            style={[
              styles.buttonText,
              item.isPickedUp && styles.buttonPickedText,
            ]}>
            Picked Up
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'Home' | 'Ready'>('Home');

  const filteredOrders = allOrders.filter(order => order.status === activeTab);
  const navigation = useNavigation();

  return (
    <>
      <View style={{backgroundColor: Colors.white}}>
        {/* --- Your Main Header --- */}
        <View style={{paddingHorizontal: 15}}>
          <MainHeader showEzeats showEzeatsCircle />
        </View>
        {/* --- Tabs --- */}
        <View style={styles.tabsContainer}>
          <View style={styles.tabs}>
            <TouchableOpacity
              onPress={() => setActiveTab('Home')}
              style={styles.tabButton}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'Home' && styles.tabActive,
                ]}>
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActiveTab('Ready')}
              style={styles.tabButton}>
              <Text
                style={[
                  styles.tabText,
                  activeTab === 'Ready' && styles.tabActive,
                ]}>
                Ready
              </Text>
            </TouchableOpacity>
          </View>

          {/* Indicator */}
          <View style={styles.indicatorWrapper}>
            <View
              style={[
                styles.indicator,
                activeTab === 'Home' ? {left: '0%'} : {left: '50%'},
              ]}
            />
          </View>
        </View>
      </View>
      <View style={styles.container}>
        {/* --- Order List --- */}
        <FlatList
          data={filteredOrders}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <OrderCard
              item={item}
              onPress={() =>
                navigation.navigate('DetailsScreen', {order: item})
              }
            />
          )}
          ListEmptyComponent={<Text style={styles.noDataText}>No Orders</Text>}
          contentContainerStyle={{paddingBottom: 20}}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f1eded', padding: 16},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  logo: {width: 40, height: 40, borderRadius: 20},
  ezLogo: {width: 60, height: 30, resizeMode: 'contain'},
  restaurantName: {fontWeight: 'bold', fontSize: 16},
  hours: {fontSize: 12, color: 'gray'},
  tabsContainer: {
    marginTop: '15%',
    position: 'relative',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 12,
  },
  tabText: {
    fontSize: 16,
    color: '#d6d6d6',
  },
  tabActive: {
    color: '#29376B',
    fontWeight: 'bold',
  },
  indicatorWrapper: {
    position: 'relative',
    height: 2,
    backgroundColor: 'transparent',
  },
  indicator: {
    position: 'absolute',
    width: '50%', // Half width
    height: 2,
    backgroundColor: '#29376B', // Indicator color
    bottom: 0,
  },

  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
    // opacity: 0.9,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  waiterName: {fontWeight: '600', fontSize: 22, color: Colors.black},
  orderNumber: {fontWeight: '800', fontSize: 20, color: Colors.black},
  time: {color: 'gray', fontSize: 14},
  orderType: {fontWeight: '600', fontSize: 14, color: Colors.black},
  button: {
    flex: 1,
    padding: 8,
    margin: 4,
    borderRadius: 20,
    backgroundColor: '#eee',
    alignItems: 'center',
  },
  buttonText: {color: 'gray'},
  buttonActive: {backgroundColor: '#002D73'},
  buttonActiveText: {color: 'white'},
  buttonPicked: {backgroundColor: '#002D73'},
  buttonPickedText: {color: 'white'},
  noDataText: {textAlign: 'center', marginTop: 50, color: 'gray'},
});
