type RecordItem = {
  tags: string[];
  notes: string;
  output: string;
  type: string;
  createAt?: Date;
  amount: number;

}
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => 'success' | 'duplicated';//success表示成功 duplicated表示name重复
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  save: () => void;
  remove: (id: string) => boolean;
}

interface Window {
  tagList: Tag[];
  createTag: (name: string) => void;
  removeTag: (id: string) => boolean;
  updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  findTag: (id: string) => Tag | undefined;
  recordList: RecordItem[];
  createRecord: (record: RecordItem) => void;
}
