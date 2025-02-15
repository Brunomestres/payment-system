import { boolean, pgTable, varchar, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { timestamps } from "../utils/columns.helpers";
export const paymentTable = pgTable("payment", {
  checkout_id: uuid().primaryKey().defaultRandom(),
  buyer_info: varchar({ length: 255 }).notNull(),
  seller_info: varchar({ length: 255 }).notNull(),
  credit_card_info: varchar({ length: 255 }).notNull(),
  is_payment_done: boolean().default(false),
  ...timestamps,
});

export const paymentOrderTable = pgTable("payment_order", {
  payment_order_id: uuid().primaryKey().defaultRandom(),
  buyer_info: varchar({ length: 255 }).notNull(),
  amount: varchar({ length: 255 }).notNull(),
  currency: varchar({ length: 255 }).notNull(),
  payment_order_status: varchar({ length: 255 }).notNull(),
  ledger_updated: boolean().default(false),
  wallet_updated: boolean().default(false),
  ...timestamps,
});

export const paymentRelations = relations(paymentOrderTable, ({ many }) => ({
  payment_order: many(paymentOrderTable),
}));
export const paymentOrderRelations = relations(paymentTable, ({ one }) => ({
  paymentTable: one(paymentTable),
}));
