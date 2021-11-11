import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import Background from '../../components/Background';
import CardItem from '../../components/CardItem';
import DEMO from '../../../assets/data/demo';

const SwiperScreen = () =>{
  const [swiper, setSwiper] = useState<CardStack | null>(null);

  return (
    <Background>
      <CardStack
        loop
        verticalSwipe={false}
        renderNoMoreCards={() => null}
        ref={(newSwiper): void => setSwiper(newSwiper)}
        style={styles.container}
      >
        {DEMO.map((item) => (
          <Card key={item.id}>
            <CardItem
              hasActions
              image={item.image}
              name={item.name}
              description={item.description}
            />
          </Card>
        ))}
      </CardStack>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default SwiperScreen;
