import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import SharedAlbumTitleCard from './SharedAlbumTitleCard';
import Avatars from './Avatars';
import theme from '../../assets/themes';
import ImageGallery from './ImageGallery';
import backgroundImages from '../../assets/data/backgroundImages';

const SharedAlbum = ({ route }) => {
  const {album} = route.params;

  return (
    <ScrollView>
      <SharedAlbumTitleCard album={album}/>
      <View style={styles.avatarContainer}>
        <Avatars avatars={album.avatars}/>
        <Text style={styles.avatarContainerText}> {`${album.avatars.length} people`}</Text>
      </View>
      <ImageGallery images={backgroundImages}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  avatarContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor: theme.colors.gray,
    marginHorizontal:theme.spacing.l,
    padding:theme.spacing.xs,
    borderRadius:theme.borderRadius.m
  },
  avatarContainerText:{
    ...theme.textVariants.body3,
    color:theme.colors.gray,
  }
}
  
)

export default SharedAlbum;