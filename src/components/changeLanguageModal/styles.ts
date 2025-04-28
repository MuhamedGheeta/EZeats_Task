import {ScaleHeight, ScaleWidth} from '@common/fitSize';
import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modal: {
    width: '100%',
    height: '100%',
    margin: 0,
    backgroundColor: 'rgb(0,18,40,1)',
    // opacity: 0.25,
    alignSelf: 'center',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    width: '100%',
    padding: ScaleWidth(25),
    // opacity: 0.25,
    // backgroundColor: 'rgb(0,18,40,1)',
  },
  rowHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: ScaleHeight(15),
  },
  sperateLine: {
    width: '100%',
    height: ScaleHeight(1.2),
    backgroundColor: '#EEE',
    alignSelf: 'center',
  },
  rowStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: ScaleHeight(15),
    width: '100%',
  },
  title: {
    fontSize: 16,
    // ...FontFamily.Medium,
    color: 'black',
  },
  optionTxt: {
    fontSize: 14,
    // ...FontFamily.Regular,
    color: 'black',
    marginStart: ScaleWidth(6),
  },
  openCircle: {
    width: ScaleWidth(17),
    height: ScaleWidth(17),
    borderRadius: ScaleWidth(17),
    borderWidth: ScaleWidth(1),
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeCircle: {
    width: ScaleWidth(13),
    height: ScaleWidth(13),
    borderRadius: ScaleWidth(13),
    backgroundColor: 'green',
  },
});
export default styles;
