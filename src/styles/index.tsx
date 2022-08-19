import { StyleSheet } from 'react-native';

export const permissionsScreenStyles = StyleSheet.create({
  mainWrapper: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'center',
  },
  contentWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#6dc6da',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    width: 200,
  },
  textButton: {
    color: 'white',
    fontSize: 15,
    marginRight: 10,
  },
  permissionsText: {
    fontSize: 15,
    marginTop: 10,
  },
});

export const loadingScreenStyles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export const mapScreenStyles = StyleSheet.create({
  mainWrapper: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#6dc6da',
    borderRadius: 20,
    height: 30,
    justifyContent: 'center',
    marginTop: 10,
    width: 200,
  },
  textButton: {
    color: 'white',
    fontSize: 15,
  },
});

export const fabIconStyles = StyleSheet.create({
  mainWrapper: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    marginHorizontal: 8,
    marginVertical: 20,
    position: 'absolute',
    right: 0,
  },
});
