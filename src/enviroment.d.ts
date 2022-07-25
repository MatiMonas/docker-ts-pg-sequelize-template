declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      DB_USERNAME: string;
      DB_PASSWORD: string
      DB_PORT: string;
      DB_NAME: string;
      DB_HOST: string;
      FORCE_SYNC_DB: string;
      SYNC_DB: string
    }
  }
}

export {};
