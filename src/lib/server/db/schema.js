import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const task = sqliteTable('task', {
	id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	title: text('title').notNull(),
	priority: integer('priority').notNull().default(1)
});

// Tabel Pengguna (Admin & Operator)
export const users = sqliteTable('users', {
	id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	username: text('username').notNull().unique(),
	name: text('name').notNull(),
	passwordHash: text('password_hash').notNull(),
	role: text('role').notNull().default('operator'), // 'admin' atau 'operator'
	createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString())
});

// Tabel Sesi Login (Database-backed session)
export const sessions = sqliteTable('sessions', {
	id: text('id').primaryKey(), // Session token / UUID
	userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
	expiresAt: integer('expires_at').notNull() // Unix timestamp
});

// Tabel Artikel
export const articles = sqliteTable('articles', {
	id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	title: text('title').notNull(),
	slug: text('slug').notNull().unique(),
	content: text('content').notNull(),
	summary: text('summary').notNull(),
	category: text('category').notNull(), // 'Kehamilan', 'Persalinan', 'Perawatan Bayi', 'Kesehatan Ibu', 'Nutrisi'
	image: text('image').notNull(), // URL atau path file '/uploads/...'
	readingTime: text('reading_time').notNull().default('5 Menit Baca'),
	featured: integer('featured', { mode: 'boolean' }).notNull().default(false),
	authorId: text('author_id').references(() => users.id, { onDelete: 'set null' }),
	createdAt: text('created_at').notNull().$defaultFn(() => new Date().toISOString())
});
