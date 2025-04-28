import Colors from '@common/colors';
import {ScaleWidth} from '@common/fitSize';
// import {ScaleWidth} from '@common/fitSize';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  headerIconBox: {
    width: ScaleWidth(40),
    height: ScaleWidth(40),
    borderRadius: ScaleWidth(40),
    // backgroundColor: Colors.placeholderColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
  },
});

export default styles;
