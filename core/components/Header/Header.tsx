import { View } from 'react-native';
import { palette } from '../../design';
import { Button, CustomText } from '../../uikit';
import { BackIcon } from '../../../assets';
import { flexbox } from '../../design';
import { IHeaderProps } from './interfaces';
import { headerStyle } from './styles';

export const Header = ({
  title,
  subtitle,
  backClick,
  rightElement,
  titleColor = palette.textSecondary,
}: IHeaderProps) => {
  return (
    <View style={[flexbox.directionRow, flexbox.justifyBetween, headerStyle.container]}>
      <Button Icon={<BackIcon />} noFillDefaultStyles onPress={backClick} />
      <View style={headerStyle.titleBlock}>
        <CustomText
          value={title}
          variant="medium"
          fontSize={18}
          color={titleColor}
        />
        {subtitle ? (
          <CustomText
            value={subtitle}
            variant="regular"
            fontSize={12}
            color={palette.placeholder}
          />
        ) : null}
      </View>
      {rightElement ? (
        <View style={headerStyle.rightElement}>{rightElement}</View>
      ) : (
        <View style={headerStyle.emptyView} />
      )}
    </View>
  );
};
