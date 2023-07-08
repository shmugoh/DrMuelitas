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
    },

    bottomButton: {
      marginTop: 15,
      backgroundColor: '#f4f4f4',
      width: 80 * 3,
      height: 30 * 3,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 15,
    },
    bottomButtonText: {
      color: '#0080FB',
      fontSize: 32,
      fontWeight: '600',
    },

    bottomStyle: {
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
  },
});

module.exports = styles;
