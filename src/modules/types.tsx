export type Navigation = {
  navigate: (scene: string) => void;
};

export type Data = {
  id: number;
  name: string;
  description: string;
  image: any;
};

export type Films = {
  image: any;
  lastDescription: string;
  name: string;
};

export type Card = {
  description?: string;
  hasActions?: boolean;
  hasVariant?: boolean;
  image: any;
  name: string;
};