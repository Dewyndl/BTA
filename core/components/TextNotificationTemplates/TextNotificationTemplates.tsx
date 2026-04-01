import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Pressable,
  ScrollView,
  TextInput,
  View,
} from 'react-native';
import { CustomText } from '../../uikit';
import { FontsFamilyEnum, FontStyleEnum, FontWeightEnum } from '../../uikit/CustomText';
import { PencilIcon, CheckIcon, CloseIcon } from '../../../assets';
import type { ITemplateItem } from './interfaces';
import {
  DEFAULT_TEMPLATE_TEXT,
  TEMPLATE_LABELS,
  REMINDER_INTERVAL_VARIABLE,
  MAX_TEMPLATE_LENGTH,
  INSERT_VARIABLE_LABEL,
  INSERT_STANDARD_TEMPLATE_LABEL,
  NEW_TEMPLATE_LABEL,
  NEW_TEMPLATE_NAME_PLACEHOLDER,
  NEW_TEMPLATE_TEXT_PLACEHOLDER,
  VALIDATION_ERROR_MESSAGE,
} from './constants';
import { textNotificationTemplatesStyles as styles } from './styles';

const greyText = {
  fontStyle: FontStyleEnum.NORMAL,
  fontWeight: FontWeightEnum.MEDIUM,
  fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
  fontSize: 14,
  color: '#424242',
} as const;

const createDefaultTemplates = (): ITemplateItem[] =>
  TEMPLATE_LABELS.map((title, i) => ({
    id: `default-${i}`,
    title,
    text: DEFAULT_TEMPLATE_TEXT.replace('2 недели', REMINDER_INTERVAL_VARIABLE),
    isDefault: true,
  }));

const validateText = (text: string): boolean =>
  text.length <= MAX_TEMPLATE_LENGTH;

