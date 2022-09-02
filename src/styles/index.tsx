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

export const iconsStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    bottom: 0,
    flexDirection: 'column',
    height: 100,
    justifyContent: 'space-between',
    marginVertical: 30,
    position: 'absolute',
    right: 0,
    width: 60,
  },
  iconWrapper: {
    backgroundColor: 'rgba(109, 103, 103, 0.5)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5,
    borderWidth: 2,
    justifyContent: 'center',
    marginVertical: 5,
    paddingLeft: 2,
  },
});

export const fabIconStyles = StyleSheet.create({});
