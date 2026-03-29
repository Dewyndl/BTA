import type { ITextbookItem } from '../interfaces';
import { IMAGES } from '../../../../../assets/images';

const DESCRIPTION =
  'Высокий уровень вовлечения представителей иной целевой аудитории';
const DESCRIPTION_LONG =
  'Высокий уровень вовлечения новостей представителей иной целевой аудитории уровень вовлечения иной целевой аудитории';

const BODY_PLACEHOLDER =
  'Высокий уровень вовлечения представителей целевой аудитории однозначно определяет каждого участника как способного принимать собственные решения касаемо направлений прогрессивного развития. Прежде всего, граница обучения кадров в значительной степени обусловливает важность стандартных подходов. С другой стороны, выбранный нами инновационный путь создаёт предпосылки для приоритизации разума над эмоциями. Не следует, однако, забывать, что укрепление и развитие внутренней структуры обеспечивает актуальность новых принципов формирования материально-технической и кадровой базы. Внезапно, интерактивные прототипы, инициированные исключительно синтетически, рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. С учётом сложившейся международной обстановки, разбавленное изрядной долей эмпатии, рациональное мышление требует от нас анализа как самодостаточных, так и внешне зависимых концептуальных решений.';

export const textbookItemsFaker: ITextbookItem[] = [
  {
    id: '1',
    title: 'Тема учебного пособия пример',
    imageUrl: IMAGES.EYES_ZONE,
    isVideo: false,
    body: BODY_PLACEHOLDER,
  },
  {
    id: '2',
    title: DESCRIPTION,
    imageUrl: IMAGES.FOREHEAD_ZONE,
    isVideo: true,
    body: BODY_PLACEHOLDER,
  },
  {
    id: '3',
    title: DESCRIPTION,
    imageUrl: IMAGES.GLABELLA_ZONE,
    isVideo: false,
    body: BODY_PLACEHOLDER,
  },
  {
    id: '4',
    title: DESCRIPTION,
    imageUrl: IMAGES.LIPS_ZONE,
    isVideo: true,
    body: BODY_PLACEHOLDER,
  },
  {
    id: '5',
    title: DESCRIPTION,
    imageUrl: IMAGES.NOSE_ZONE,
    isVideo: false,
    body: BODY_PLACEHOLDER,
  },
  {
    id: '6',
    title: DESCRIPTION_LONG,
    imageUrl: IMAGES.OVAL_ZONE,
    isVideo: true,
    body: BODY_PLACEHOLDER,
  },
  {
    id: '7',
    title: DESCRIPTION,
    imageUrl: IMAGES.NECK_ZONE,
    isVideo: false,
    body: BODY_PLACEHOLDER,
  },
  {
    id: '8',
    title: DESCRIPTION,
    imageUrl: IMAGES.MASSETER_ZONE,
    isVideo: true,
    body: BODY_PLACEHOLDER,
  },
  {
    id: '9',
    title: DESCRIPTION,
    imageUrl: IMAGES.TEMPORAL_ZONE,
    isVideo: false,
    body: BODY_PLACEHOLDER,
  },
  {
    id: '10',
    title: DESCRIPTION_LONG,
    imageUrl: IMAGES.HYPERHIDROSIS_ZONE,
    isVideo: true,
    body: BODY_PLACEHOLDER,
  },
];
