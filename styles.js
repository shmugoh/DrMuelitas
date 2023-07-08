import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeadingText: {
    fontSize: 42,
    fontWeight: 'bold',
  },
  SubHeadingText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ExplainMeVideo: {
    width: 243,
    height: 432,
    borderRadius: 24,
  },

  ButtonSheet: {
    bigButton: {
      marginTop: 15,
      backgroundColor: '#f4f4f4',
      width: 80 * 3,
      height: 30 * 3,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 15,
    },
    bigButtonText: {
      color: '#0080FB',
      fontSize: 32,
      fontWeight: '600',
    },

    mediumButton: {
      marginTop: 15,
      backgroundColor: '#f4f4f4',
      width: 80 * 2,
      height: 30 * 2,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 15,
    },
    mediumButtonText: {
      color: '#0080FB',
      fontSize: 24,
      fontWeight: '500',
    },

    smallButton: {
      marginTop: 15,
      marginRight: 4,
      marginLeft: 4,
      backgroundColor: '#f4f4f4',
      width: 110,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 15,
    },
    smallButtonText: {
      color: '#0080FB',
      fontSize: 16,
      fontWeight: '600',
    },

    buttonRowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 24,
      marginTop: 5,
    },
  },

  TimeCard: {
    container: {
      backgroundColor: '#F0EFF4',
      borderRadius: 15,
      marginTop: 12,
      // marginBottom: 12,
      padding: 8,
      paddingBottom: 12,
    },

    separator: {
      borderBottomColor: '#D2D1D6',
      borderBottomWidth: StyleSheet.hairlineWidth + 0.2,
    },

    text: {
      color: '#020202',
      padding: 12,
      right: 18,
      marginRight: 64,
      fontSize: 18,
      fontWeight: '500',
    },
    button: {
      marginTop: 8,
      marginRight: 4,
      marginLeft: 4,
      marginBottom: 8,
      left: 15,
      backgroundColor: '#D8D7DD',
      width: 60,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 4,
    },

    buttonText: {
      color: '#020202',
      fontSize: 16,
      fontWeight: '400',
    },
  },

  BottomSheet: {
    bottomContainer: {
      marginHorizontal: 15,
    },
    bottomTitle: {
      fontSize: 32,
      fontWeight: '700',
      marginTop: 5,
      marginLeft: 4.3,
      marginBottom: 15,
      letterSpacing: 0.5,
      color: '#000',
      // alignItems: 'left'
    },
    bottomText: {
      color: 'black',
      letterSpacing: 0.5,
      textAlign: 'center',
    },
    bottomWelcomeVideo: {
      width: 243,
      height: 432,
      alignSelf: 'center',
      marginTop: 15,
      borderRadius: 24,
    },

    bottomStyle: {
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
  },
});

module.exports = styles;