export const TextNotificationTemplates = () => {
  const [templates, setTemplates] = useState<ITemplateItem[]>(createDefaultTemplates);
  const [customTemplates, setCustomTemplates] = useState<ITemplateItem[]>([]);
  const [viewMode, setViewMode] = useState<'list' | 'edit' | 'new'>('list');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formTitle, setFormTitle] = useState('');
  const [formText, setFormText] = useState('');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('notif_templates').then(stored => {
      if (stored) {
        const parsed: ITemplateItem[] = JSON.parse(stored);
        setTemplates(parsed.filter(t => t.isDefault));
        setCustomTemplates(parsed.filter(t => !t.isDefault));
      }
    });
  }, []);

  const allTemplates = [...templates, ...customTemplates];

  const handleEditTemplate = useCallback((item: ITemplateItem) => {
    setEditingId(item.id);
    setFormTitle(item.title);
    setFormText(item.text);
    setFormError('');
    setViewMode('edit');
  }, []);

  const handleAddNew = useCallback(() => {
    setEditingId(null);
    setFormTitle('');
    setFormText('');
    setFormError('');
    setViewMode('new');
  }, []);

  const handleCancel = useCallback(() => {
    setViewMode('list');
    setEditingId(null);
    setFormError('');
  }, []);

  const handleInsertVariable = useCallback(() => {
    setFormText((prev) => prev + REMINDER_INTERVAL_VARIABLE);
  }, []);

  const handleInsertStandard = useCallback(() => {
    setFormText(DEFAULT_TEMPLATE_TEXT.replace('2 недели', REMINDER_INTERVAL_VARIABLE));
    setFormError('');
  }, []);

  const handleSave = useCallback(() => {
    if (!validateText(formText)) {
      setFormError(VALIDATION_ERROR_MESSAGE);
      return;
    }
    setFormError('');
    if (viewMode === 'new') {
      const title =
        formTitle.trim() || `Мой шаблон номер ${customTemplates.length + 1}`;
      const newItem: ITemplateItem = { id: `custom-${Date.now()}`, title, text: formText, isDefault: false };
      const updatedCustom = [...customTemplates, newItem];
      setCustomTemplates(updatedCustom);
      AsyncStorage.setItem('notif_templates', JSON.stringify([...templates, ...updatedCustom]));
    } else if (editingId) {
      const isDefault = templates.some((t) => t.id === editingId);
      if (isDefault) {
        const updatedTemplates = templates.map((t) =>
          t.id === editingId ? { ...t, text: formText } : t
        );
        setTemplates(updatedTemplates);
        AsyncStorage.setItem('notif_templates', JSON.stringify([...updatedTemplates, ...customTemplates]));
      } else {
        const updatedCustom = customTemplates.map((t) =>
          t.id === editingId ? { ...t, title: formTitle.trim() || t.title, text: formText } : t
        );
        setCustomTemplates(updatedCustom);
        AsyncStorage.setItem('notif_templates', JSON.stringify([...templates, ...updatedCustom]));
      }
    }
    setViewMode('list');
    setEditingId(null);
  }, [viewMode, editingId, formTitle, formText, templates, customTemplates]);

  const isSaveDisabled = formError.length > 0 || !validateText(formText);
  const isEditMode = viewMode === 'edit';
  const isNewMode = viewMode === 'new';
  const isFormVisible = isEditMode || isNewMode;
  const editingItem = editingId
    ? allTemplates.find((t) => t.id === editingId)
    : null;

  if (isFormVisible) {
    return (
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {isNewMode && (
          <>
            <View style={styles.formLabel}>
              <CustomText value={NEW_TEMPLATE_LABEL} textStyles={greyText} />
            </View>
            <TextInput
              style={styles.nameInput}
              value={formTitle}
              onChangeText={setFormTitle}
              placeholder={NEW_TEMPLATE_NAME_PLACEHOLDER}
              placeholderTextColor="#838383"
            />
          </>
        )}

        {isEditMode && editingItem && (
          <View style={styles.formLabel}>
            <CustomText
              value={editingItem.title}
              textStyles={greyText}
            />
          </View>
        )}

        <TextInput
          style={[
            styles.templateText,
            styles.templateTextActive,
            formError ? styles.templateTextError : undefined,
          ]}
          value={formText}
          onChangeText={(text) => {
            setFormText(text);
            if (formError && validateText(text)) setFormError('');
          }}
          placeholder={isNewMode ? NEW_TEMPLATE_TEXT_PLACEHOLDER : undefined}
          placeholderTextColor="#838383"
          multiline
          textAlignVertical="top"
        />

        <Pressable style={styles.insertVariableLink} onPress={handleInsertVariable}>
          <CustomText
            value={INSERT_VARIABLE_LABEL}
            textStyles={{
              ...greyText,
              color: '#0E7C7B',
              textDecorationLine: 'underline',
            }}
          />
        </Pressable>

        <View style={styles.charCount}>
          <CustomText
            value={`${formText.length}/${MAX_TEMPLATE_LENGTH}`}
            textStyles={greyText}
          />
        </View>

        {formError ? (
          <CustomText value={formError} textStyles={styles.errorText} />
        ) : null}

        {isEditMode && (
          <Pressable
            style={styles.insertStandardButton}
            onPress={handleInsertStandard}
          >
            <CustomText
              value={INSERT_STANDARD_TEMPLATE_LABEL}
              textStyles={{ ...greyText, color: '#FFF' }}
            />
          </Pressable>
        )}

        <View style={styles.actionRow}>
          <Pressable
            style={[styles.actionButton, styles.actionButtonCancel]}
            onPress={handleCancel}
          >
            <CloseIcon size={24} color="#FFF" />
          </Pressable>
          <Pressable
            style={[
              styles.actionButton,
              styles.actionButtonSave,
              isSaveDisabled && styles.actionButtonDisabled,
            ]}
            onPress={handleSave}
            disabled={isSaveDisabled}
          >
            <CheckIcon size={24} color="#FFF" />
          </Pressable>
        </View>
      </ScrollView>
    );
  }

  return (
    <>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {allTemplates.map((item) => (
          <View key={item.id} style={styles.templateCard}>
            <View style={styles.templateCardHeader}>
              <CustomText
                value={item.title}
                textStyles={{
                  ...greyText,
                  fontWeight: FontWeightEnum.SEMI_BOLD,
                  fontFamily: FontsFamilyEnum.MONTSERRAT_SEMIBOLD,
                  color: '#222221',
                }}
              />
              <Pressable
                style={styles.pencilIcon}
                onPress={() => handleEditTemplate(item)}
              >
                <PencilIcon size={20} color="#424242" />
              </Pressable>
            </View>
            <CustomText
              value={item.text}
              textStyles={{ ...greyText, fontSize: 12 }}
              numberOfLines={4}
            />
          </View>
        ))}
      </ScrollView>

      <Pressable style={styles.fab} onPress={handleAddNew}>
        <CustomText
          value="+"
          textStyles={{
            fontStyle: FontStyleEnum.NORMAL,
            fontWeight: FontWeightEnum.MEDIUM,
            fontFamily: FontsFamilyEnum.MONTSERRAT_MEDIUM,
            fontSize: 28,
            color: '#FFF',
          }}
        />
      </Pressable>
    </>
  );
};
