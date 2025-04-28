import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import MainHeader from '@components/mainHeader';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '@common/colors';

export default function DetailsScreen() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<{params: {order: any}}, 'params'>>();
  const {order} = route.params;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <MainHeader
          showArrow={true}
          showEzeats={false}
          text="Order Details"
          onPressArrow={() => navigation.goBack()}
        />
        {/* <Text style={styles.headerTitle}>Order Details</Text> */}
        <TouchableOpacity
          style={styles.refundButton}
          // onPress={() => navigation.goBack()}
          >
          <Text style={styles.refundButtonText}>Refund</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{paddingBottom: 20}}>
        {/* Client Info */}
        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <View>
              <Text style={styles.clientName}>{order.clientName}</Text>
              <Text style={styles.orderNumber}>{order.orderNumber}</Text>
            </View>
            <TouchableOpacity style={styles.callButton}>
              <Ionicons name="call" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Order Status */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Order Status</Text>
          <View style={styles.rowBetween}>
            <Text style={styles.statusLabel}>🕒 Ordered At</Text>
            <Text style={styles.statusValue}>{order.time}</Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={styles.statusLabel}>📦 Order Type</Text>
            <Text style={styles.statusValue}>{order.orderType}</Text>
          </View>
          <View style={styles.rowBetween}>
            <Text style={styles.statusLabel}>💵 Order Price</Text>
            <Text style={styles.statusValue}>{order.price} EGP</Text>
          </View>
        </View>

        {/* Item Details */}
        <View style={styles.card}>
          <View style={styles.rowBetween}>
            <Text style={styles.sectionTitle}>
              Item Details ({order.items.length})
            </Text>
            <Ionicons name="chevron-up" size={20} color="#000" />
          </View>

          {order.items.map((item: any, index: number) => (
            <View key={index} style={styles.itemContainer}>
              <Image
                source={item.imageUrl}
                style={styles.itemImage}
                resizeMode="cover"
              />
              <View style={{flex: 1, marginLeft: 10}}>
                <Text style={styles.itemName}>
                  {item.name} ({item.quantity})
                </Text>
                {item.extras?.length > 0 ? (
                  item.extras.map((extra: any, idx: number) => (
                    <Text key={idx} style={styles.extraText}>
                      {extra}
                    </Text>
                  ))
                ) : (
                  <Text style={styles.extraText}>No Extras</Text>
                )}
              </View>
              <Text style={styles.itemPrice}>{item.price} EGP</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f9f9f9'},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerTitle: {fontSize: 20, fontWeight: 'bold', color: Colors.black},
  refundButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginTop: 10,
  },
  refundButtonText: {color: 'white', fontWeight: 'bold'},
  card: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  clientName: {fontSize: 16, fontWeight: 'bold', color: Colors.black},
  orderNumber: {color: '#888', marginTop: 4},
  callButton: {backgroundColor: '#4CAF50', padding: 8, borderRadius: 50},
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: Colors.black,
  },
  statusLabel: {color: '#555'},
  statusValue: {fontWeight: '500', color: Colors.gray},
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 12,
  },
  itemImage: {width: 50, height: 50, borderRadius: 8},
  itemName: {fontWeight: 'bold', fontSize: 14, color: Colors.gray},
  extraText: {color: '#777', fontSize: 12},
  itemPrice: {fontWeight: 'bold', fontSize: 14, color: Colors.black},
});
