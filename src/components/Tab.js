import React, {useRef} from 'react';
import styled from 'styled-components/native';
import {Images} from '../images';
import {Transition, Transitioning} from 'react-native-reanimated';

const bgColors = {
  home: '#ffe1c5',
  logger: '#e5c1e5',
  documents: '#d7d8f8',
  menu: '#bce3fa',
};

const textColors = {
  home: '#c56b14',
  logger: '#f37ff3',
  documents: '#4b458c',
  menu: '#2d9cdb',
};

const Container = styled.TouchableWithoutFeedback``;
const Background = styled(Transitioning.View)`
  flex-direction: row;
  flex: auto;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.focused ? bgColors[props.label] : 'white'};
  border-radius: 100px;
  margin: 6px;
`;
const Icon = styled.Image`
  height: 24px;
  width: 24px;
`;
const Label = styled.Text`
  color: ${props => textColors[props.label]};
  font-weight: 600;
  margin-left: 8px;
  include-font-padding: false;
`;

export const TabButton = props => {
  const {label, accessibilityState, onPress} = props;
  const focused = accessibilityState.selected;
  const icon = focused ? Images.icons[`${label}Focused`] : Images.icons[label];
  const animationRef = useRef();

  const transition = (
    <Transition.Sequence>
      <Transition.Out type="fade" durationMs={0} />
      <Transition.Change interpolation="easeInOut" durationMs={400} />
      <Transition.In type="fade" durationMs={10} />
    </Transition.Sequence>
  );

  const _onPress = () => {
    animationRef?.current?.animateNextTransition();
    onPress();
  };

  return (
    <Container onPress={_onPress}>
      <Background
        label={label}
        focused={focused}
        ref={animationRef}
        transition={transition}>
        <Icon source={icon} />
        {focused && (
          <Label label={label}>
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </Label>
        )}
      </Background>
    </Container>
  );
};
