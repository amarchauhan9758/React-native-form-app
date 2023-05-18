/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  forgotPassword: {
    textAlign: 'right',
    marginTop: 10,
    color: '#050A30',
    fontWeight: 'bold',
  },
  parent_view: {
    padding: 32,
    borderRadius: 20,
    // borderWidth: 2,
    // borderColor: 'cyan',
    borderStyle: 'solid',
    fontWeight: 'bold',
    backgroundColor: 'rgba(255, 255, 255, 0.5 )',
  },
  container: {
    flex: 1,
    resizeMode: 'cover',
    position: 'relative',
  },
  content: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: 'rgba(255, 255, 255, )',
    paddingHorizontal: 20,
    paddingVertical: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
    borderRadius: 10,
  },
  heading: {
    fontSize: 44,
    marginBottom: 20,
    textAlign: 'center',
    color: '#050A30',
    fontWeight: 'bold',
    fontFamily: 'cursive',
  },
  label: {
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    fontWeight: 'bold',
    borderColor: 'cyan',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
    color: 'gray',
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});
