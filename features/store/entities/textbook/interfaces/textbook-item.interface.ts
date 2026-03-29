export interface ITextbookItem {
  id: string;
  title: string;
  imageUrl: number; // require() result
  isVideo: boolean;
  /** Текст статьи для детальной страницы */
  body?: string;
}
