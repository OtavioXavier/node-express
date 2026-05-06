import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const customersTable = pgTable('customers', {
  id: serial('id').primaryKey(),
  name: text('name'),
  email: text('email'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});
