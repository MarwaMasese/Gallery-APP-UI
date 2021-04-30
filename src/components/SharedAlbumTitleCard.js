import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import theme from '../../assets/themes/index';

const SharedAlbumTitleCard = ({ album }) => {
  return (
    
      <ImageBackground style={styles.imageBackground} source={album.background}>
      <View style={styles.imageContentContainer}>
        <View>
          <Text style= {styles.imageTitle}>{album.title}</Text>
          <Text style= {styles.imageSubtitle}>{`created By ${album.user}`}</Text>
        </View>
        <View style= {styles.imageNumber}>
          <Text style= {styles.imageNumber}></Text>
        </View>
      </View>
      </ImageBackground>
    
  );
};

const styles = StyleSheet.create({
  imageBackground:{
    resizeMode:'cover',
    overflow:'hidden',
    borderRadius:theme.borderRadius.m,
    height:theme.imageHeight.lg,
    marginHorizontal:20,
    marginTop:theme.spacing.medium,
    paddingHorizontal:theme.spacing.medium,
    justifyContent:'flex-end'
  },
  imageContentContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    color: theme.white,
    margin:theme.spacing.lg,

  },
  imageNumber:{
    justifyContent:'flex-end'
  },
  imageTitle:{
    ...theme.textVariants.h1
  },
  imageSubtitle:{
    ...theme.textVariants.body2,

  },
  imageNumber:{
    ...theme.textVariants.body3
  }
})

export default SharedAlbumTitleCard;