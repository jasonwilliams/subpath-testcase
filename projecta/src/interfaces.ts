export interface IContentItem {
  id: string;
  url: string;
  title: string;
  image: string;
  displayDate: string;
  summary?: string;
  contentStatus?: ContentBadgeLabelKey;
  saveState?: ISaveState;
  videoDuration?: number;
  videoResourceId?: string;
}

export enum ContentBadgeLabelKey {
  Updated = "updated",
  New = "new",
}

export interface ISaveState {
  isSaved: boolean;
  id: string;
  type: string;
}
