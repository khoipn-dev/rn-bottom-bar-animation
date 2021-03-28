import React from 'react';
import {TouchableHighlight} from 'react-native';
import styled from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Reanimated, {
  withTiming,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withDelay,
} from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';

const ReanimatedTouchableHighlight = Reanimated.createAnimatedComponent(
  TouchableHighlight,
);

const Container = styled.View`
  flex: auto;
  justify-content: center;
  align-items: center;
  margin: 0 15px 0 15px;
`;

const GroupButton = styled.View`
  flex: auto;
  position: absolute;
  top: -36px;
  align-items: center;
  justify-content: center;
`;

const PrimaryButton = styled(ReanimatedTouchableHighlight)`
  width: 72px;
  height: 72px;
  background-color: #7f58ff;
  border-radius: 36px;
  justify-content: center;
  align-items: center;
  border-width: 4px;
  border-color: #fff;
`;

const SecondaryButton = styled(Reanimated.View)`
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: #7f58ff;
  position: absolute;
`;

const PrimaryButtonBorder = styled(Reanimated.View)`
  width: 72px;
  height: 72px;
  border-radius: 36px;
  background-color: #7f58ff20;
  position: absolute;
`;

export const AddButtonBottomTab = props => {
  const buttonSize = useSharedValue(1);
  const mode = useSharedValue(0);

  const _onPress = () => {
    if (mode.value === 0) {
      props?.onPress();
    } else {
      mode.value = 0;
    }
  };

  const _onLongPress = () => {
    buttonSize.value = withSequence(
      withTiming(0.9, {duration: 200}),
      withTiming(1),
    );
    mode.value = mode.value === 0 ? 1 : 0;
  };

  const buttonStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: buttonSize.value},
        {
          rotate: withTiming(mode.value === 1 ? '45deg' : '0deg', {
            duration: 100,
          }),
        },
      ],
    };
  });

  const buttonBorderStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(mode.value === 1 ? 1.2 : 1, {
            duration: 300,
          }),
        },
      ],
    };
  });

  const secondaryStyle1st = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(mode.value === 1 ? -70 : -0, {
            duration: 300,
          }),
        },
        {
          translateY: withTiming(mode.value === 1 ? -30 : -0, {
            duration: 300,
          }),
        },
        {
          scale: withTiming(mode.value === 1 ? 1 : 0.2, {
            duration: 400,
          }),
        },
      ],
      opacity: withTiming(mode.value === 1 ? 1 : 0, {
        duration: 300,
      }),
    };
  });

  const secondaryStyle2nd = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withDelay(
            50,
            withTiming(mode.value === 1 ? -75 : 0, {
              duration: 300,
            }),
          ),
        },
        {
          scale: withTiming(mode.value === 1 ? 1 : 0.2, {
            duration: 400,
          }),
        },
      ],
      opacity: withTiming(mode.value === 1 ? 1 : 0, {
        duration: 300,
      }),
    };
  });

  const secondaryStyle3rd = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withDelay(
            100,
            withTiming(mode.value === 1 ? 70 : 0, {
              duration: 300,
            }),
          ),
        },
        {
          translateY: withDelay(
            100,
            withTiming(mode.value === 1 ? -30 : 0, {
              duration: 300,
            }),
          ),
        },
        {
          scale: withTiming(mode.value === 1 ? 1 : 0.2, {
            duration: 400,
          }),
        },
      ],
      opacity: withTiming(mode.value === 1 ? 1 : 0, {
        duration: 300,
      }),
    };
  });

  return (
    <Container>
      <GroupButton>
        <PrimaryButtonBorder style={buttonBorderStyles} />
        <SecondaryButton style={secondaryStyle1st}>
          <Feather name="clock" size={24} color="#FFF" />
        </SecondaryButton>
        <SecondaryButton style={secondaryStyle2nd}>
          <Feather name="activity" size={24} color="#FFF" />
        </SecondaryButton>
        <SecondaryButton style={secondaryStyle3rd}>
          <Feather name="thermometer" size={24} color="#FFF" />
        </SecondaryButton>
        <PrimaryButton
          style={buttonStyles}
          onPress={_onPress}
          onLongPress={_onLongPress}
          underlayColor="#7F58FF">
          <FontAwesome5 name="plus" size={24} color="#FFF" />
        </PrimaryButton>
      </GroupButton>
    </Container>
  );
};
