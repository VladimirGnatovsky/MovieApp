export type Navigation = {
  navigate: (scene: string) => void;
};

export type DataT = {
  id: number;
  name: string;
  description: string;
  image: any;
};

export type FilmsT = {
  image: any;
  lastDescription: string;
  name: string;
};