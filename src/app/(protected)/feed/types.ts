export interface IColumn {
    flex: number
}

export interface Question {
    id: string;
    title: string;
    user: {
      name: string;
    };
    createdAt: string; // Add this property
  };