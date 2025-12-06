import { pgTable, uuid, varchar, text, timestamp, integer, boolean } from 'drizzle-orm/pg-core'
import { users } from './users'

export const services = pgTable('services', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  description: text('description'),
  targetUrl: varchar('target_url', { length: 500 }).notNull(),
  pathPrefix: varchar('path_prefix', { length: 100 }),
  pathRewrite: text('path_rewrite'),
  isEnabled: boolean('is_enabled').notNull().default(true),
  status: integer('status').notNull().default(1),
  createdBy: uuid('created_by').references(() => users.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})
