import { pgTable, uuid, varchar, text, timestamp, integer } from 'drizzle-orm/pg-core'
import { users } from './users'

export const auditLogs = pgTable('audit_logs', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id),
  action: varchar('action', { length: 100 }).notNull(),
  resource: varchar('resource', { length: 100 }).notNull(),
  resourceId: uuid('resource_id'),
  details: text('details'),
  ipAddress: varchar('ip_address', { length: 45 }),
  userAgent: text('user_agent'),
  status: integer('status').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})
