import React, { useRef, useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { palette } from '../../design';
import { CustomText } from '../../uikit';
import { reminderIntervalsStyles as styles } from './styles';
import {
  DEFAULT_INTERVALS,
  FOLLOW_UP_HEADING,
  NEED_HELP_LABEL,
  REMINDER_INTERVALS_INSTRUCTION,
  RESET_BUTTON_LABEL,
} from './constants';
import type { IntervalItem } from './constants';

export const ReminderIntervals = () => {
  const [intervals, setIntervals] = useState<IntervalItem[]>(DEFAULT_INTERVALS);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const inputRef = useRef<TextInput>(null);

  const handleReset = () => {
    setIntervals([...DEFAULT_INTERVALS]);
    setEditingId(null);
  };

  const startEditing = (item: IntervalItem) => {
    setEditingId(item.id);
    setEditValue(item.value);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const commitEdit = () => {
    if (editingId && editValue.trim()) {
      setIntervals((prev) => prev.map((i) => (i.id === editingId ? { ...i, value: editValue.trim() } : i)));
    }
    setEditingId(null);
  };

  const examination = intervals.find((i) => i.id === 'exam');
  const followUpItems = intervals.filter((i) => i.id !== 'exam');

  const renderIntervalValue = (item: IntervalItem) => {
    if (editingId === item.id) {
      return (
        <TextInput
          ref={inputRef}
          value={editValue}
          onChangeText={setEditValue}
          onBlur={commitEdit}
          onSubmitEditing={commitEdit}
          returnKeyType="done"
          style={{ color: palette.primary, fontSize: 14, minWidth: 60, textAlign: 'right', textDecorationLine: 'underline' }}
        />
      );
    }
    return (
      <CustomText value={item.value} variant="medium" fontSize={14} color={palette.primary} customTextStyle={styles.intervalValue} />
    );
  };

  return (
    <View style={styles.scrollContent}>
      <View style={styles.instruction}>
        <CustomText value={REMINDER_INTERVALS_INSTRUCTION} variant="medium" fontSize={14} color={palette.textSecondary} />
      </View>

      <View style={styles.section}>
        {examination && (
          <Pressable style={styles.row} onPress={() => startEditing(examination)}>
            <CustomText value={examination.label} variant="medium" fontSize={14} color={palette.textSecondary} />
            {renderIntervalValue(examination)}
          </Pressable>
        )}
        <View style={styles.divider} />
        <View style={styles.heading}>
          <CustomText value={FOLLOW_UP_HEADING} variant="semibold" fontSize={14} color={palette.textPrimary} />
        </View>
        {followUpItems.map((item) => (
          <React.Fragment key={item.id}>
            <View style={styles.divider} />
            <Pressable style={styles.row} onPress={() => startEditing(item)}>
              <CustomText value={item.label} variant="medium" fontSize={14} color={palette.textSecondary} />
              {renderIntervalValue(item)}
            </Pressable>
          </React.Fragment>
        ))}
      </View>

      <Pressable style={styles.resetButton} onPress={handleReset}>
        <CustomText value={RESET_BUTTON_LABEL} variant="medium" fontSize={14} color={palette.white} />
      </Pressable>

      <Pressable style={styles.needHelpLink} onPress={() => {}}>
        <CustomText value={NEED_HELP_LABEL} variant="medium" fontSize={14} color={palette.primary} customTextStyle={{ textDecorationLine: 'underline' }} />
      </Pressable>
    </View>
  );
};
