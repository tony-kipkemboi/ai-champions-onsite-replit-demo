// Storage interface for the application
// Currently not needed as feedback is saved directly to CSV

export interface IStorage {}

export class MemStorage implements IStorage {}

export const storage = new MemStorage();
