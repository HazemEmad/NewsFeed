import React, {useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import {IMAGES} from '../../assets';

export type CustomImageProps = {
  style: {};
  source: {uri: string};
  resizeMode?: 'center' | 'contain' | 'cover' | 'stretch';
};

export const CustomImage: React.FC<CustomImageProps> = ({
  style,
  source,
  resizeMode,
}) => {
  const loading = source != undefined && source?.uri;

  const [loadImage, setLoadImage] = useState(loading);
  const [error, setError] = useState(false);

  const defaultImage = IMAGES.placeholder;

  const src = error ? defaultImage : source;

  const display = loadImage ? 'none' : 'flex';

  const resizeM = resizeMode ? resizeMode : FastImage.resizeMode.cover;

  useEffect(() => {
    checkImageURL(source.uri);
  }, []);

  const checkImageURL = (URL: string) => {
    fetch(URL)
      .then(res => {
        if (res.status == 200) {
          setError(false);
        } else {
          setError(true);
        }
      })
      .catch(err => {
        setError(true);
      });
  };

  const onLoadEnd = () => {
    setLoadImage(false);
  };

  const renderImage = () => (
    <FastImage
      style={[
        loadImage
          ? {}
          : {
              height: '100%',
              width: '100%',
              display,
            },
      ]}
      source={src}
      onLoadEnd={onLoadEnd}
      resizeMode={resizeM}
    />
  );

  return (
    <View style={{...style, overflow: 'hidden'}}>
      {loadImage ? (
        <SkeletonContent
          isLoading={true}
          containerStyle={{height: '100%', width: '100%'}}>
          <View style={{height: '100%', width: '100%'}} />
        </SkeletonContent>
      ) : null}
      {renderImage()}
    </View>
  );
};
