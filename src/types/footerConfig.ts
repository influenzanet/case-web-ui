export interface FooterContentConfig {
  columns: Array<FooterColumnConfig>;
}

export interface FooterColumnConfig {
  columnKey: string;
  columnTitle: string;
  classNameOverride?: string;
  items: Array<FooterLinkItemConfig>;
}

export interface FooterLinkItemConfig {
  itemKey: string;
  type: 'internal' | 'external' | 'language' | 'dialog';
  itemText: string;
  value: string; // url, language or dialog
  iconClass?: string;
}
