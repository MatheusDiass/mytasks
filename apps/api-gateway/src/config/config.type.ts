export type Config = {
  port: number;
  serviceURLs: {
    auth: string;
    task: string;
    user: string;
  };
};
